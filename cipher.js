const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
const isAlphaNumeric = string => (/[a-z0-9]/i).test(string);
const isString = input => typeof input === 'string';

exports.encrypt = function encrypt(input, shift) {
  if(!isString(input)) return '';

  shift = (shift == null ? 3 : shift);

  const mapOfCharacters = alphabet.reduce((map, char, index, array) => {
    const maxIndex = alphabet.length - 1;
    const totalIndex = index + shift;

    /*
      If the total index would attempt to access an element beyond the length of the alphabet then "wrap around" to the beginning of the alphabet.
    */
    const effectiveIndex = (totalIndex > maxIndex ? totalIndex - maxIndex - 1 : totalIndex);

    map[char] = array[effectiveIndex];

    return map;
  }, {});

  const encryptedString = input.split('').reduce((result, character) => {
    const encryptedChar = (isAlphaNumeric(character) ? mapOfCharacters[character] : character);

    return result + encryptedChar;
  }, '');

  return encryptedString;
};
