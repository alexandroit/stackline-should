# Stackline changes

## 1.0.0

- Scoped maintenance release preserving upstream library sources, exports, dependency ranges and supported runtime engines.
- Replaced obsolete development bundlers/runners with current Rollup and Mocha, retaining upstream runtime tests and published module formats.
- Added installed-tarball contracts, audited CI/CodeQL and artifact-only provenance/immutable releases.

Security maintenance: should-format3.0.3 is vendored with its original MIT license and upstream source hash. Its function-name parser now performs a linear scan instead of overlapping regex quantifiers. All CJS, ESM, standalone and browser outputs use the same corrected source; the external should-format dependency was removed. Ordinary inputs are compared with the upstream helper and adversarial input runs in an isolated process with a timeout.
