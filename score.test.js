let tester = require('./score');


test('My scoring function should return an integer:', () => {
  expect(typeof tester(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6)).toBe('number');
});

test('Check The example given->', () => {
  expect(tester(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6)).toBe(90);
});
// test('Check spares>', () => {
//   expect(tester(4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6)).toBe(90);
// });

// test('Check with all strikes->', () => {
//   expect(tester(10, 10, 10, 10, 10, 10, 10, 10, 10, 10)).toBe(105);
// });


describe('For Single permutations of strike spare combination:', function () {
  it('Should work for a 1 spare', () => {
    expect(tester(3, 6, 4, 5, 5, 5, 3, 6, 4, 5, 3, 6, 4, 5, 3, 6, 4, 5, 3, 6)).toBe(94);
  });

  it('Should work for a 1 strike', () => {
    expect(tester(3, 6, 4, 5, 10, 3, 6, 4, 5, 3, 6, 4, 5, 3, 6, 4, 5, 3, 6)).toBe(100);
  });

  it('Should work for a 1 strike and 1 spare', () => {
    expect(tester(3, 6, 4, 5, 10, 3, 6, 4, 5, 6, 4, 4, 5, 3, 6, 4, 5, 3, 6)).toBe(105);
  });
});


describe('For Extreme Conditions:', function () {
  it('Check with no spares and strikes->', () => {
    expect(tester(4, 5, 3, 6, 4, 5, 3, 6, 4, 4, 3, 6, 4, 5, 3, 6, 4, 5, 3, 6)).toBe(89);
  });

  it('Check with all strikes', () => {
    expect(tester(3, 6, 4, 5, 10, 3, 6, 4, 5, 3, 6, 4, 5, 3, 6, 4, 5, 3, 6)).toBe(100);
  });

  it('Check With all spares', () => {
    expect(tester(3, 6, 4, 5, 10, 3, 6, 4, 5, 6, 4, 4, 5, 3, 6, 4, 5, 3, 6)).toBe(105);
  });
});
