/* String and Array challenges*/
//write at least two console.log statements to verify if your code works correctly.//

// 1. Strings!
//Consider the following string:

let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString); // prints hello,this,is,a,difficult,to,read,sentence
// Log the length of myString.
console.log(myString.length); // 42

//The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.

console.log(myString.replace(/,/g, " ")); // hello this is a difficult to read sentence

// Removing all the commas, use .replace(/,/g, " ")
 //g for global

// 2.  Arrays!
     // Consider the following array:

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

//Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);// prints (4) ["blowfish", "capricorn", "giraffe", "turtle"]
 
// Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1, 0,  'meerkat' ); // At position 1, :: remove 0 item and add 1 item.

// .splice(para1, para2, para3--> optional)

console.log(favoriteAnimals);// prints (5) ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]

// Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).
console.log('The array has a length of: ' + favoriteAnimals.length); // prints  The array has a length of: 5

// Jason does not like 'giraffe', delete this animal from the array.

favoriteAnimals.splice(3, 1);  // At position 3, remove 1 item.
//splice(position, how many items);

console.log(favoriteAnimals); // prints (4) ["blowfish", "meerkat", "capricorn", "turtle"] 

// Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?

x = favoriteAnimals.indexOf('meerkat'); // indexOf() finds the position of the value
console.log('The item you are looking for is at index: ' + x);  // The item you are looking for is at index: 1

// 3. More JavaScript 🎉

// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.
 

function myFun(a, b, c){
     sum = a + b + c;
     return sum; // or console.log(sum);
}
myFun(5, 5, 5); // prints 15 // or console.log(myFun(5, 5, 5));

// 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
 
function colorCar(color) {
     console.log('a' , color , 'car'); // return ´a ${color} car´ 
}
colorCar('red'); // prints a red car // console.log(colorCar('red'));

 

// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
 // objects are similar to arrays.

let myObjectCat = {
     Name : "whisker",
     Legs : 4,
     Tails : "one",
     Enemies: ["water", "Dogs"]  // arrays
   }; 
   console.log(myObjectCat); //prints {Name: "whisker", Legs: 4, Tails: "one", Enemies: Array(2)}

   console.log(Object.getOwnPropertyNames(myObjectCat));
    // prints (4) ["Name", "Legs", "Tails", "Enemies"]

    // Object.getOwnPropertyNames(obj) returns all own properties of the object.
   console.log(Object.values(myObjectCat)); // prints (4) ["whisker", 4, "one", Array(2)]

   // Object.values(obj) returns all own values of the object.
   

// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2).

function vehicleType(color, code) {
     if (code === 1) {
         console.log('a',color,'car');  // (´a ${color} car´)
     } else if (code === 2) {
          console.log('a', color, "motorbike"); 
     } else {
          console.log("any code");
     }
}
vehicleType("blue", 2); // prints a blue motorbike
 // or  (use TERNARY operator ? : )

// code === 1 ? console.log('a',color,'car') :  console.log('a', color, "motorbike")

// 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
/*
if (3 === 3) {
     console.log("yes");
   } else {
     console.log("no");
   } */

console.log(3 === 3); // true
console.log(3 === 4); // false
console.log(3 === 3? "yes" : "no"); // yes
console.log(3 === 4? "yes" : "no"); // no

//or
// let yesOrNo = 3 === 3? console.log("yes") : console.log("yes");
//console.log(yesOrNo);

// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

  function vehicle(color,code,age) {
       if (age>0) {
            if (code == 1) {
               console.log ("a", color, "used car");  
            } else {
               console.log ("a", color,"used motorbike"); 
            }
       }
  } 
  vehicle("blue", 1, 5); //prints a blue used car
  vehicle("red", 2, 3); //  prints a red used motorbike


  // 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
  // 8. How do you get the third element from that list?

  let vehicles = ["motorbike", "caravan", "bike", "car"];
 console.log(vehicles[2]); // prints bike

 // 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike". 

 function myVehicles(color, code, age) {
      if (age>0) {
           if (code===3) {
                console.log("a", color, "new bike");
           } else {
               console.log("a", color, "old bike"); 
           }
      }
 }
 myVehicles("green",3,1); // a green new bike
 myVehicles("green",2,1); // a green old bike
 myVehicles("red",5,1);  // a red old bike

 // 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

/* for loop::: 

for (statement 1; statement 2; statement 3) {
  code block to be executed
}

>>>> Statement 1 is executed (one time). it "sets a variable" before the loop starts (var i = 0).

>>>> Statement 2 defines the "condition" for the loop to run.

>>>> Statement 3 is executed (every time) after the code block has been executed. ( increase or decrease a value (i++))*/





// 12.13.14. Create an empty object.

const emptyObject = {};
console.log(emptyObject); // print {}

/*Create an object that contains the teachers that you have had so far for the different modules.

Add a property to the object you just created that contains the languages that they have taught you.*/



//>>>> Objects are similar to arrays, except that "instead of using indexes" to access and modify their data, you access the data in objects through what are called "properties."

let myTeachers = {
        "Saif" : "Javascript", 
        "Josef" : ["HTML", "CSS", "GIT"],
        "Baraa" : "Web-development"
};
console.log(myTeachers.Baraa); // prints Web-development
console.log(myTeachers.Saif); // prints Javascript
console.log(myTeachers.Josef); //Prints (3) ["HTML", "CSS", "GIT"]

/* 15. Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
What do you think will happen with x == y, x === y and z == y and z == x? Prove it!*/

var x = [1, 2, 3]; // using var for easy way in the console but it will work with let
var y = [1, 2, 3];
var z = y;
console.log(x == y, x === y, z == y,  z == x); // prints false false true false

// //Even though x and y have same values they are not equal because they refer to the different "reference" in the memory.
console.log(x === y); //false 
console.log(x == y); //false 



console.log(z === y); // true because they have the "same reference"
console.log(z == x);  // false because they do not have the "same reference"


// reference type: 
//1. arrays
//2.function
//3. objects

// value types:
// number, string, boolean, null

/* 16. Take a look at the following code: (object)

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

Does the order that you assign (o3 = o2 or o2 = o3) matter? */

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2; 

console.log(o3); // prints { foo: "bar"}
o2.foo = "cafe"; // changing o2 with cafe
console.log(o2); // prints {foo: "cafe"}
console.log(o3);// prints {foo: "cafe"} 
// yes the order that  assigned (o3 = o2 or o2 = o3) matters.

o1.foo = "coding";
console.log(o1); // prints {foo: "coding"} 
console.log(o3); // prints {foo: "cafe"}  it wont change o3 because initially it is declared as o3 = o2.

// What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;
baar = '6'
typeof typeof baar;
console.log(typeof typeof bar); // prints string
console.log(typeof bar); // prints number
console.log(typeof baar); // prints string
console.log(typeof typeof baar); //prints string



















