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
      encrypt(123).should.equal('456');
    });

    it('should not attempt to encrypt non-alphanumeric characters');
    it('should return a blank string when given a blank string');
    it('should return a blank string when given a non-string or numeric value');
  });

  describe('The decrypt function', () => {
    it('should return an decrypted string when given an encrypted string');
    it('should return a blank string when given a blank string');
  });
});
