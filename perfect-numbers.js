//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number = 0) => {
  if(number < 1) throw new Error('Classification is only possible for natural numbers.');
  
  let divisor = 0,
      aliquotSum = 0;
  while( ++divisor <= (number/2) && aliquotSum < number){
    if(number % divisor == 0) aliquotSum += divisor;
  }
  return (aliquotSum == number ? 'perfect' : aliquotSum > number ? 'abundant' : 'deficient');
};
