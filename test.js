const chai = require('chai');

// Use BDD style "foo.should.equal('bar')" assertions
chai.should();

describe('The Caesar cipher', () => {
  describe('The encrypt function', () => {
    it('should return an encrypted string when given alphanumeric characters');
    it('should return a blank string when given a blank string');
    it('should not attempt to encrypt non-alphanumeric characters');
  });

  describe('The decrypt function', () => {
    it('should return an decrypted string when given an encrypted string');
    it('should return a blank string when given a blank string');
  });
});
