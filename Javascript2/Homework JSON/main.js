'use strict';

const groceries = [
  {
    product: "Milk, 1L carton",
    best_before: '2018-10-04',
    price: 15.5
  },
  {
    product: 'Milk, 1L carton',
    best_before: '2018-10-04',
    price: 15.5,
  },
  {
    product: 'Eggs 12pcs',
    best_before: '2018-10-04',
    price: 35.0,
  },
  {
    product: 'Swedish meatballs',
    best_before: '2018-10-04',
    price: 22.0,
  },
];
console.log(groceries);
console.log(JSON.stringify(groceries));


// Make 2 functions
/**
 *  Each function receives the inventory as a JSON string and should output an array of items in the same format
 *  If more than one items with the same price, all should be included in the array
 */

 //  1. Find most expensive items

 
 

const expensiveItem = groceries.reduce(function (max, min) {
  return max.price > min.price ? max : min;
  
});
console.log(expensiveItem.product);
console.log(JSON.stringify(expensiveItem));

//  1. Find cheapest items
const cheapestItem = groceries.reduce(function (max, min) {
  return max.price < min.price ? max : min;
});
console.log(cheapestItem.product);
console.log(JSON.stringify(cheapestItem));





