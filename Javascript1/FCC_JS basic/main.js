/* Comparison Operators::

Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
strict equality: === (( dont support different types: number and string)) The === operator is used to compare values.

Is not equal to: !==
equality operator: == (JavaScript performs type conversion from string to number)

>>>> example-1

let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

/* Logical Operators:

and operator (&&)
or operator (||)
not operator (!), otherwise known as the bang operator 
>>>>>
"When we use the && operator, we are checking that two things are true:"----> When using the && operator, both conditions must evaluate to true.
 Otherwise,  if either condition is false, the && condition will evaluate to false and the else block will execute.
example:::

let stopLight = 'green';
let pedestrians = 0;

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');   // prints Go!
}

example:::

let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

>>>>
"If we only care about either condition being true, we can use the || operator:"----->When using the || operator, only one of the conditions must evaluate to true.

example: 

let day = 'Sunday';  // must be one condition true

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}

-----------------------------------------------
---------------------------------------------

Truthy and Falsy value::::>>>

>> Truthy value means variable includes a true value like srting or number. (if statement will run.)

example::
let wordCount = 1;  // Truthy value and if statement will run.

if (wordCount) {
  console.log("Great! You've started your work!");  // prints Great! You've started your work!
} else {
  console.log('Better get to work!');
}

>> Falsy value includes 0, empty strings like "" or '', null, undefined,
NaN, or Not a Number. (else statement will run.)

example: 

let numberOfApples = 0;    // falsy value so else statement will run.
   if (numberOfApples){
   console.log('Let us eat apples!');
     } else {
         console.log('No apples left!');
        }
 
             // Prints 'No apples left!'

example:

let favoritePhrase = ''; // falsy value so else statement will run.

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.'); // prints This string is definitely empty
}






// 1. Use Conditional Logic with If Statements:

//If statements are used to make decisions in code.

/* syntax:

 if(condition is true) {
     statement is executed
 } 
 
 */

 /* Inside the parentheses (), a condition is provided that evaluates to true or false.
If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
If the condition evaluates to false, the block won’t execute.*/

//  let sale = true;
//  if (sale) {
//      console.log("Time to buy!");
//  }

// function trueOrFalse(wasThatTrue) {
//     // Only change code below this line
//   if (wasThatTrue) {
//     return "Yes, that was true";
//   }
//    return "No, that was false";
  
  
//     // Only change code above this line
  
//   }
//   trueOrFalse(true);

// function test (myCondition) {
//     if (myCondition) {
//        return "It was true";
//     }
//     return "It was false";
//   }
//   test(true);  // returns "It was true"
//   test(false);

//2. Comparison with the Equality Operator:--

//these operators return a boolean true or false value.

// assignment (=)
// equality operator ==. 
// Strict equality operator ===.

// example:

//function testEqual(val) {
//     if (val == 12) {
//         return "Equal";
//     }
//     return "Not Equal";
// }
// testEqual(10);

// function myFun(x) {
//     if (x == 15) {
//        return "equal";
//     } else{
//         return "not equal!";
//     }
   
// }
// myFun(25); // returns not equal!
// myFun("15"); // returns equal!

//3. Comparison with the Strict Equality Operator

// 5 ===  5   // true
// 5 === '5'  // false  (different types: number and string)

// 3 == '3'  // returns true because JavaScript performs type conversion from string to number
// 3 === '3' // returns false because diffetent types conversion is not performed

//Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

// function myFun(condition) {
//     if (condition === 7) {
//         return "Equal";
//     }
//     return "Not Equal";
// }
// myFun(7); // returns Equal
// myFun("7"); // returns Not Equal

// 4. Comparison with the Inequality Operator:
// (!=)

//The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false.
//Like the equality operator, the inequality operator will "convert data types of values while comparing".

//Examples::

// 1 !=  2     // true
// 1 != "1"    // false
// 1 != '1'    // false
// 1 != true   // false
// 0 != false  // false

// Ques: Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99.

// function myFun(val) {
//     if(val != 99) {
//         return "Not Equal";
//     }
//     return "Equal";
// }
// myFun(79);

