var assert = require('assert');
var assignShortcuts = require('../lib/assignShortcuts');

var shortcutsDefault = [
  { 'sc-a': 'description default' },
  { 'sc-b': 'description default' }
];

describe('assignShortcuts()', function() {
  it('should overwrite default shortcut description', function() {
    var shortcutsExtra = [
      { 'sc-a': 'description extra' }
    ];
    var expectedResult = [
      { 'sc-a': 'description extra' },
      { 'sc-b': 'description default' }
    ];
    var result = assignShortcuts(shortcutsDefault, shortcutsExtra);

    assert.deepEqual(result, expectedResult);
  });
  it('should add a new shortcut', function() {
    var shortcutsExtra = [
      { 'sc-c': 'description extra' }
    ];
    var expectedResult = [
      { 'sc-a': 'description default' },
      { 'sc-b': 'description default' },
      { 'sc-c': 'description extra' }
    ];
    var result = assignShortcuts(shortcutsDefault, shortcutsExtra);

    assert.deepEqual(result, expectedResult);
  });
});
