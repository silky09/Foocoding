
      const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
      ];

   
      


// 1. Filter the list of inventors for those who were born in the 1500's

// Array.prototype.filter()

const bornFifteen = inventors.filter(function (inventor) {
   if (inventor.year >= 1500 && inventor.year <= 1600) {
     return true;
   } else {
     return false;
   }
});
console.table(bornFifteen);
/*
┌─────────┬────────────┬───────────┬──────┬────────┐
│ (index) │   first    │   last    │ year │ passed │
├─────────┼────────────┼───────────┼──────┼────────┤
│    0    │ 'Galileo'  │ 'Galilei' │ 1564 │  1642  │
│    1    │ 'Johannes' │ 'Kepler'  │ 1571 │  1630  │
└─────────┴────────────┴───────────┴──────┴────────┘
 */




// 2. Give us an array of the inventors first and last names

// Array.prototype.map()

const fullNames = inventors.map(function (inventor) {
  return `${inventor.first} ${inventor.last}`;
});
console.table(fullNames);
/* returns 
[ 'Albert Einstein',
  'Isaac Newton',
  'Galileo Galilei',
  'Marie Curie',
  'Johannes Kepler',
  'Nicolaus Copernicus',
  'Max Planck',
  'Katherine Blodgett',
  'Ada Lovelace',
  'Sarah E. Goode',
  'Lise Meitner',
  'Hanna Hammarström' ]*/

  /**
┌─────────┬───────────────────────┐
│ (index) │        Values         │
├─────────┼───────────────────────┤
│    0    │   'Albert Einstein'   │
│    1    │    'Isaac Newton'     │
│    2    │   'Galileo Galilei'   │
│    3    │     'Marie Curie'     │
│    4    │   'Johannes Kepler'   │
│    5    │ 'Nicolaus Copernicus' │
│    6    │     'Max Planck'      │
│    7    │ 'Katherine Blodgett'  │
│    8    │    'Ada Lovelace'     │
│    9    │   'Sarah E. Goode'    │
│   10    │    'Lise Meitner'     │
│   11    │  'Hanna Hammarström'  │
└─────────┴───────────────────────┘
   */

  // 3.  Sort the inventors by birthdate, oldest to youngest.

  // Array.prototype.sort()

const birthOldestToYoungest = inventors.sort(function (a, b) {
  return a.year - b.year;
});
console.table(birthOldestToYoungest);

/**
┌─────────┬─────────────┬───────────────┬──────┬────────┐
│ (index) │    first    │     last      │ year │ passed │
├─────────┼─────────────┼───────────────┼──────┼────────┤
│    0    │ 'Nicolaus'  │ 'Copernicus'  │ 1473 │  1543  │
│    1    │  'Galileo'  │   'Galilei'   │ 1564 │  1642  │
│    2    │ 'Johannes'  │   'Kepler'    │ 1571 │  1630  │
│    3    │   'Isaac'   │   'Newton'    │ 1643 │  1727  │
│    4    │    'Ada'    │  'Lovelace'   │ 1815 │  1852  │
│    5    │   'Hanna'   │ 'Hammarström' │ 1829 │  1909  │
│    6    │ 'Sarah E.'  │    'Goode'    │ 1855 │  1905  │
│    7    │    'Max'    │   'Planck'    │ 1858 │  1947  │
│    8    │   'Marie'   │    'Curie'    │ 1867 │  1934  │
│    9    │   'Lise'    │   'Meitner'   │ 1878 │  1968  │
│   10    │  'Albert'   │  'Einstein'   │ 1879 │  1955  │
│   11    │ 'Katherine' │  'Blodgett'   │ 1898 │  1979  │
└─────────┴─────────────┴───────────────┴──────┴────────┘
 */


// 4. How many years did all the inventors live?


// Array.prototype.reduce()

const yearsOfLive = inventors.reduce(function (total, currentLife) {
  return total + (currentLife.passed - currentLife.year) ;
}, 0);
console.log(yearsOfLive); // returns 861 

// 5. Sort the inventors by years lived

const yearsLived = inventors.sort(function (a, b) {
  const live1 = a.passed - a.year;
  const live2 = b.passed - b.year;
  return live1 > live2 ? -1 : 1;  // ternary operation

});
console.table(yearsLived);

