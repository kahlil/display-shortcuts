'use strict';
var assert = require('assert');
var prepareOutput = require('../');

var obj = [
  { 'uni-c': 'a shortcut for unicorns' },
  { 'rainy-b': 'a shortcut for rainbows' }
]

var result = [
  '',
  'uni-c\ta shortcut for unicorns',
  '',
  'rainy-b\ta shortcut for rainbows',
  ''
]

it('should be an array of lines ready to log to console', function () {
  assert.deepEqual(prepareOutput(obj, true), result);
});
