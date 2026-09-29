/*eslint-env node */
"use strict";

const nodeResolve = require("@rollup/plugin-node-resolve").nodeResolve;

const commonjs = require("@rollup/plugin-commonjs");
const pkg = require("./package.json");

const banner = `/*!
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @author ${pkg.author}
 * @link ${pkg.homepage}
 * @license ${pkg.license}
 */
`;

module.exports = {
  output: {
    banner
  },
  plugins: [
    commonjs(),
    nodeResolve({
      mainFields: ["module", "jsnext:main", "main"],
      preferBuiltins: false
    })
  ]
};
