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
    id: 0,
    name: 'Job'
  }, {
    id: 1,
    name: 'Psalms'
  }, {
    id: 2,
    name: 'Proverbs'
  }, {
    id: 3,
    name: 'Song of Songs'
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
