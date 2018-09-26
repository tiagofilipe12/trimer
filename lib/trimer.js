'use strict'

/***
 * Function to trim from the beginning and the end of a string a given character
 * @param {String} str - string from which you want to trim both ends
 * @param {Array|String} toTrim - An array with all the characters that should
 * be removed from the string, or a string with the desired trim character
 * @returns {String} - trimmed string
 */
const trimer = (str, toTrim) => {

  // joins all the characters to trim at the ends with | in order to use in
  // trimRegex
  const trimChars = (toTrim instanceof Array) ? toTrim.join('|') :
    (toTrim instanceof String || typeof toTrim === 'string') ? toTrim :
      console.error('Invalid argument type, 2nd argument should be an ' +
        'array of characters to trim or a string with a character to trim')

  // trim every character or sequence of characters of the patter provided in
  // the variable toTrim
  const trimRegex = new RegExp(
    '^[' + trimChars + ']+|[' + trimChars + ']+$', 'g'
  )

  // replaces the regex by nothing and returns
  return str.replace(trimRegex, '')
}

module.exports = trimer