//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  let CLEAN_PHRASE = titleCase(phrase.trim().replace(/[^A-Za-z']+/g, ' ')),
      result = CLEAN_PHRASE[0];
  for(let i = 0; i < phrase.length; i++){
    if(CLEAN_PHRASE[i] != " " && (CLEAN_PHRASE[i - 1] == " " || CLEAN_PHRASE[i - 1] == "-")) result += CLEAN_PHRASE[i];
  }
  return result.toUpperCase();
};

function titleCase(str) {
  console.log(str);
  return str.toLowerCase().split(' ').map(function(word) {
    return word.trim().replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
