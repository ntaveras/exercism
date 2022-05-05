//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const MAXLENGTH = 11,
      VALIDLENGTH = 10,
      VALID_COUNTRY_CODE = '1',
      EXCHANGE_CODE_INDEX = 3,
      COUNTRY_CODE_INDEX = 0,
      AREA_CODE_INDEX = 0,
      ERROR = new Error();

export const clean = (numberString) => {
  if(numberString.match(/[A-z]/g)) throw new Error('Letters not permitted');
  let cleanNumber = numberString.replace(/[\s.\-()+]/g, '');
  if(cleanNumber.match(/\D/g))throw new Error('Punctuations not permitted');
  
  switch(cleanNumber.length){
    case 11:
      if( !isValid_11_Digits(cleanNumber) ) throw ERROR;
      cleanNumber = cleanNumber.slice(1);
    case 10: 
      if( !isValid_10_Digits(cleanNumber) ) throw ERROR; break;
    default: 
      (cleanNumber.length < 10 ? ERROR.message = 'Incorrect number of digits' : 
                                 ERROR.message = 'More than 11 digits');
      throw ERROR;
  }
  return cleanNumber;

};

function isValid_11_Digits(numberString){
  let isValid = true,
      slicedNumber = numberString.slice(1);
  if(numberString.length == MAXLENGTH && 
     numberString[COUNTRY_CODE_INDEX] != VALID_COUNTRY_CODE){
      ERROR.message = '11 digits must start with 1';
      isValid = false;
  }
  switch(numberString[EXCHANGE_CODE_INDEX]){
    case '1':
      ERROR.message = 'Exchange code cannot start with one';
      isValid = false;
    case '0':
      ERROR.message = 'Exchange code cannot start with zero';
      isValid = false;
  }

  return isValid;
}

function isValid_10_Digits(numberString) {
  console.log('inside: '+numberString);
  let isValid = true;

  switch(numberString[AREA_CODE_INDEX]){
    case '1':
      console.log('10 digit (Exchange) : '+numberString[AREA_CODE_INDEX]);
      ERROR.message = 'Area code cannot start with one';
      console.log('inside 10 digits function 1');
      isValid = false; break;
    case '0':
      console.log('10 digit (Exchange) : '+numberString[AREA_CODE_INDEX]);
      ERROR.message = 'Area code cannot start with zero';
      console.log('inside 10 digits function 0');
      isValid = false;
  }

  switch(numberString[EXCHANGE_CODE_INDEX]){
    case '1':
      console.log('10 digit (Exchange) : '+numberString[EXCHANGE_CODE_INDEX-1]);
      ERROR.message = 'Exchange code cannot start with one';
      isValid = false; break;
    case '0':
      console.log('10 digit (Exchange) : '+numberString[EXCHANGE_CODE_INDEX-1]);
      ERROR.message = 'Exchange code cannot start with zero';
      isValid = false;
  }
  return isValid;
  
}
