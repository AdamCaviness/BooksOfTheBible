angular.module('bothb.services', [])

.factory('Quizzes', function() {
  var quizzes = [{
    id: 0,
    name: 'Typo',
    lastText: 'Type the book name',
    face: '/img/typo.png'
  }, {
    id: 1,
    name: 'Pick-nic',
    lastText: 'Pick from a list',
    face: '/img/pick.png'
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
