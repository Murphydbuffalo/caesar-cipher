const chai = require('chai');
const cipher = require('./cipher');

// Use BDD style "foo.should.equal('bar')" assertions
chai.should();

describe('The Caesar cipher', () => {
  describe('The cipher function', () => {
    it('should return an encrypted string when given alphanumeric characters', () => {
      cipher('foo').should.equal('irr');
      cipher('abc').should.equal('def');
      cipher('zzz').should.equal('CCC');
      cipher('123').should.equal('456');
    });

    it('should accept an optional "shift" parameter', () => {
      cipher('foo', 7).should.equal('mvv');
      cipher('abc', 7).should.equal('hij');
      cipher('yyy', 7).should.equal('FFF');
      cipher('123', 7).should.equal('89a');
    });

    it('should handle upper case letters', () => {
      cipher('Foo').should.equal('Irr');
    });

    it('should not attempt to encrypt non-alphanumeric characters', () => {
      cipher('foo!').should.equal('irr!');
      cipher('ab?c').should.equal('de?f');
      cipher('-_|').should.equal('-_|');
      cipher('*&^%').should.equal('*&^%');
      cipher('     ').should.equal('     ');
      cipher('\n\n').should.equal('\n\n');
      cipher('\t').should.equal('\t');
    });

    it('should return a blank string when given a blank string', () => {
      cipher('').should.equal('');
    });

    it('should return a blank string when given a non-string value', () => {
      cipher(null).should.equal('');
      cipher(undefined).should.equal('');
      cipher(123).should.equal('');
      cipher(true).should.equal('');
      cipher(false).should.equal('');
      cipher(['a', 'b', 'c']).should.equal('');
      cipher({ a: 1, b: 2, c: 3 }).should.equal('');
    });
  });
});
