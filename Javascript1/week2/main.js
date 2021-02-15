// 1. Write a console.log statement saying "Hello World!" for each language.

console.log("Hello, World!"); // English
console.log("Nameste, Duniya!"); // Hindi
console.log("Hej, Varlden!"); // Swedish

//2.  Declare a variable x is a number;

let x;
x = 100;
console.log("the value of x is: a Number type 100");
console.log(x);
x = 101;
console.log("the value of x changed to: 101");
console.log(x);

//3.  Declare a variable y is a string;

let y;
y = "Hello World!";
console.log("the value of y is: a String type");
console.log(y);
y = "Jello World!";
console.log("the value of y changed to Jello World!");
console.log(y);

//4.  How do you round the number 7.25, to the nearest integer (i.e., whole number)?

let z = 7.25;  // Declare a variable z
console.log(z);


let a = Math.round(z);  // Declare another variable a that has the value of z but rounded to the nearest integer.

// for rounding the number use :  Math.round() or Math.ceil();

console.log(a);
//  compare the two values and store the highest of the two in a new variable.

console.log(Math.max(a,z));

//5. Arrays

 //Declare an empty array. 
let myArrays = []; //an array is capable of containing more than one element.
console.log("The value of array is null");
console.log(myArrays);

// Create an array that has your favorite animals inside.
let myFavoriteAnimals = ["Dog","Cat"];
console.log(myFavoriteAnimals); //logging array

myFavoriteAnimals.push('baby pig'); // use .push() function for adding Daan's favorite animal ('baby pig') to the existing array.
console.log(myFavoriteAnimals);


//6. More strings and Find a way to get the length of myString.

let myString = "This is a simple string!";
console.log(myString);
console.log(myString.length);  // use .length function for getting the length of the string.

//7. Write a program that checks the types of variables.
 
let num = 20;
let str = "Hello!";
let noVal = null;
let isLightOff = true;
console.log(num);
console.log(str);
console.log(noVal);
console.log(isLightOff);

console.log("type of my variable num will be: number");
console.log("type of my variable str will be: string");
console.log("type of my variable noVal will be: object");
console.log("type of my variable isLightOff will be: boolean");

// use "typeof" to log the actual type of your variables.
console.log(typeof num); //number
console.log(typeof str); // string
console.log(typeof noVal); //object
console.log(typeof isLightOff); //boolean

// "compare" the types of your different variables with one another.
console.log(num === str); //false
console.log(num === noVal); //false
console.log(isLightOff == str); //false
console.log(num === isLightOff); //false

//8. understand what % modulus does:

let s = 7; // prints 1
s = s % 3;
console.log(s);

console.log( 5 % 2); // output is 1
console.log (10 % 3); //output is 1
console.log( 4 % 2); //output is 0

//9. Can you store multiple types in an array? Numbers and strings? Answer is "yes".

// in array, contents can be written with commas (,)

let myList = ["Apple", 10, "Banana", 5, "Milk", 3, "Curd", 4];
console.log(myList);
// arrays uses Zero-based indexing :
console.log(myList[0]); // prints Apple
console.log(myList[5]); // prints 3
console.log(myList[4]); // prints Milk

if (6/0 === 10/0) {
    console.log("Infinite");
}
else {
    console.log("Try again");
}

if (6/1 === 10/0) {
    console.log("Infinite");
}
else {
    console.log("Try again");
}
  



console.log("I'm awesome");

console.log("I'm awesome with \"double quotes\"");
// putting backslace (\) in front of quotes like this \"double quotes\".

