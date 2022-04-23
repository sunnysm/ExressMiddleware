const request = require('supertest');
const app = require('../src/www/app');
const expect = require('chai').expect;

describe('Test app endpoint', () => {
  it('GET /posts endpoint successfully returns response', () => {
    return request(app)
      .get('/')
      .then((response) => {
        console.log('RESPONSE', response);
        expect(response.statusCode).to.equal(200);
        expect(response.text).to.equal(
          'Api server is healthy and working fine'
        );
      });
  });
});
