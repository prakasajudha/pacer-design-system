#!/usr/bin/env node
/**
 * Converts Semgrep JSON output to a readable HTML report.
 * Usage: node semgrep-json-to-html.mjs [input.json] [output.html]
 * Default: semgrep-results.json -> semgrep-report.html
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "..");
const inputPath = process.argv[2] || join(root, "semgrep-results.json");
const outputPath = process.argv[3] || join(root, "semgrep-report.html");

const escapeHtml = (s) => {
  if (s == null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
};

const severityClass = (s) => {
  const v = (s || "").toUpperCase();
  if (v === "ERROR") return "severity-error";
  if (v === "WARNING") return "severity-warning";
  return "severity-info";
};

let data;
try {
  data = JSON.parse(readFileSync(inputPath, "utf8"));
} catch (e) {
  console.error("Failed to read or parse", inputPath, e.message);
  process.exit(1);
}

const results = Array.isArray(data.results) ? data.results : [];
const errors = Array.isArray(data.errors) ? data.errors : [];

const rows = results.map((r) => {
  const start = r.start || {};
  const end = r.end || {};
  const extra = r.extra || {};
  const meta = extra.metadata || {};
  const severity = extra.severity || meta.severity || "INFO";
  const message = extra.message || "";
  const cwe = meta.cwe;
  const owasp = meta.owasp;
  const refs = meta.references;
  const cweList = Array.isArray(cwe) ? cwe : cwe ? [cwe] : [];
  const owaspList = Array.isArray(owasp) ? owasp : owasp ? [owasp] : [];
  const refList = Array.isArray(refs) ? refs : refs ? [refs] : [];
  return {
    severity,
    checkId: r.check_id || "",
    path: r.path || "",
    line: start.line ?? end.line ?? "-",
    message,
    cwe: cweList.join("; "),
    owasp: owaspList.join("; "),
    references: refList,
  };
});

const html = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Semgrep SAST Report</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; margin: 1rem 2rem; max-width: 1200px; }
    h1 { font-size: 1.25rem; margin-bottom: 0.5rem; }
    .meta { color: #666; font-size: 0.875rem; margin-bottom: 1rem; }
    table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
    th, td { text-align: left; padding: 0.5rem 0.75rem; border-bottom: 1px solid #eee; }
    th { background: #f5f5f5; font-weight: 600; }
    .severity-error { color: #c00; font-weight: 600; }
    .severity-warning { color: #b45309; font-weight: 600; }
    .severity-info { color: #0a6ed1; }
    .message { max-width: 40em; }
    .refs { font-size: 0.75rem; color: #555; margin-top: 0.25rem; }
    .refs a { color: #0a6ed1; }
    .empty { color: #888; font-style: italic; }
  </style>
</head>
<body>
  <h1>Semgrep SAST Report</h1>
  <p class="meta">Total findings: ${results.length} | Errors (scan): ${errors.length} | Generated: ${new Date().toISOString()}</p>
  ${
    results.length === 0
      ? '<p class="empty">No findings.</p>'
      : `
  <table>
    <thead>
      <tr>
        <th>Severity</th>
        <th>Rule</th>
        <th>File</th>
        <th>Line</th>
        <th>Message</th>
        <th>CWE / OWASP</th>
      </tr>
    </thead>
    <tbody>
      ${rows
        .map(
          (row) => `
      <tr>
        <td class="${severityClass(row.severity)}">${escapeHtml(row.severity)}</td>
        <td><code>${escapeHtml(row.checkId)}</code></td>
        <td><code>${escapeHtml(row.path)}</code></td>
        <td>${escapeHtml(row.line)}</td>
        <td class="message">${escapeHtml(row.message)}</td>
        <td>
          ${row.cwe ? `<div>${escapeHtml(row.cwe)}</div>` : ""}
          ${row.owasp ? `<div class="refs">${escapeHtml(row.owasp)}</div>` : ""}
          ${(row.references || []).map((ref) => `<a href="${escapeHtml(ref)}" target="_blank" rel="noopener">Ref</a>`).join(" ")}
        </td>
      </tr>`
        )
        .join("")}
    </tbody>
  </table>
  `
  }
</body>
</html>`;

writeFileSync(outputPath, html, "utf8");
console.log("Wrote", outputPath, "(" + results.length + " findings)");
