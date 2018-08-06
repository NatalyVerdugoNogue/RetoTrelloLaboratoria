global.window = global;
global.assert = require('chai').assert;
require('../src/js/model');

describe('Crear título de lista', () => {
  it('Debe retornar un string', () => {
    const titleList = 'abcdef';
    const result = window.model.titleList()
    assert.equal(typeof result, 'string')
  });
})