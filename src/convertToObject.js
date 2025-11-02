'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString.split(';');

  const arrayNoEmpties = array.filter((element) => element.trim() !== '');

  const callback = (object, string) => {
    const index = string.indexOf(':');
    const key = string.slice(0, index).trim();
    const value = string.slice(index + 1).trim();

    object[key] = value;

    return object;
  };

  const result = arrayNoEmpties.reduce(callback, {});

  return result;
}

module.exports = convertToObject;
