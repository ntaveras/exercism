//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (DNA) => {
  let RNA = '';
  for(let i = 0; i < DNA.length; i++){
    switch(DNA[i]){
      case 'G':
        RNA += 'C'; break;
      case 'C':
        RNA += 'G'; break;
      case 'T':
        RNA += 'A'; break;
      case 'A':
        RNA += 'U'; break;
    }
  }
  return RNA;
};
