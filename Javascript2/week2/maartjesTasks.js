/**
 * Write a program that computes how much Maartje has earned by completing these tasks, using map and filter. For the 'summing part' you can try your luck with reduce; alternatively, you may use forEach or a for loop.

Follow these steps. Each step should build on the result of the previous step.

* Map the tasks to durations in hours.

* Filter out everything that took less than two hours (i.e., remove from the collection)

* Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.

* Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.

* Choose variable and parameters names that most accurately describe their contents or purpose.
 When naming an array, use a plural form, e.g. durations.
 For a single item, use a singular form, e.g. duration. For details, see Naming Conventions.

* Don't forget to use =>.
 */


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

//Write a program that computes how much Maartje has earned by completing these tasks, 
// using map and filter method.

/**
* Map the tasks to durations in hours.
  
*  Filter out everything that took less than two hours (i.e., remove from the collection)

*  Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.

*  Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.

*  Choose variable and parameters names that most accurately describe their contents or purpose. When naming an array, use a plural form, e.g. durations. For a single item, use a singular form,
 e.g. duration. For details, see Naming Conventions.
*  Don't forget to use =>.
 */

// const totalEarned = monday.map(function (total) {
//   let hours = (total.duration) / 60;
//   //console.log(hours);
//   let hours1 = Math.floor(hours);
//   return hours1;
  
// });
// console.log(totalEarned); // prints  [ 3, 2, 0, 0 ]

//-------------------------------------------------------------

// The concat() method is used to join two or more arrays.

const maartjesTasks = monday.concat(tuesday);
//console.log(maartjesTasks);

const maartjesHourlyRate = 20;
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



function computeEarnings(tasks, hourlyRate) {
  // Replace this comment and the next line with your code
  const taskRate = tasks
    .map(task => task.duration / 60) // map duration in hours
    .filter(duration => duration >= 2)   //remove the duration, that is < 2 hours
    .map(duration => duration * hourlyRate) //multiply each duration per hour (rate =20)
    .reduce((total, value) => total + value) // Total sum all
    return taskRate;

}

const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate).toFixed(2);

console.log(`Maartje has earned €${earnings}`);


module.exports = {
  maartjesTasks,

  maartjesHourlyRate,
  computeEarnings,
};