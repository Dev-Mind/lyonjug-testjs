import { MistakeOnThis } from './MistakeOnThis';

/**
 * Mistake :  Incorrect references to this
 */
describe('MistakeOnThis : my favorite color', () => {

  let myClass;

  beforeEach(() => {
    myClass = new MistakeOnThis();
  });


  it('should test behavior with this in an embedded function', () => {
    try{
      myClass.thisBehaviorInEmbeddedFunctionk();
      fail('should fail');
    }
    catch (e) {
      //This is undefined inside the embedded function
      expect(e.message).toBe('Cannot read property \'favorite\' of undefined');
    }
  });

  it('should test behavior with this in an embedded function', () => {
    //In an array function this is the same that the global method
    expect(myClass.thisBehaviorInArrayFunction()).toEqual(['Blue']);
  });

});