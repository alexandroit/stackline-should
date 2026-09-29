# Upstream review

Source: [should@13.2.3, 38910f74a4e70f9f66b109241a41a2b3e7468fdf](https://github.com/shouldjs/should.js/commit/38910f74a4e70f9f66b109241a41a2b3e7468fdf). Published upstream source files match the integrity-verified npm tarball. Generated distributions are rebuilt using current development tools; original library source, license and API contracts are retained.

## Issue review (2026-09-29)

- [#185: rejectedWith custom errors](https://github.com/shouldjs/should.js/issues/185): Retain and execute upstream promise/error assertion tests; do not introduce a new prototype matching rule.
- [#174: TypeScript extension definitions](https://github.com/shouldjs/should.js/issues/174): Keep the original declaration file unchanged.
- [#170: matchEach index parameter](https://github.com/shouldjs/should.js/issues/170): Preserve the existing API without adding an unreviewed callback argument.
- [#161: Browser harness](https://github.com/shouldjs/should.js/issues/161): Verify the regenerated browser bundle in an isolated VM alongside the full existing runtime suite.

No upstream maintainer was contacted. These are scoped compatibility decisions rather than claims that every issue was solved.

## Verification

Run `npm ci --ignore-scripts`, `npm run build`, `npm test`, `npm run test:package`, and `npm audit --audit-level=low`. CI and CodeQL must pass before the exact built tarball is published with provenance.

Security maintenance: should-format3.0.3 is vendored with its original MIT license and upstream source hash. Its function-name parser now performs a linear scan instead of overlapping regex quantifiers. All CJS, ESM, standalone and browser outputs use the same corrected source; the external should-format dependency was removed. Ordinary inputs are compared with the upstream helper and adversarial input runs in an isolated process with a timeout.
