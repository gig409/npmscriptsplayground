var should = require('should');
var fill = require('../lib/tsTest.js');

describe('Typescript is compiled ok', function() {
  it('when this passed', function() {
    fill.fill('mug','coffee').should.equal('Filling the mug with coffee');

  });
});