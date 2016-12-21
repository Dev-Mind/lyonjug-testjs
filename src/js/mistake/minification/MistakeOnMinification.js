/**
 * Mistake :  Accidentally break miification
 */
describe('MistakeOnMinification', () => {

  function myFunction1(a) {
    var power = 10;
    return a * power;
  }
  // is equivalet to
  function myFunction2(a) {
    var power = 10
    return a * power
  }

  it('should multiply by 10', () => {
    expect(myFunction1(3)).toBe(30);
    expect(myFunction2(3)).toBe(30);
  });

  // But when the code will be minified you will have
  // function myFunction2(a){var power=10 return a*power} and an error

});