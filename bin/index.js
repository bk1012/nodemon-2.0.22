#!/usr/bin/env node

const nodemon = require('nodemon');
const cli = require('nodemon/lib/cli');

const options = cli.parse(process.argv);
nodemon(options);
