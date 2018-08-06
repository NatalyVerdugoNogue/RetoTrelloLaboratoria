global.window = global;
global.assert = require('chai').assert;
require('../src/js/model');
var chai = require('chai');
chai.use(require('chai-dom'));

describe('Crear título de lista', () => {
  it('Debe retornar un string', () => {
    document.querySelector('section').should.have.id('getTitleList')
    expect(document.querySelector('section')).to.have.id('foo')
    const titleList = 'abcdef';
    const result = window.model.titleList()
    assert.equal(typeof result, 'string')
  });
})