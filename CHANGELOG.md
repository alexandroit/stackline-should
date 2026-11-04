# Stackline changes

## 1.0.4 - 2026-11-04

- Correct the current package version and installation examples in the published README.
- Reject stale README version claims in the packed artifact before npm publication.

## 1.0.3

- Replace Rollup node-resolve's vulnerable deepmerge with the published, security-tested @stackline/deepmerge 1.1.0 using a parent-scoped override.
- Keep the build dependency security regression, current Node.js security pins, and generated browser metadata in sync.

## 1.0.0

- Scoped maintenance release preserving upstream library sources, exports, dependency ranges and supported runtime engines.
- Replaced obsolete development bundlers/runners with current Rollup and Mocha, retaining upstream runtime tests and published module formats.
- Added installed-tarball contracts, audited CI/CodeQL and artifact-only provenance/immutable releases.

Security maintenance: should-format3.0.3 is vendored with its original MIT license and upstream source hash. Its function-name parser now performs a linear scan instead of overlapping regex quantifiers. All CJS, ESM, standalone and browser outputs use the same corrected source; the external should-format dependency was removed. Ordinary inputs are compared with the upstream helper and adversarial input runs in an isolated process with a timeout.
