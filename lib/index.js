var maps = require('./maps.js');

/**
 * Atonic main method
 */
var atonic = module.exports = function atonic(text, names) {
  names = isArray(names) ? names : maps.NAMES;
  if (names.indexOf(maps.COMMON_NAME) < 0) {
    names.push(maps.COMMON_NAME);
  }
  names.sort();

  var map = getMap(names);

  return text.replace(/[^\u0000-\u007e]/g, function(c) {
    return map[c] || c;
  });
};

/**
 * Additional methods
 */
var methods = {
  lowerCase: [maps.COMMON_NAME, 'latin', 'cyrillic'],
  upperCase: [maps.COMMON_NAME, 'LATIN', 'CYRILLIC'],
  latin: [maps.COMMON_NAME, 'latin', 'LATIN'],
  latinLowerCase: [maps.COMMON_NAME, 'latin'],
  cyrillic: [maps.COMMON_NAME, 'cyrillic', 'CYRILLIC'],
  cyrillicLowerCase: [maps.COMMON_NAME, 'cyrillic']
};

/**
 * Build methods
 */
for (var method in methods) {
  atonic[method] = buildMethod(methods[method]);
}

function buildMethod(names) {
  return function(text) {
    return atonic(text, names);
  };
}

/**
 * Store maps data - don't build a map every time
 */
var storage = {};
/**
 * Build a key-value object
 */
function getMap(names) {
  var key = names.join('-');
  if (storage[key]) {
    return storage[key];
  }

  var result = {};
  var value;
  var i;
  var allmaps = {};

  for (i = 0; i < names.length; i++) {
    var name = names[i];
    if (maps.NAMES[name] < 0) throw new Error('Invalid map name: ' + name);
    extend(allmaps, maps[name]);
  }

  for (var c in allmaps) {
    value = allmaps[c];
    for (i = 0; i < value.length; i++) {
      result[value[i]] = c;
    }
  }

  storage[key] = result;

  return result;
}

function extend(obj, source) {
  for (var key in source) {
    obj[key] = source[key];
  }
  return obj;
}

function isArray(target) {
  return Array.isArray(target);
}
