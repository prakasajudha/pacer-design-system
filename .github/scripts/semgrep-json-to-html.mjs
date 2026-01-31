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
const paths = data.paths || {};
const scanned = Array.isArray(paths.scanned) ? paths.scanned : [];
const skippedRules = Array.isArray(data.skipped_rules) ? data.skipped_rules : [];

const errorRows = errors.map((e) => {
  const msg = e.long_msg ?? e.message ?? e.short_msg ?? "";
  return {
    code: e.code ?? "-",
    level: e.level ?? "-",
    type: e.type_ ?? e.type ?? "-",
    path: e.path ?? "-",
    message: msg,
    help: e.help ?? "",
  };
});

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
    h2 { font-size: 1rem; margin: 1.5rem 0 0.5rem; }
    .path-list { font-size: 0.8rem; max-height: 12em; overflow-y: auto; }
    .path-list li { margin: 0.2rem 0; }
  </style>
</head>
<body>
  <h1>Semgrep SAST Report</h1>
  <p class="meta">Findings: ${results.length} | Scan errors: ${errors.length} | Files scanned: ${scanned.length} | Skipped rules: ${skippedRules.length} | Generated: ${new Date().toISOString()}</p>

  ${
    results.length === 0
      ? '<p class="empty">No security/code-smell findings.</p>'
      : `
  <h2>Findings (security / code smell)</h2>
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

  ${
    errors.length > 0
      ? `
  <h2>Scan errors (parse / rule / runtime)</h2>
  <p class="meta">Ini penyebab scan tidak sempurna atau ada file/rule yang di-skip. Perbaiki agar semua file ter-scan.</p>
  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Level</th>
        <th>Type</th>
        <th>Path</th>
        <th>Message</th>
        <th>Help</th>
      </tr>
    </thead>
    <tbody>
      ${errorRows
        .map(
          (row) => `
      <tr>
        <td>${escapeHtml(String(row.code))}</td>
        <td class="${severityClass(row.level)}">${escapeHtml(String(row.level))}</td>
        <td><code>${escapeHtml(String(row.type))}</code></td>
        <td><code>${escapeHtml(String(row.path))}</code></td>
        <td class="message">${escapeHtml(String(row.message))}</td>
        <td class="refs">${escapeHtml(String(row.help))}</td>
      </tr>`
        )
        .join("")}
    </tbody>
  </table>
  `
      : ""
  }

  ${scanned.length > 0 ? `<h2>Paths scanned</h2><ul class="path-list">${scanned.slice(0, 200).map((p) => `<li><code>${escapeHtml(p)}</code></li>`).join("")}${scanned.length > 200 ? `<li class="empty">… dan ${scanned.length - 200} file lainnya</li>` : ""}</ul>` : ""}

  ${
    skippedRules.length > 0
      ? `<h2>Skipped rules</h2><ul class="path-list">${skippedRules.map((r) => `<li><code>${escapeHtml(r.rule_id || r)}</code>${r.details ? ": " + escapeHtml(r.details) : ""}</li>`).join("")}</ul>`
      : ""
  }
</body>
</html>`;

writeFileSync(outputPath, html, "utf8");
console.log("Wrote", outputPath, "(" + results.length + " findings)");
