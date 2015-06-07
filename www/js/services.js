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
});
