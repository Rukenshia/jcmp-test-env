#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const { TestEnvironment } = require("../index.js");

console.log(process.argv);

// check args
function getEntrypoint() {
  if (process.argv.length < 3) {
      // check if there's a package.json
      if (fs.existsSync('package.json')) {
          const data = JSON.parse(fs.readFileSync('package.json'));

          if (data.hasOwnProperty('main')) {
            return data.main;
          }
      }
      return null;
  }
  return process.argv[2];
}

const entrypoint = getEntrypoint();

if (entrypoint === null) {
  throw new Error(`USAGE: jcmp-test-env [entrypoint]`);
}

// create a new test environment
const env = new TestEnvironment();

// setup the global namespace
env.initializeEnvironment((k, v) => { global[k] = v; });

// load entrypoint
if (entrypoint.startsWith('/')) {
  require(entrypoint);
} else {
  require(path.join(process.cwd(), entrypoint));
}