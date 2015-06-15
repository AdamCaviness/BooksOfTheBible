/// <reference path="../../typings/tsd.d.ts" />

angular.module('bothb.services', [])

.factory('$exceptionHandler', function($log) {
  return function (exception, cause) {
    if (cause) {
      $log.error('exception cause:', cause);
    }
    throw exception;
  };
})

.factory('Quizzes', function() {
  var quizzes = [{
    id: 0,
    name: 'Typo',
    quizDesc: 'Type the book name',
    symbology: './img/typo.png'
  }, {
    id: 1,
    name: 'Pick-nic',
    quizDesc: 'Pick from a list',
    symbology: './img/pick.png'
  }];

  return {
    all: function() {
      return quizzes;
    },
    remove: function(quiz) {
      quizzes.splice(quizzes.indexOf(quiz), 1);
    },
    get: function(quizId) {
      for (var i = 0; i < quizzes.length; i++) {
        if (quizzes[i].id === parseInt(quizId)) {
          return quizzes[i];
        }
      }
      return null;
    }
  };
})

.factory('Books', function() {
  var books = [{
    id: 0,
    name: 'Genesis',
	  testament: 'old',
    activated: false
  },
{
    id: 1,
    name: 'Exodus',
	  testament: 'old',
    activated: false
  },
{
    id: 2,
    name: 'Leviticus',
	  testament: 'old',
    activated: false
  },
{
    id: 3,
    name: 'Numbers',
	  testament: 'old',
    activated: false
  },
{
    id: 4,
    name: 'Deuteronomy',
	  testament: 'old',
    activated: false
  },
{
    id: 5,
    name: 'Joshua',
	  testament: 'old',
    activated: false
  },
{
    id: 6,
    name: 'Judges',
	  testament: 'old',
    activated: false
  },
{
    id: 7,
    name: 'Ruth',
	  testament: 'old',
    activated: false
  },
{
    id: 8,
    name: '1 Samuel',
	  testament: 'old',
    activated: false
  },
{
    id: 9,
    name: '2 Samuel',
	  testament: 'old',
    activated: false
  },
{
    id: 10,
    name: '1 Kings',
	  testament: 'old',
    activated: false
  },
{
    id: 11,
    name: '2 Kings',
	  testament: 'old',
    activated: false
  },
{
    id: 12,
    name: '1 Chronicles',
	  testament: 'old',
    activated: false
  },
{
    id: 13,
    name: '2 Chronicles',
	  testament: 'old',
    activated: false
  },
{
    id: 14,
    name: 'Ezra',
	  testament: 'old',
    activated: false
  },
{
    id: 15,
    name: 'Nehemiah',
	  testament: 'old',
    activated: false
  },
{
    id: 16,
    name: 'Esther',
	  testament: 'old',
    activated: false
  },
{
    id: 17,
    name: 'Job',
	  testament: 'old',
    activated: false
  },
{
    id: 18,
    name: 'Psalms',
	  testament: 'old',
    activated: false
  },
{
    id: 19,
    name: 'Proverbs',
	  testament: 'old',
    activated: false
  },
{
    id: 20,
    name: 'Ecclesiastes',
	  testament: 'old',
    activated: false
  },
{
    id: 21,
    name: 'Song of Songs',
	  testament: 'old',
    activated: false
  },
{
    id: 22,
    name: 'Isaiah',
	  testament: 'old',
    activated: false
  },
{
    id: 23,
    name: 'Jeremiah',
	  testament: 'old',
    activated: false
  },
{
    id: 24,
    name: 'Lamentations',
	  testament: 'old',
    activated: false
  },
{
    id: 25,
    name: 'Ezekiel',
	  testament: 'old',
    activated: false
  },
{
    id: 26,
    name: 'Daniel',
	  testament: 'old',
    activated: false
  },
{
    id: 27,
    name: 'Hosea',
	  testament: 'old',
    activated: false
  },
{
    id: 28,
    name: 'Joel',
	  testament: 'old',
    activated: false
  },
{
    id: 29,
    name: 'Amos',
	  testament: 'old',
    activated: false
  },
{
    id: 30,
    name: 'Obadiah',
	  testament: 'old',
    activated: false
  },
{
    id: 31,
    name: 'Jonah',
	  testament: 'old',
    activated: false
  },
{
    id: 32,
    name: 'Micah',
	  testament: 'old',
    activated: false
  },
{
    id: 33,
    name: 'Nahum',
	  testament: 'old',
    activated: false
  },
{
    id: 34,
    name: 'Habakkuk',
	  testament: 'old',
    activated: false
  },
{
    id: 35,
    name: 'Zephaniah',
	  testament: 'old',
    activated: false
  },
{
    id: 36,
    name: 'Haggai',
	  testament: 'old',
    activated: false
  },
{
    id: 37,
    name: 'Zechariah',
	  testament: 'old',
    activated: false
  },
{
    id: 38,
    name: 'Malachi',
	  testament: 'old',
    activated: false
  },
 {
    id: 39,
    name: 'Matthew',
	  testament: 'new',
    activated: false
  },
 {
    id: 40,
    name: 'Mark',
	  testament: 'new',
    activated: false
  },
 {
    id: 41,
    name: 'Luke',
	  testament: 'new',
    activated: false
  },
 {
    id: 42,
    name: 'John',
	  testament: 'new',
    activated: false
  },
 {
    id: 43,
    name: 'Acts',
	  testament: 'new',
    activated: false
  },
 {
    id: 44,
    name: 'Romans',
	  testament: 'new',
    activated: false
  },
 {
    id: 45,
    name: '1 Corinthians',
	  testament: 'new',
    activated: false
  },
 {
    id: 46,
    name: '2 Corinthians',
	  testament: 'new',
    activated: false
  },
 {
    id: 47,
    name: 'Galatians',
	  testament: 'new',
    activated: false
  },
 {
    id: 48,
    name: 'Ephesians',
	  testament: 'new',
    activated: false
  },
 {
    id: 49,
    name: 'Philippians',
	 testament: 'new',
    activated: false
  },
 {
    id: 50,
    name: 'Colossians',
	  testament: 'new',
    activated: false
  },
 {
    id: 51,
    name: '1 Thessalonians',
	  testament: 'new',
    activated: false
  },
 {
    id: 52,
    name: '2 Thessalonians',
	  testament: 'new',
    activated: false
  },
 {
    id: 53,
    name: '1 Timothy',
	  testament: 'new',
    activated: false
  },
 {
    id: 54,
    name: '2 Timothy',
	  testament: 'new',
    activated: false
  },
 {
    id: 55,
    name: 'Titus',
	  testament: 'new',
    activated: false
  },
 {
    id: 56,
    name: 'Philemon',
	  testament: 'new',
    activated: false
  },
 {
    id: 57,
    name: 'Hebrews',
	  testament: 'new',
    activated: false
  },
 {
    id: 58,
    name: 'James',
	  testament: 'new',
    activated: false
  },
 {
    id: 59,
    name: '1 Peter',
	  testament: 'new',
    activated: false
  },
 {
    id: 60,
    name: '2 Peter',
	  testament: 'new',
    activated: false
  },
 {
    id: 61,
    name: '1 John',
	  testament: 'new',
    activated: false
  },
 {
    id: 62,
    name: '2 John',
	  testament: 'new',
    activated: false
  },
 {
    id: 63,
    name: '3 John',
	  testament: 'new',
    activated: false
  },
 {
    id: 64,
    name: 'Jude',
	  testament: 'new',
    activated: false
  },
 {
    id: 65,
    name: 'Revelation',
	  testament: 'new',
    activated: false
  }];

  return {
    all: function() {
      return books;
    },
    testament: function(name) {
      if (name === 'old') {
        return books.slice(0, 39);
      }  
      else {
        return books.slice(39, 66);
      }
    },
    randomSelection : function(correctBookIndex, numberDesired) {
      console.log('correctBookIndex is ' + correctBookIndex);
      try {
        var selection = [];
        var randomPosForCorrectBook = randomIntFromInterval(0, 4);
         for (var i = 0; i < numberDesired; i++) {
          var id;
          do {
            id = randomIntFromInterval(0, 65);
          }
          while (selection.indexOf(books[id]) > -1)
          
          selection.push(books[id]);        
        }
        
        // If the correct book was not already randomly chosen, put it in place
        if (selection.indexOf(books[correctBookIndex]) === -1) {
          selection[randomPosForCorrectBook] = books[correctBookIndex];
        }
        
        return selection;
      } catch (e) {
        console.log(e);
        console.log(e.stack);
        console.log(e.line);
      }
    },
    remove: function(book) {
      books.splice(books.indexOf(book), 1);
    },
    get: function(bookId) {
      for (var i = 0; i < books.length; i++) {
        if (books[i].id === parseInt(bookId)) {
          return books[i];
        }
      }
      return null;
    }
  };
});

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}