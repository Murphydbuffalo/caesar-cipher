const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

function isAlphaNumeric(string){
  return (/[a-z0-9]/i).test(string);
}

function isString(input) {
 return typeof input === 'string';
}

function isUpperCase(string) {
  return string.toLowerCase() !== string;
}

function shiftAlphabet(shift) {
  return alphabet.reduce((map, char, index, array) => {
    const maxIndex = alphabet.length - 1;
    const totalIndex = index + shift;

    /*
      If the total index would attempt to access an element beyond the length of the alphabet then "wrap around" to the beginning of the alphabet.
    */
    const effectiveIndex = (totalIndex > maxIndex ? totalIndex - maxIndex - 1 : totalIndex);

    map[char] = array[effectiveIndex];

    return map;
  }, {});
}

exports.encrypt = function encrypt(input, shift) {
  if(!isString(input)) return '';

  shift = (shift == null ? 3 : shift);

  const shiftedCharacters = shiftAlphabet(shift);

  const encryptedString = input.split('').reduce((result, character) => {
    const key = character.toLowerCase();
    const encryptedCharacter = isAlphaNumeric(character) ? shiftedCharacters[key] : character;

    const upperCaseChar = encryptedCharacter.toUpperCase();
    const formattedCharacter = isUpperCase(character) ? upperCaseChar : encryptedCharacter;

    return result + formattedCharacter;
  }, '');

  return encryptedString;
};
