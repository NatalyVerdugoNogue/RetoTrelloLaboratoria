global.window = global;
global.assert = require('chai').assert;
require('../src/js/model');

describe('Crear título de lista', () => {
  it('Debe retornar un string', () => {
    const titleList = 'abcdef';
    const result = window.model.titleList(titleList);
    assert.equal(typeof result, 'string');
  });
});

describe('Crear título en otra lista', () => {
  it('Debe retornar un string', () => {
    const titleList = 'abcdef';
    const result = window.model.titleOtherList(titleList);
    assert.equal(typeof result, 'string');
  });
});