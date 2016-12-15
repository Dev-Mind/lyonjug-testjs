/**
 * Mistake :  Incorrect references to this
 */
export class MistakeOnThis {

  constructor(){
    this.colors  = ['Red', 'Blue', 'Yellow'];
    this.favorite = 'Blue';
  }

  exemple1(){
    let result = this.colors.filter(function(color){
      return color === this.favorite;
    });
    return result;
  }

  exemple2(){
    let result = this.colors.filter((color) => color === this.favorite);
    return result;
  }

}
