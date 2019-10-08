const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('expect global radix to be 10', () => {
  expect(global.config.radix).toBe(10);
});

test('expect PI to be 22/7', () => {
  expect(global.config.PI).toBe(22 / 7);
});
