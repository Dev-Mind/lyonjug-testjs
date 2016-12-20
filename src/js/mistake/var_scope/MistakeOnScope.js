/**
 * Mistake :  scope of the different variables
 */
class MistakeOnScope {

  /**
   * Variable declared via var
   */
  scopeVar() {
    i = 1
    var mother = i;
    var count = 0;

    for (var i = 0; i < 10; i++) {
      count++;
      var child = 10;
    }

    return {mother, child, count};
  }

  /**
   * Variable declared via let
   */
  scopeLet() {
    let mother = i;
    let count = 0;

    for (let i = 0; i < 10; i++) {
      count++;
      let child = 10;
    }

    return {mother, child, count};
  }

  /**
   * Variable declared via const
   */
  scopeConst() {
    const mother = i;
    let count = 0;

    for (let i = 0; i < 10; i++) {
      count++;
      const child = 10;
    }

    return {mother, child, count};
  }

}