const maxChar = require('./index');

test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxChar('a')).toEqual('a');
});

test('Finds the most frequently used char', () => {
  expect(maxChar('abcdefgaaaaaaahijklmnaaaaaaaaaaaaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxChar('ab1c1d1e1f1g1123')).toEqual('1');
});
