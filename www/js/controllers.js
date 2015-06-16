/// <reference path="../../typings/tsd.d.ts" />

angular.module('bothb.controllers', [])

.controller('QuizCtrl', function($scope, Quizzes) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.quizzes = Quizzes.all();
  $scope.remove = function(quiz) {
    Quizzes.remove(quiz);
  };
})

.controller('QuizDetailCtrl', function($scope, $stateParams, $timeout, Quizzes, Books) {
  $scope.bookActivated = false;
  $scope.currentBookIndex = -1;
  $scope.correctBookIndex = $scope.currentBookIndex + 1;
  $scope.books = Books.randomSelection($scope.correctBookIndex, 5);
  $scope.quiz = Quizzes.get($stateParams.quizId);
 
  $scope.onBookTap = function(event, book) {
    console.log('Book tapped: ' + book.name);
    console.log('Book tapped: id = ' + book.id);
    var button = angular.element(event.target);
    console.log('button is ' + button);
    
    if ($scope.correctBookIndex === book.id) {
      $scope.currentBookIndex = book.id;
      $scope.correctBookIndex = $scope.currentBookIndex + 1;
      button.removeClass('shake shake-sane');
      button.removeClass('button-assertive');
      button.addClass('button-balanced');
      $timeout(function() {
        button.removeClass('button-balanced');
        $scope.books = Books.randomSelection($scope.correctBookIndex, 5);
      }, 100);
    }
    else {
      button.addClass('button-assertive');
      button.addClass('shake shake-sane');
      $timeout(function() {
        button.removeClass('button-assertive');
        button.removeClass('shake shake-sane');
      }, 500);
    }
  };
})

.controller('StatsCtrl', function($scope) {
  
})

.controller('DonateCtrl', function($scope) {

})

.controller('SettingsCtrl', function($scope, $rootScope, $ionicUser, $ionicPush) {
  // Handles incoming device tokens
  $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
    alert("Successfully registered token " + data.token);
    console.log('Ionic Push: Got token ', data.token, data.platform);
    // Do something useful with the token
    $scope.token = data.token;
  });

  // Identifies a user with the Ionic User service
  $scope.identifyUser = function() {
    console.log('Ionic User: Identifying with Ionic User service');

    var user = $ionicUser.get();
    if(!user.user_id) {
      // Set your user_id here, or generate a random one.
      user.user_id = $ionicUser.generateGUID();
    };

    // Add some metadata to your user object.
    angular.extend(user, {
      name: 'Ionitron',
      bio: 'I come from planet Ion'
    });

    // Identify your user with the Ionic User Service
    $ionicUser.identify(user).then(function(){
      $scope.identified = true;
      alert('Identified user ' + user.name + '\n ID ' + user.user_id);
    });
  };
  
  // Registers a device for push notifications and stores its token
  $scope.pushRegister = function() {
    console.log('Ionic Push: Registering user');

    // Register with the Ionic Push service.  All parameters are optional.
    $ionicPush.register({
      canShowAlert: true, //Can pushes show an alert on your screen?
      canSetBadge: true, //Can pushes update app icon badges?
      canPlaySound: true, //Can notifications play a sound?
      canRunActionsOnWake: true, //Can run actions outside the app,
      onNotification: function(notification) {
        // Handle new push notifications here
        // console.log(notification);
        return true;
      }
    });
  };
  
  $scope.settings = {
    gamify: true
  };
});
