var app = require('../');
var request = require('supertest').agent(app.listen());

describe('Website', function() {
  it('has a welcome message', function(done) {
    request
          .get('/')
          .expect('Koa says Hi!')
          .end(done);
  });
});