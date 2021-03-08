

// Maartje's work:

//'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

//Write a program that computes how much Maartje has earned by 
//completing these tasks,
// using map and filter method.

// const totalTasks = [...monday, ...tuesday];
// console.log(totalTasks);

// const payHourRate = 20;

// // other way to use "concat" method
// // The concat() method is used to join two or more arrays.

// //const totalTasks = monday.concat(tuesday);
 
// // 1. Map the tasks to durations in hours.

// let durationInHour = totalTasks.map(i => i.duration / 60);
// console.log(durationInHour);
  

// // 2.  Filter out everything that took less than two hours(i.e., remove from the collection)
// let moreThanTwoHours = durationInHour.filter(i => i >= 2);
// console.log(moreThanTwoHours); // prints  [3, 2, 3]


// // 3.  Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.

// let multiplyDuration = moreThanTwoHours.map(i => i * payHourRate);
// console.log(multiplyDuration); // [60, 40, 60]


// // 4.  Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.

 
// let totalSumUp = multiplyDuration.reduce((total, currentValue) => total + currentValue);
// console.log(totalSumUp); // 160 

// let result = totalSumUp.toFixed(2); // to fixed is used to rounded to Euro cents like .00(2), .000(3)
// console.log(result); // 160.00

//-------------------------------------------------------------






/**
┌─────────┬────────────────────────────────────────────────┬──────────┐
│ (index) │                      name                      │ duration │
├─────────┼────────────────────────────────────────────────┼──────────┤
│    0    │           'Write a summary HTML/CSS'           │   180    │
│    1    │             'Some web development'             │   120    │
│    2    │           'Fix homework for class10'           │    20    │
│    3    │           'Talk to a lot of people'            │    1     │
│    4    │             'Keep writing summary'             │    1     │
│    5    │          'Some more web development'           │   180    │
│    6    │            'Staring out the window'            │    10    │
│    7    │           'Talk to a lot of people'            │    1     │
│    8    │ 'Look at application assignments new students' │    40    │
└─────────┴────────────────────────────────────────────────┴──────────┘
 */

// short method:::> 

const totalTasks = [...monday, ...tuesday];
console.log(totalTasks);

const payHourRate = 20;

let finalResult = totalTasks
  .map(i => i.duration/ 60)
  .filter(i => i >= 2)
  .map(i => i * payHourRate)
  .reduce((total, currentValue) => total + currentValue)
  .toFixed(2)

  console.log(finalResult);