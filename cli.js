#! /usr/bin/env node

var shortcuts = require('./shortcuts.json');
var output = require('./')(shortcuts);

output.forEach(function (line) {
  console.log(line);
});
