//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const letterMap = new Map();
let   keyWordLength;

export const findAnagrams = (keyWord, candidateWords) => {
  if(letterMap.size > 0) letterMap.clear();
  keyWordLength = keyWord.length;
  
  for(let i=0; i < keyWordLength; i++){
    letterMap.set(keyWord[i].toLowerCase(), (letterMap.get(keyWord[i]) ?? 0) +1);
  }
  
  let anagramWords = [];
  candidateWords.forEach(function(element){
    if( isAnagram(element.toLowerCase()) && 
        element.toLowerCase() != keyWord.toLowerCase() ) anagramWords.push(element);
  });
  return anagramWords;
};


function isAnagram(word) {
  if(keyWordLength != word.length) return false;
  
  let index=0,
      tmpMap = new Map(letterMap);
  while( (tmpMap.get(word[index]) ?? 0) > 0 ){
    let availableOfLetter = tmpMap.get(word[index]);
    tmpMap.set( word[index++], --availableOfLetter);
    };
  return index == (keyWordLength);
}
