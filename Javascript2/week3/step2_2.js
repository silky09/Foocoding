/* eslint-disable no-use-before-define */

'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  // Replace this comment and the next line with your code
  for (let number = startIndex; number <= stopIndex; number++) {
    numbers.push(number);
    if (number % 3 === 0) {
      threeCallback(number);
    }
    if (number % 5 === 0) {
      fiveCallback(number);
    }
  }
  return null;
  // console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers); //  10 15 [λ: sayThree] [λ: sayFive] [ 10, 11, 12, 13, 14, 15 ]
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(number); // 12, 15
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(number); // 10, 15
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;