/*====================================================================

/* 5. Comparison with the "Strict Inequality" Operator:
(!==)

Examples: 

3 !==  3   // false
3 !== '3'  // true ((different types: number and string))
4 !==  3   // true

Question: Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17.

function myFun(val) {
    if(val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
myFun("17"); // returns "Not Equal" haveing diff types
myFun(17); // Equal 
 
--------------------------------------------------------------------------------------------------------------------------------------------

/*6. Comparison with the Greater Than Operator
 
The greater than operator (>) compares the values of two numbers.
If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Examples:

Like the equality operator, greater than operator will convert data types of values while comparing.
5   >  3   // true
7   > '3'  // true
2   >  3   // false
'1' >  9   // false

Question:: Add the greater than operator to the indicated lines so that the return statements make sense.

function myFun(val) {
    if(val > 10) {
        return "Over 10";
    }
    if (val > 100) {
        return "Over 100";
    }
    return "10 or under";
}
myFun(10); // returns "10 or under" 
------------------------------------------------------------------------
---------------------------------------------------------------------

*/
/* 7.   Comparison with the "Greater Than Or Equal to" Operator (>=)
           
If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, greater than or equal to operator will convert data types while comparing.

Examples

6   >=  6   // true
7   >= '3'  // true
2   >=  3   // false
'7' >=  9   // false 

Question::

Add the "greater than or equal to" operator to the indicated lines so that the return statements make sense.

function myFun(val) {
    if(val >= 10) {
        return "Over 10";
    }
    if (val >=100) {
        return "Over 100";
    }
    return "10 or under";
}
myFun(10); // returns "Over 10" 
--------------------------------------------------------------------
-----------------------------------------------------------------------

/* 8. Comparison with the Less Than Operator (<)
 
If the number to the left is less than the number to the right, it returns true. 
Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.

Examples

2   < 5  // true
'3' < 7  // true
5   < 5  // false
3   < 2  // false
'8' < 4  // false

Question::: Add the less than operator to the indicated lines so that the return statements make sense.

function myFun(val) {
    if(val < 10) {
        return "Less 10";
    }
    if (val < 100) {
        return "Less 100";
    }
    return "10 or Less";
}
myFun(5); // prints "Less 10" 
----------------------------------------------------------------------*/

/* 9. Comparison with the Less Than Or Equal To Operator (<=)

Examples::

4   <= 5  // true
'7' <= 7  // true
5   <= 5  // true
3   <= 2  // false
'8' <= 4  // false

Question::: Add the less than or equal to operator to the indicated lines so that the return statements make sense.

function myFun(val) {
    if(val <= 10) {
        return "Less than or equal to 10";
    }
    if (val <= 100) {
        return "Less 100";
    }
    return "10 or Less";
}
myFun(5); // returns "Less than or equal to 10"
-------------------------------------------------------------------
-------------------------------------------------------------------
*/
/* 10. Comparisons with the Logical "And" Operator.

The logical "and" operator (&&) returns true if and only if the operands to the left and right of it are true.(When using the && operator, both conditions must evaluate to true)

Question::
Replace the two if statements with one statement, using the && operator, which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".

function myFun(val) {
      if (val >= 25 && val <= 50) {
          return "yes!";
      } 
      return "No!";
    }
    myFun(35); //returns "yes!" 
-------------------------------------------------------------------------
-----------------------------------------------------------------------*/

/* 11. Comparisons with the Logical "Or" Operator (||).

The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

function myFun(val) {
      if (val > 20 || val < 10) {
          return "yes!";
      } 
      return "No!";
    }
    myFun(15);    // return "No!" 
-------------------------------------------------------------------------
----------------------------------------------------------------------*/

/* 12. Introducing Else Statements:::::>>>>
    
  >>>  When a condition for an "if" statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen.

   >>>> With an "else" statement, an alternate block of code can be executed.

   >>>>> The code inside the else statement code block will execute when the if statement’s condition evaluates to false.

   >>>>if...else statements allow us to automate solutions to yes-or-no questions, also known as binary decisions.

   >>> example 1:

       let sale = true;

      sale = false;

        if(sale) {
               console.log('Time to buy!');
            }
             else {
                 console.log('Time to wait for a sale.');
               }

   >>>> example 2

   function myFun(num) {
        if (num > 10) {
            return "great";
        } else {
            return "lower";
        }
      }
    myFun(9);  // returns "lower"  
     myFun(11);  // returns "greater"  
     -----------------------------------------------------------------
     ----------------------------------------------------------------*/

     /* 13. Introducing "Else If" Statements.

     If you have multiple conditions then use if statements together with else if statements.

     >>>>You can add as many else if statements as you’d like, to make more complex conditionals!

     example:

     function myFun(num) {
        if (num > 15) {
            return "greater than 15";
        } else if (num < 5 ) {
            return "smaller than 5";
        } else {
            return "between 5 and 15";
        }
    } myFun(20); // returns "greater than 15"
    myFun(2); // returns "smaller than 5" 

    example:::

    let stopLight = 'yellow';
 
     if (stopLight === 'red') {
              console.log('Stop!');
           } else if (stopLight === 'yellow') {
                   console.log('Slow down.');
             } else if (stopLight === 'green') {
         console.log('Go!');
          } else {
         console.log('Caution, unknown!');
        }   // prints Slow down.

    example:::

    let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
   console.log('It\'s fall! Leaves are falling!');
}else if(season === 'summer') {
   console.log('It\'s sunny and warm because it\'s summer!');
}
else {
  console.log('Invalid season.');
}                                 // prints It's sunny and warm because it's summer!
-------------------------------------------------------------------------
--------------------------------------------------------------------

 /* 14. Logical Order in "If Else" Statements

    "Order is important in if, else if statements."
    The function is executed from "top to bottom".

    function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(4);  // returns "Less than 10" 
------------------------------------------------------------
-------------------------------------------------------------*/

