/**
 * Mistake :  Accidentally Using the Assignment Operator
 */
describe('MistakeOnConcatenation', () => {

  it('should concat 2 values (same type)', () => {
    // JavaScript often convert value in number
    expect(true + true).toBe(2);
    expect(5 + 4).toBe(9);
    expect('ta' + 'ti').toBe('tati');
  });

  it('should concat 2 values (different type)', () => {
    // JavaScript often convert value in number
    expect(true + 4).toBe(5);
    expect(5 + '4').toBe('54');
  });
});