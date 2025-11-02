'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDec = sourceString.split(';');

  const nonEmptyDec = styleDec.filter((element) => element.trim() !== '');

  const callback = (stylesObject, declaration) => {
    const index = declaration.indexOf(':');

    if (index === -1) {
      return stylesObject;
    }

    const key = declaration.slice(0, index).trim();
    const value = declaration.slice(index + 1).trim();

    stylesObject[key] = value;

    return stylesObject;
  };

  const result = nonEmptyDec.reduce(callback, {});

  return result;
}

module.exports = convertToObject;