/* 15. Chaining If Else Statements:::

syntax:--

if (condition1) {
    statement1;
} else if (condition2) {
    statement2;
} else if (condition3) {
    statement3;
}else {
    statement;
}

Question:: Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"  

function myFun(num){
    if (num < 5) {
        return "Tiny";
    } else if (num < 10){
        return "Small";
    } else if (num < 15){
        return "Medium";
    } else if (num < 20){
        return "Large";
    } else if (num >= 20){
        return "Huge";
    } else {
        return "Change Me";
    }
}
myFun(7); // returns "Small" first condition is false so it switch to second condition.  
----------------------------------------------------------------------
-------------------------------------------------------------------------------*/

/* 16. Golf Code:.

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1) {
  return names[0];
} else if (strokes <= par - 2	) {
  return names[1];
} else if (strokes == par - 1) {
  return names[2];
} else if (strokes == par) {
  return names[3];
} else if (strokes == par + 1) {
    return names[4];
} else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }else {
    return "Change Me";}
  // Only change code above this line
}

golfScore(5, 4);  // returns "Birdie"
--------------------------------------------
----------------------------------------------

Another method without declaring variable::

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
  // Only change code above this line
}
// Change these values to test
golfScore(5, 4);
------------------------------------------------
----------------------------------------------- */

/* 17. Switch Statements:.
  

>>> "else if" statements are a great tool if we need to check multiple conditions.

example:
let groceryItem = 'papaya';
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}


>>> but imagine if we needed to check 100 different values! Having to write that many else if statements sounds like a pain!

"If you have many options to choose from, use a "switch" statement."

example 1:

let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');   // Prints 'Papayas are $1.29'
    break;
}
  example2:::

  let athleteFinalPosition = 'first place';

  switch(athleteFinalPosition) {
   case 'first place':
     console.log('You get the gold medal!'); 
   break;
   case 'second place':
   console.log('You get the silver medal!');
   break;
   case 'third place':
   console.log('You get the bronze medal!');
   break;
   case 'default':
   console.log('No medal awarded.');  
   break;
 }
      // prints You get the gold medal!


question:: Write a switch statement which tests val and sets answer for the following conditions:

1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha"; // return "alpha";
        break;
        case 2:
            answer = "beta";
        break;
        case 3:
            answer = "gamma";
        break;
        case 4:
            answer = "delta";
        break;

    } console.log(answer);  // or can write return answer
}
caseInSwitch(4);  

----------------------------------------------------
---------------------------------------------------------*/

/* 18. Ternary Operator: 

In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.

if...else statement::>>>>>

let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
>>>>>
We can use a "ternary operator" to perform the same functionality:
example>>>

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!'); 

------------------------------------------------------
_____________________________________________________*/

/* 19. Adding a "Default" Option in Switch Statements.

"default" statement which will be executed if no matching case statements are found.

function switchOfStuff(val) {
  var answer = "";
 
switch(val){
  case "a":
  answer = "apple";
  break;
   case "b":
  answer = "bird";
  break;
   case "c":
  answer = "cat";
  break;
   default:
  answer = "stuff";
  break;
  
}
  return answer;
}

switchOfStuff(1); 
------------------------------------------------------------------------*/

