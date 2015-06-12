#! /usr/bin/env node

var fs = require('fs');
var output = require('./');
var assignShortcuts = require('./lib/assignShortcuts');
var pkg = require('./package.json');
var shortcuts = require('./shortcuts.json');

fs.readFile(process.env.HOME + '/.' + pkg.name + '/shortcuts.json', { encoding: 'utf8' }, function (err, res) {
  if (!err) {
    shortcuts = assignShortcuts(shortcuts, JSON.parse(res));
  }

  output(shortcuts).forEach(function (line) {
    console.log(line);
  });
});
