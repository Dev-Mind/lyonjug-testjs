/**
 * Mistake :  Accidentally Using the Assignment Operator
 */
describe('MistakeOnFloat', () => {

  it('should show problem with an inifinite result', () => {
    // What the result is not infinite ?
    expect(5 / 3).toBe(1.6666666666666667);
  });

  it('should show problem with float', () => {
    var x = 0.1;
    var y = 0.2;

    expect(x + y).not.toBe(0.3);
    expect((x + y).toFixed(1)).toBe('0.3');
    expect(x + y).toBe(0.30000000000000004);

    //OMG
    expect((x * 10 + y * 10) / 10).toBe(0.3);
  });

});