/**
 * Add/overwrite shortcuts
 *
 * @param {Array} ref Default shortcuts
 * @param {Array} array New shortcuts to add/overwrite
 * @return {Array} Extended shortcuts
 */
function assignShortcuts(ref, shortcuts) {
  var result = JSON.parse(JSON.stringify(ref)); // clone `ref` to don't overwrite it.
  var refKeys = result.map(function(obj) { return Object.keys(obj)[0]; });
  var key, index;

  shortcuts.map(function(obj) {
    key = Object.keys(obj)[0];
    index = refKeys.indexOf(key);

    if (index === -1) {
      // Add new shortcut
      result.push(obj);
    } else {
      // Overwrite existing shortcut
      result[index] = obj;
    }
  });

  return result;
}

module.exports = assignShortcuts;
