/**
 * Mistake :  Accidentally Using the Assignment Operator
 */
describe('MistakeOnArayIndex', () => {

  it('normal case', () => {
    var color = ['blue', 'red'];

    expect(color.length).toBe(2);
    expect(color[1]).toBe('red');
  });

  it('normal case manually', () => {
    var color = [];
    color[0] = 'red';
    color[1] = 'red';

    expect(color.length).toBe(2);
    expect(color[1]).toBe('red');
  });

  it('affectation with index', () => {
    var color = [];
    color[1] = 'red';

    // Lenght is 2 and not 1 => length is different to the size
    expect(color.length).toBe(2);
    expect(color[1]).toBe('red');
  });

  it('affectation with index', () => {
    var color = [];
    color['c0'] = 'blue';
    color['c1'] = 'red';

    expect(color.length).toBe(0);
    expect(color[1]).toBeUndefined();
    expect(color.c1).toBe('red');
  });

});