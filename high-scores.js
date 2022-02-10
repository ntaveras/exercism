//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(score) {
    this.scoreBoard = [...score];
    this.sortedScore = [...score].sort(function(a, b) {return a - b;});
  }

  get scores() {
    return this.scoreBoard;
  }

  get latest() {
    return this.scoreBoard[this.scoreBoard.length - 1];
  }

  get personalBest() {
    return this.sortedScore[this.sortedScore.length - 1];
  }

  get personalTopThree() {
    let tmp = [];
    while(tmp.length < this.sortedScore.length && tmp.length < 3){
      tmp.push(this.sortedScore[(this.sortedScore.length - 1) - tmp.length]);
    }
    return tmp;
  }
}
