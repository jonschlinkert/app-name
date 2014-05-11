/*!
 * app-name <https://github.com/jonschlinkert/app-name>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */


module.exports = function(str, words, options) {
  var arr = str.split(/[\W_-]/).filter(Boolean);
  words = !Array.isArray(words) ? [words] : words;
  var w = [];

  options = options || {};

  words.forEach(function(word) {
    w = w.concat(word.split('-'));
  });

  var filtered = arr.filter(function(segment) {
    return w.indexOf(segment) === -1;
  });


  if (options.first) {
    return filtered[0];
  }
  if (options.last) {
    return filtered.reverse()[0];
  }

  return filtered.join(options.sep || '-');
};