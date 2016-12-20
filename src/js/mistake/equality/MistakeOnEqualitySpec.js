/**
 * Mistake :  equality confusion
 * Un opérateur de comparaison compare ses deux opérandes et renvoie une valeur booléenne. Si les deux opérandes ne sont pas du même type,
 * JavaScript tentera de les convertir vers un type approprié. Cette méthode aboutira souvent à une comparaison numérique.
 */
describe('MistakeOnEquality : equality confusion', () => {

  it('should compare 2 elements of the same type', () => {
    expect(3 == 3).toBeTruthy();
  });

  it('should compare 2 elements with different types (operator == and ===)', () => {
    expect(3 == '3').toBeTruthy();
    expect(3 === '3').toBeFalsy();

    expect(0 == false).toBeTruthy();
    expect(0 === false).toBeFalsy();

    expect('' == false).toBeTruthy();
    expect('' === false).toBeFalsy();

    expect(null == undefined).toBeTruthy();
    expect(null === undefined).toBeFalsy();

    // Null ot undefined are different from false
    expect(null == false).toBeFalsy();
    expect(null === false).toBeFalsy();
    expect(undefined == false).toBeFalsy();
    expect(undefined === false).toBeFalsy();
  });

  it('should compare 2 elements with different types (operator != and !==)', () => {
    expect(3 != 3).toBeFalsy();
    expect(3 !== 3).toBeFalsy();

    expect(3 != '3').toBeFalsy();
    expect(3 !== '3').toBeTruthy();

    expect(0 != false).toBeFalsy();
    expect(0 !== false).toBeTruthy();

    expect('' != false).toBeFalsy();
    expect('' !== false).toBeTruthy();

    expect(null != undefined).toBeFalsy();
    expect(null !== undefined).toBeTruthy();
  });
});