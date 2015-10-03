const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

exports.encrypt = function encrypt(input, shift) {
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

  const encryptedString = String(input).split('').reduce((result, character) => {
    return result + mapOfCharacters[character];
  }, '');

  return encryptedString;
};
