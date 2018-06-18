# Pageloader
This program downloads the page from web to specified folder (to the program's start directory by default).

Code in `src/index.js` wrote with Promises. Index.js in `src/asyncAwaitIndex/` rewrite with async/await. This index-files are fully interchangeable.

[![Build Status](https://travis-ci.org/exces-s/project-lvl1-s168.svg?branch=master)](https://travis-ci.org/exces-s/project-lvl1-s168)
[![Maintainability](https://api.codeclimate.com/v1/badges/fc9e5e1e8d7ea431cc4a/maintainability)](https://codeclimate.com/github/exces-s/project-lvl3-s238/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fc9e5e1e8d7ea431cc4a/test_coverage)](https://codeclimate.com/github/exces-s/project-lvl3-s238/test_coverage)

# Install:

`$ npm install page-loader-lav`

# Use:
`$ pageloader url` - save this page to current directory.

`$ pageloader url --output path/to/dir` - save this page to specified directory.

# Filename:
Filename is formed as follows:
1. Take the address of the page without a scheme
2. Replace all symbols except letters and numbers by `-`
3. Add `.html` at the end
