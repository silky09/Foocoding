/**
 * 1.1 Say you would like to write a program that doubles the odd numbers in an array and throws away the even numbers.

Your solution could be something like this:

function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]

Rewrite the above doubleOddNumbers function using map and filter; 
don't forget to use =>.
 */

const myNumbers = [1, 2, 3, 4];

const OddNumbers = myNumbers.filter(function (number) {
  return (number % 2 === 1);

});
console.log("The odd numbers are: ", OddNumbers); // returns  [ 1, 3 ]

const doubleOddNumber = OddNumbers.map(function (number) {
  return number * 2 ;

});

console.log("The doubled numbers are: ",  doubleOddNumber); // returns [ 2, 6 ]

// other 2nd method::------------------------------------------------->>

// const OddNumbers = myNumbers.filter(number => number % 2);
// console.log(OddNumbers);

// const doubleOddNumber = OddNumbers.map(number => number * 2);
// console.log(doubleOddNumber);

// other 3rd method -------------------------------------------------------------------

// function doubleOddNumbers(numbers) {
//   const newNumbers = numbers.filter(oddNum => oddNum % 2 !== 0);
  
//    numbers = newNumbers.map(double => double * 2);
//   return numbers;

// }

// const myNumbers = [1, 2, 3, 4];
// console.log(doubleOddNumbers(myNumbers)); // prints [ 2, 6 ]





