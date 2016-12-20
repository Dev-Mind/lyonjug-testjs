/**
 * Mistake :  Incorrect references to this
 */
describe('MistakeOnScope : my favorite color', () => {

  let myClass;

  beforeEach(() => {
    myClass = new MistakeOnScope();
  });

  it('should test var scope', () => {
    let {mother , child, count} = myClass.scopeVar();

    // var hoisting
    expect(mother).toBe(1);
    // var is global
    expect(child).toBe(10);
    // scope du parent global
    expect(count).toBe(10);
  });

  it('should test let scope', () => {

    try{
      let {mother , child, count} = myClass.scopeLet();
      fail('should fail');

      // error on mother ==> i is not defined
      // error when the value is returned => child is not defined outside the inner for
      // scope du parent global ==> count=10
    }
    catch (e){
      expect(e.message).toBe('i is not defined');
    }
  });

  it('should test const scope', () => {

    try{
      let {mother , child, count} = myClass.scopeConst();
      fail('should fail');

      // error on mother ==> i is not defined
      // error when the value is returned => child is not defined outside the inner for
      // scope du parent global ==> count=10
    }
    catch (e){
      expect(e.message).toBe('i is not defined');
    }
  });
});