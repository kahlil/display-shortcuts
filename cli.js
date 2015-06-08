#! /usr/bin/env node

// TODO's:
// - write test for add/overwrite shortcuts
// - `assignShortcuts()` add error handling check argument types

var fs = require('fs');
var output = require('./');
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

/**
 * Add/overwrite shortcuts
 *
 * @param {Array} ref Default shortcuts
 * @param {Array} array New shortcuts to add/overwrite
 * @return {Array} Extended shortcuts
 */
function assignShortcuts(ref, shortcuts) {
  var refKeys = ref.map(function(obj) { return Object.keys(obj)[0]; });
  var key, index;

  shortcuts.map(function(obj) {
    key = Object.keys(obj)[0];
    index = refKeys.indexOf(key);

    if (index === -1) {
      // Add new shortcut
      ref.push(obj);
    } else {
      // Overwrite existing shortcut
      ref[index] = obj;
    }
  });

  return ref;
}
