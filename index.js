'strict';

var chalk = require('chalk');
var splitText = require('split-text');

module.exports = function (definitions, noColor) {
  var limit = 60;
  var output = [];

  output.push('');

  definitions.forEach(function (obj) {
    var description;
    var descriptionSegments = [];

    for (name in obj) {
      description = obj[name];
      descriptionSegments = splitText(description, limit);
      name = noColor ? name : chalk.blue.bold(name);

      output.push(name + '\t' + descriptionSegments[0]);

      if (descriptionSegments.length > 1) {
        descriptionSegments.forEach(function (segment, i) {
          if (i !== 0) {
            output.push('\t' + segment);
          }
        });
      }

      output.push('');
    }
  });

  return output;
};
