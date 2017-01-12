/**
 * Mistake :  Incorrect references to this
 */
export class MistakeOnThis {

  constructor(){
    this.colors  = ['Red', 'Blue', 'Yellow'];
    this.favorite = 'Blue';
  }

  thisBehaviorInEmbeddedFunctionk(){
    let result = this.colors.filter(function(color){
      return color === this.favorite;
    });
    return result;
  }

  thisBehaviorInArrayFunction(){
    let result = this.colors.filter((color) => color === this.favorite);
    return result;
  }

}
