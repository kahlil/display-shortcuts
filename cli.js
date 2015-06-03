#! /usr/bin/env node

var fs = require('fs');
var output = require('./');
var pkg = require('./package.json');
var shortcuts = require('./shortcuts.json');

fs.readFile(process.env.HOME + '/.' + pkg.name + '/shortcuts.json', { encoding: 'utf8' }, function (err, data) {
  if (!err) {
    shortcuts = shortcuts.concat(JSON.parse(data));
  }

  output(shortcuts).forEach(function (line) {
    console.log(line);
  });
});
