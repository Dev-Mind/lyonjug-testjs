export default class MistakeOnScope {

  exemple1() {
    var test = i;
    var count = 0;

    for (var i = 0; i < 10; i ++) {
      count++;
      var j = 10;
    }

    return {test, j};
  }

  exemple2() {
    let test = i;
    let count = 0;

    for (let i = 0; i < 10; i ++) {
      count++;
    }

    return {test, j};
  }

}