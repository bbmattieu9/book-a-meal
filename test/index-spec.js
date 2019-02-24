const expect = require('chai').expect

const server = require('../api/index');

describe('test meal app', () => {
  it('should return a string', () => {
    expect('The API is working').to.equal('The API is working');
  });
});
