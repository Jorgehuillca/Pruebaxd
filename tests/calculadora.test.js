const { sumar, restar } = require('../src/calculadora');

test('suma 2 + 3 debe ser 5', () => {
  expect(sumar(2, 4)).toBe(5);
});

test('resta 5 - 2 debe ser 3', () => {
  expect(restar(5, 2)).toBe(3);
});
