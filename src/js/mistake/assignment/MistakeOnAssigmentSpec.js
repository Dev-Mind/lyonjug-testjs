/**
 * Mistake :  Accidentally Using the Assignment Operator
 */
describe('MistakeOnAssignment', () => {

  function caseOK(x) {
    if (x == 10) {
      return 'win';
    }
    return 'loose';
  }

  function caseKO(x) {
    // x=10 return always true
    if (x = 10) {
      return 'win';
    }
    return 'loose';
  }

  it('should test our caseOK', () => {
    expect(caseOK(3)).toBe('loose');
    expect(caseOK(10)).toBe('win');
  });

  it('should test our caseKO', () => {
    expect(caseKO(3)).toBe('win');
    expect(caseKO(10)).toBe('win');
  });

});