/* 20. Multiple "Identical" Options in Switch Statements

Question:
Write a switch statement to set answer for the following ranges:
1-3 - "Low"
4-6 - "Mid"
7-9 - "High"
----
function sequentialSizes(val) {
  let answer = "";
  
switch(val) {
  case 1:
  case 2:
  case 3:
  answer = "Low"; // return "low";
  break;
  case 4:
  case 5:
  case 6:
  answer = "Mid";
  break;
  case 7:
  case 8:
  case 9:
  answer = "High";
  break;

}
  return answer;
}

sequentialSizes(1); 
-------------------------------------------------------------------------*/

/* 21. Replacing If Else Chains with Switch:

>>If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements.
-------------------
with if..else statement:

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
-----------------------------
with switch statement:

function chainToSwitch(val) {
  var answer = "";

  switch(val) {
    case "bob":
    answer = "Marley";
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";
    break;


  }
  return answer;
}

chainToSwitch(7);

------------------------------------------------------------------------------------------------------*/

/* 22. Returning Boolean Values from Functions: 

example 1:

function myFun(a,b) {
    if(a === b) {
        return true;
    }else {
        return false;
    }
}myFun(10, 10);

example 2: there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function myFun(a,b) {
    return a === b;
}
myFun(10, 10);

example 3.

function myFun(a,b) {
    result a < b;
}
myFun(10, 15); 

-----------------------------------------------------------------------------------------------*/

/* 23. Return Early Pattern for Functions

question: if "a or b" are less than 0 the function will immediately exit with a value of undefined.

function abTest(a, b) {
  
if(a < 0 || b <0) {
  return undefined
}
}

-----------------------------------------------------*/

/* 24. Build JavaScript Objects:

>>> Objects are similar to arrays, except that "instead of using indexes" to access and modify their data, you access the data in objects through what are called "properties."

>> Objects are useful for storing data in a structured way.

example:. 
let cat = {
  "name" : "whisker" ,
  "legs" : 4,
  "tails" : "one",
  "enemies": ["water", "Dogs"]  // arrays
}; 
console.log(cat);  // prints {name: "whisker", legs: 4, tails: "one", enemies: Array(2)} 

>>> all the properties are stored as "strings", you can also use numbers as properties. 

--------------------------------------------------------------------------------------------------------- */

/* 25.Accessing Object Properties with Dot Notation(.)
 
There are two ways to access the properties of an object:
>>(.) dot notation
>> ([]) bracket notation*/
/*
var val = {
  "hat" : "red",
  "shirt" : 45,
  "shoes" : "Black"
};
var hatValue = val.hat;
var shirtValue = val.shirt;

console.log(hatValue);   // prints red
...................................
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

console.log(testObj.hat);  // ballcap
      
"or" you can write::

var hatValue = testObj.hat;      // not include Quotes
var shirtValue = testObj.shirt; 


---------------------------------------------------------------------------------------------------------------*/

/* 26. Accessing Object Properties with Bracket Notation[]

>> If the property of the object has a space in its name, you will need to use bracket notation. "Space Name"
>> you can still use bracket notation on object properties without spaces."NoSpace"
 example: 

 var val = {
  "hat" : "red",
  "shirt" : 45,
  "shoes" : "Black"
};
var hatvalue = val["hat"];  // red
var shirtValue = val["shirt"]; // 45

........................................

var testObj = {
  "an entree": "hamburger", "my side": "veggies",
  "the drink": "water"
  
};
 
var entreeValue = testObj["an entree"];   // "hamburger"
var drinkValue = testObj["the drink"];    // "water"

// must include quotes with bracket notation
-----------------------------------------------------------------------------------------------------------------*/
/* 27. Accessing Object Properties with Variables: [best way]
 
var testObj = {
  12 : "Namath", 16: "Montana",
  19: "Unitas"
}

var playerNumber = 16;
var player = testObj[playerNumber];
--------------------------------------------------------------------------------------------------------------
*/

/* 28. Updating Object Properties:  
 >> after creating JS object, you can update its properties at any time just like you would update any other variable. 

 question::: Update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.

 var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog["name"] = "Happy Coder"; // [] notation required quotes
 
or

myDog.name = "Happy Coder"; // . notation not required quotes.

------------------------------------------------------------------------------------*/

/* 29. Add New Properties to a JavaScript Object 
  
using . or [] notation, we can add new property.
 example:::

 var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof"; // or myDog["bark"] = "woof"; it will add new property to the object.

--------------------------------------------------------------------------------------------------------------------------------*/

/* 30. Delete Properties from a JavaScript Object:

>>  " delete ourDog.bark; "
 
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
 delete myDog.tails; // it will delete tails property from the object.

 ------------------------------------------------------------------------------------------------------------------*/

 /* 31. Using Objects for Lookups


*/