/**
┌─────────┬─────────────┬───────────────┬──────┬────────┐
│ (index) │    first    │     last      │ year │ passed │
├─────────┼─────────────┼───────────────┼──────┼────────┤
│    0    │   'Lise'    │   'Meitner'   │ 1878 │  1968  │
│    1    │    'Max'    │   'Planck'    │ 1858 │  1947  │
│    2    │   'Isaac'   │   'Newton'    │ 1643 │  1727  │
│    3    │ 'Katherine' │  'Blodgett'   │ 1898 │  1979  │
│    4    │   'Hanna'   │ 'Hammarström' │ 1829 │  1909  │
│    5    │  'Galileo'  │   'Galilei'   │ 1564 │  1642  │
│    6    │  'Albert'   │  'Einstein'   │ 1879 │  1955  │
│    7    │ 'Nicolaus'  │ 'Copernicus'  │ 1473 │  1543  │
│    8    │   'Marie'   │    'Curie'    │ 1867 │  1934  │
│    9    │ 'Johannes'  │   'Kepler'    │ 1571 │  1630  │
│   10    │ 'Sarah E.'  │    'Goode'    │ 1855 │  1905  │
│   11    │    'Ada'    │  'Lovelace'   │ 1815 │  1852  │
└─────────┴─────────────┴───────────────┴──────┴────────┘
*/

 // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris



// 7. Sort the people alphabetically by last name

// sort Exercise:

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Berenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// sorting by name alphabetically
const lastName = people.sort();
console.table(lastName);  

// sorting by last name alphabetically

const lastNameAlphabetically = people.map(function (name) {
  const full = name.split(" ");
  const last = full.pop();
  return last + ", " + full.join(" ");
}).sort();

console.table(lastNameAlphabetically);

/*
┌─────────┬────────────────────────┐
│ (index) │         Values         │
├─────────┼────────────────────────┤
│    0    │   'Ambrose, Bierce,'   │
│    1    │   'Aneurin, Bevan,'    │
│    2    │ 'Augustine, Birrell,'  │
│    3    │    'Carl, Becker,'     │
│    4    │ 'Chester, Bennington,' │
│    5    │  'David, Ben-Gurion,'  │
│    6    │     'Elk, Black,'      │
│    7    │     'Eric, Berne,'     │
│    8    │    'Erin, Bethea,'     │
│    9    │    'Frank, Biondo,'    │
│   10    │     'Glenn, Beck,'     │
│   11    │    'Halle, Berry,'     │
│   12    │   'Henry, Beecher,'    │
│   13    │   'Hilaire, Belloc,'   │
│   14    │   'Ingmar, Bergman,'   │
│   15    │   'Irving, Berlin,'    │
│   16    │    'Joseph, Biden,'    │
│   17    │   'Josh, Billings,'    │
│   18    │     'Ken, Bevel,'      │
│   19    │    'Leana, Benson,'    │
│   20    │   'Lloyd, Bentsen,'    │
│   21    │   'Luciano, Berio,'    │
│   22    │  'Ludwig, Beethoven,'  │
│   23    │   'Menachem, Begin,'   │
│   24    │    'Mick, Beddoes,'    │
│   25    │    'Milton, Berle,'    │
│   26    │   'Peter, Berenson,'   │
│   27    │     'Ric, Berger,'     │
│   28    │  'Robert, Benchley,'   │
│   29    │    'Robert, Blair,'    │
│   30    │   'Samuel, Beckett,'   │
│   31    │  'Sandra, Bernhard,'   │
│   32    │    'Saul, Bellow,'     │
│   33    │     'Silas, Bent,'     │
│   34    │     'Steve, Biko,'     │
│   35    │     'Tony, Benn,'      │
│   36    │     'Tony, Blair,'     │
│   37    │  'Walter, Benjamin,'   │
│   38    │   'Wendell, Berry,'    │
│   39    │   'William, Blake,'    │
│   40    │     'Yogi, Berra,'     │
└─────────┴────────────────────────┘


*/

// 8. Reduce Exercise

      // Sum up the instances of each of these
      const data = [
        'car',
        'car',
        'truck',
        'truck',
        'bike',
        'walk',
        'car',
        'van',
        'bike',
        'walk',
        'car',
        'van',
        'car',
        'truck',
];
      
const vehicles = data.reduce(function (total, carValue) {
 total[carValue] = (total[carValue] || 0) + 1;
  return total;
}, {});
console.log(vehicles);

 // prints  { car: 5, truck: 3, bike: 2, walk: 2, van: 2 }