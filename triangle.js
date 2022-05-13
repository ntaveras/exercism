//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a,b,c) {
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
  }

  get isEquilateral() {
    return ( (this.sideA+this.sideB)/2 == this.sideC && this.sideA != 0);
  }

  get isIsosceles() {
    if(this.sideA == 0 || this.sideB == 0 || this.sideC == 0 || !this.isTriangleEquality()) return false;
    return (this.sideA == this.sideB || this.sideA == this.sideC || this.sideC == this.sideB);
  }


  get isScalene() {
    return (!this.isIsosceles && this.isTriangleEquality());
  }

  isTriangleEquality(){
    return ( (this.sideA + this.sideB >= this.sideC) && (this.sideC + this.sideB >= this.sideA) && (this.sideA + this.sideC >= this.sideB));
  }
}
