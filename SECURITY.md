# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

**DO NOT** create public GitHub issues untuk security vulnerabilities.

Sebagai gantinya, laporkan melalui:

1. **Email**: security@pertamina.com
2. **Subject**: [SECURITY] PACER - [Brief Description]

### Include:

- Detailed description vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (optional)

### Response Timeline:

- **24 hours**: Acknowledgment
- **7 days**: Initial assessment
- **30 days**: Fix & disclosure (jika confirmed)

### Security Updates

Security patches akan dipublish sebagai:

- Patch release untuk current major version
- Security advisory di GitHub
- Email notification ke registered users

## Security Best Practices

### For Library Consumers

```bash
# Regularly update
pnpm update @pacer-ui/react

# Audit dependencies
pnpm audit

# Use lock files
pnpm install --frozen-lockfile
```

### For Contributors

- Never commit secrets (API keys, tokens)
- Use `.env.local` untuk sensitive data
- Enable 2FA pada GitHub account
- Review dependencies sebelum add

## Known Security Considerations

### XSS Prevention

Semua component sudah:

- Escape user input
- Sanitize HTML content
- Use CSP-compatible inline styles

### Dependency Security

- Regular dependency audits (`pnpm audit`); CI fails on **high/critical** only (`pnpm audit --audit-level high`).
- **pnpm.overrides** in root `package.json` force patched versions: `preact`, `esbuild`, `lodash`.
- Two **moderate** advisories are tolerated until migration:
  - **eslint** (GHSA-p5wg-g6qr-c7cg): requires upgrade to ESLint 9 + @typescript-eslint v8 + flat config.
  - **vue-template-compiler** (GHSA-g3ch-rx76-35fx): transitive from @vue/language-core; no patched 2.x; Vue 3 runtime does not use it.
- Automated Dependabot updates; Snyk scanning in CI/CD optional.

### Supply Chain Security

- npm packages signed
- NuGet packages signed
- Verified publishers only

## Hall of Fame

Contributors yang report valid vulnerabilities:

_(Currently empty - be the first!)_

---

Thank you for helping keep PACER secure! 🔒
