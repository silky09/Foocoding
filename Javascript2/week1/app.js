//Custom DOM manipulation challenge


/** 1.1 - 1.2
 * Open the apps.js and start by declaring an array that contains 10 strings.
 * These strings should be of book titles you have read and be 
   lowercase without spaces so that you can use these later as HTML id attributes.
 
 * (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).
Add a console.log statement to output this array to console.
 */

/**1.2  Open the empty index.html and 
 * add the required HTML to load the app.js file.
 * Open index.html in the browser and confirm that the console.log statement shows the array. 
 * (Open the Chrome Developer Tools and inspect the console.)
 */



'use strict';
{
  const bookTitles = [
    'harry_potter_chamber_secrets',
    'one_flew_over_cuckoos_nest',
    'pride_and_prejudice',
    'the_silence_of_lambs',
    'black_cat',
    'the_great_fire_of_london',
    'bridget_jones_diary',
    'sun_also_rises',
    'what_if',
    'alive',
  ];         //declaring an array that contains 10 strings.


  // console.log(bookTitles);

  
  
 /* 1.4  
 
  Make an "object" (not an array!) containing information for each book.
  Each property of this object should be another (i.e., nested) object with the book ID you 
  thought up in step 1.1 as a key,
  and at least the following properties: title, language and author. 
  */
  
  const books = {
    harry_potter_chamber_secrets: {
      title: 'Harry potter Chamber of secrets ',
      author: 'J.K. Rowling',
      language: 'English',

    },
    one_flew_over_cuckoos_nest: {
      title: "One Flew Over the Cuckoo's Nest",
      author: 'Ken Kesey',
      language: 'English',
    },
    pride_and_prejudice: {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      language: 'English',
    },
    the_silence_of_lambs: {
      title: 'The Silence of the Lambs',
      author: 'Thomas Harris',
      language: 'English',
    },
    black_cat: {
      title: 'The Black Cat ',
      author: 'Edgar Allan Poe',
      language: 'English ',
    },
    the_great_fire_of_london: {
      title: 'The Great Fire of London',
      author: 'Peter Ackroyd',
      language: 'English',
    },
    bridget_jones_diary: {
      title: 'Bridget Jones Diary',
      author: 'Jon Krakauer',
      language: 'English',
    },
    sun_also_rises : {
      title: ' The Sun Also Rises',
      author: 'Ernest Hemingway',
      language: 'English',
    },
    what_if: {
      title: " Alice's Adventures in Wonderland",
      author: 'Lewis Carroll',
      language: 'English',
    },
    alive: {
      title: 'Alive ',
      author: 'Piers Paul Read',
      language: 'English',
    }

  }

   /*
    1.6 Beautify your html page with css (use the style.css file for that), 
    add sources and alts to each of the images.
    */
  
   /* 1.7

    Find and download book covers for each book and 
    construct a new object which has as keys the 
    book IDs again, and as value the path to the
     image source
      (e.g. { harry_potter_blabla: './img/harry_potter_blabla.jpg', ... }).
   */ 
  const imgs = {
    harry_potter_chamber_secrets: 'images/imgs1.jpg',
    one_flew_over_cuckoos_nest: 'images/imgs2.jpg',
    pride_and_prejudice: 'images/imgs3.jpg',
    the_silence_of_lambs: 'images/imgs4.jpg',
    black_cat: 'images/imgs5.jpg',
    the_great_fire_of_london: 'images/imgs6.jpg',
    bridget_jones_diary: 'images/imgs7.jpg',
    sun_also_rises: 'images/imgs8.jpg',
    what_if: 'images/imgs9.jpg',
    alive: 'images/imgs10.jpg',

  }
  
  /**
   * Make a function (or functions) 
   * that generate a ul with li elements for each book ID in the array 
   * using a for loop.
   *  Make sure that the function names you 
   * choose are an accurate reflection of what they do.  
   */
  const array = bookTitles.length;
  
  function myBooksList() {
    let main = document.getElementById('content');
    let list = document.createElement('ul');
    main.appendChild(list);

    for (let i = 0; i < array; i++) {
      let listChild = document.createElement('li');
      list.appendChild(listChild);


      let text = document.createTextNode(' ' + Object.values(books)[i].title);
      let h1 = document.createElement('h1');
      listChild.appendChild(h1); 
      h1.appendChild(text);

      let text2 = document.createTextNode('Author: ' + Object.values(books)[i].author);
      let h2 = document.createElement('h2');
      listChild.appendChild(h2); 
      h2.appendChild(text2);

      let text3 = document.createTextNode('Language: ' + Object.values(books)[i].language);
      let anotherH2 = document.createElement('h2');
      listChild.appendChild(anotherH2);
      anotherH2.appendChild(text3);

      let covers = document.createElement('img');
      listChild.appendChild(covers);
      covers.setAttribute('src', Object.values(imgs)[i]);

      
    }

  }
  myBooksList();
  

}
