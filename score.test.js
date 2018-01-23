let tester = require('./score');


test('My scoring function should return an integer:', () => {
  expect(typeof tester(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6)).toBe('number');
});

test('Check The example given->', () => {
  expect(tester(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6)).toBe(90);
});

test('Check with no spares and strikes->', () => {
  expect(tester(4, 5, 3, 6, 4, 5, 3, 6, 4, 4, 3, 6, 4, 5, 3, 6, 4, 5, 3, 6)).toBe(89);
});

test('Check with 1 spare->', () => {
  expect(tester(3, 6, 4, 5, 5, 5, 3, 6, 4, 5, 3, 6, 4, 5, 3, 6, 4, 5, 3, 6)).toBe(94);
});

test('Check with 1 strike->', () => {
  expect(tester(3, 6, 4, 5, 10, 3, 6, 4, 5, 3, 6, 4, 5, 3, 6, 4, 5, 3, 6)).toBe(100);
});

test('Check with 1 strike and 1 spare->', () => {
  expect(tester(3, 6, 4, 5, 10, 3, 6, 4, 5, 6, 4, 4, 5, 3, 6, 4, 5, 3, 6)).toBe(105);
});
// console.log(tester(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6)===90);
// console.log(tester(4, 5, 3, 6, 4, 5, 3, 6, 4, 4, 3, 6, 4, 5, 3, 6, 4, 5, 3, 6));
