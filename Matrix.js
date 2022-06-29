//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Matrix {
  constructor(input) {
    this.tmp = null;
    this.rows = input;
  }
  get rows() {
   return this.tmp;
  }
  
  set rows(input){
    let result =  input.split('\n').map( function (word){
      return word.split(' ').map( innerNumber => Number(innerNumber) );
      });
    this.tmp = result;
  }
  
  get columns() {
    let tmp = [],
        rows = this.rows;
    for(let i = 0; i < rows.length; i++){
      for(let k = 0; k < rows[i].length; k++){
        if(i == 0){
          tmp.push([rows[i][k]]);
        } else{
          tmp[k].push( rows[i][k] ) ;
        }
      }
    }
    return tmp;
  }
}
