/// <reference path="../../typings/tsd.d.ts" />

angular.module('bothb.services', [])

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
    id: 1,
    name: 'Genesis',
	testament: 'old'
  },
{
    id: 2,
    name: 'Exodus',
	testament: 'old'
  },
{
    id: 3,
    name: 'Leviticus',
	testament: 'old'
  },
{
    id: 4,
    name: 'Numbers',
	testament: 'old'
  },
{
    id: 5,
    name: 'Deuteronomy',
	testament: 'old'
  },
{
    id: 6,
    name: 'Joshua',
	testament: 'old'
  },
{
    id: 7,
    name: 'Judges',
	testament: 'old'
  },
{
    id: 8,
    name: 'Ruth',
	testament: 'old'
  },
{
    id: 9,
    name: '1 Samuel',
	testament: 'old'
  },
{
    id: 10,
    name: '2 Samuel',
	testament: 'old'
  },
{
    id: 11,
    name: '1 Kings',
	testament: 'old'
  },
{
    id: 12,
    name: '2 Kings',
	testament: 'old'
  },
{
    id: 13,
    name: '1 Chronicles',
	testament: 'old'
  },
{
    id: 14,
    name: '2 Chronicles',
	testament: 'old'
  },
{
    id: 15,
    name: 'Ezra',
	testament: 'old'
  },
{
    id: 16,
    name: 'Nehemiah',
	testament: 'old'
  },
{
    id: 17,
    name: 'Esther',
	testament: 'old'
  },
{
    id: 18,
    name: 'Job',
	testament: 'old'
  },
{
    id: 19,
    name: 'Psalms',
	testament: 'old'
  },
{
    id: 20,
    name: 'Proverbs',
	testament: 'old'
  },
{
    id: 21,
    name: 'Ecclesiastes',
	testament: 'old'
  },
{
    id: 22,
    name: 'Song of Songs',
	testament: 'old'
  },
{
    id: 23,
    name: 'Isaiah',
	testament: 'old'
  },
{
    id: 24,
    name: 'Jeremiah',
	testament: 'old'
  },
{
    id: 25,
    name: 'Lamentations',
	testament: 'old'
  },
{
    id: 26,
    name: 'Ezekiel',
	testament: 'old'
  },
{
    id: 27,
    name: 'Daniel',
	testament: 'old'
  },
{
    id: 28,
    name: 'Hosea',
	testament: 'old'
  },
{
    id: 29,
    name: 'Joel',
	testament: 'old'
  },
{
    id: 30,
    name: 'Amos',
	testament: 'old'
  },
{
    id: 31,
    name: 'Obadiah',
	testament: 'old'
  },
{
    id: 32,
    name: 'Jonah',
	testament: 'old'
  },
{
    id: 33,
    name: 'Micah',
	testament: 'old'
  },
{
    id: 34,
    name: 'Nahum',
	testament: 'old'
  },
{
    id: 35,
    name: 'Habakkuk',
	testament: 'old'
  },
{
    id: 36,
    name: 'Zephaniah',
	testament: 'old'
  },
{
    id: 37,
    name: 'Haggai',
	testament: 'old'
  },
{
    id: 38,
    name: 'Zechariah',
	testament: 'old'
  },
{
    id: 39,
    name: 'Malachi',
	testament: 'old'
  },
 {
    id: 40,
    name: 'Matthew',
	testament: 'new'
  },
 {
    id: 41,
    name: 'Mark',
	testament: 'new'
  },
 {
    id: 42,
    name: 'Luke',
	testament: 'new'
  },
 {
    id: 43,
    name: 'John',
	testament: 'new'
  },
 {
    id: 44,
    name: 'Acts',
	testament: 'new'
  },
 {
    id: 45,
    name: 'Romans',
	testament: 'new'
  },
 {
    id: 46,
    name: '1 Corinthians',
	testament: 'new'
  },
 {
    id: 47,
    name: '2 Corinthians',
	testament: 'new'
  },
 {
    id: 48,
    name: 'Galatians',
	testament: 'new'
  },
 {
    id: 49,
    name: 'Ephesians',
	testament: 'new'
  },
 {
    id: 50,
    name: 'Philippians',
	testament: 'new'
  },
 {
    id: 51,
    name: 'Colossians',
	testament: 'new'
  },
 {
    id: 52,
    name: '1 Thessalonians',
	testament: 'new'
  },
 {
    id: 53,
    name: '2 Thessalonians',
	testament: 'new'
  },
 {
    id: 54,
    name: '1 Timothy',
	testament: 'new'
  },
 {
    id: 55,
    name: '2 Timothy',
	testament: 'new'
  },
 {
    id: 56,
    name: 'Titus',
	testament: 'new'
  },
 {
    id: 57,
    name: 'Philemon',
	testament: 'new'
  },
 {
    id: 58,
    name: 'Hebrews',
	testament: 'new'
  },
 {
    id: 59,
    name: 'James',
	testament: 'new'
  },
 {
    id: 60,
    name: '1 Peter',
	testament: 'new'
  },
 {
    id: 61,
    name: '2 Peter',
	testament: 'new'
  },
 {
    id: 62,
    name: '1 John',
	testament: 'new'
  },
 {
    id: 63,
    name: '2 John',
	testament: 'new'
  },
 {
    id: 64,
    name: '3 John',
	testament: 'new'
  },
 {
    id: 65,
    name: 'Jude',
	testament: 'new'
  },
 {
    id: 66,
    name: 'Revelation',
	testament: 'new'
  }];

  return {
    all: function() {
      return books;
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
