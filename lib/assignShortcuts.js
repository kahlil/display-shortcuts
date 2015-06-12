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

module.exports = assignShortcuts;
