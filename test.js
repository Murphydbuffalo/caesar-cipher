const chai = require('chai');
const encrypt = require('./cipher').encrypt;

// Use BDD style "foo.should.equal('bar')" assertions
chai.should();

describe('The Caesar cipher', () => {
  describe('The encrypt function', () => {
    it('should return an encrypted string when given alphanumeric characters', () => {
      encrypt('foo').should.equal('irr');
      encrypt('abc').should.equal('def');
      encrypt('zzz').should.equal('222');
      encrypt('123').should.equal('456');
    });

    it('should accept an optional "shift" parameter', () => {
      encrypt('foo', 7).should.equal('mvv');
      encrypt('abc', 7).should.equal('hij');
      encrypt('yyy', 7).should.equal('555');
      encrypt('123', 7).should.equal('89a');
    });

    it('should not attempt to encrypt non-alphanumeric characters', () => {
      encrypt('foo!').should.equal('irr!');
      encrypt('ab?c').should.equal('de?f');
      encrypt('-_|').should.equal('-_|');
      encrypt('*&^%').should.equal('*&^%');
      encrypt('     ').should.equal('     ');
      encrypt('\n\n').should.equal('\n\n');
      encrypt('\t').should.equal('\t');
    });

    it('should return a blank string when given a blank string', () => {
      encrypt('').should.equal('');
    });

    it('should return a blank string when given a non-string value', () => {
      encrypt(null).should.equal('');
      encrypt(undefined).should.equal('');
      encrypt(123).should.equal('');
      encrypt(true).should.equal('');
      encrypt(false).should.equal('');
      encrypt(['a', 'b', 'c']).should.equal('');
      encrypt({ a: 1, b: 2, c: 3 }).should.equal('');
    });
  });

  describe('The decrypt function', () => {
    it('should return an decrypted string when given an encrypted string');
    it('should return a blank string when given a blank string');
  });
});
