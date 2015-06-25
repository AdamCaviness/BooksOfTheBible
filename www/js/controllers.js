/*global angular*/
/*jslint browser: true, devel: true, plusplus: true*/
/// <reference path="../../typings/tsd.d.ts" />

angular.module('botb.controllers', [])

    .controller('QuizCtrl', function ($scope, Quizzes) {
        'use strict';
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.quizzes = Quizzes.all();
        $scope.remove = function (quiz) {
            Quizzes.remove(quiz);
        };
    })

    .controller('QuizDetailCtrl', function ($scope, $stateParams, $timeout, Quizzes, Books) {
        'use strict';
        if ($scope.score === undefined) {
            $scope.score = 0;
        }

        $scope.bookActivated = false;
        $scope.currentBookIndex = -1;
        $scope.correctBookIndex = $scope.currentBookIndex + 1;
        $scope.books = Books.randomSelection($scope.correctBookIndex, 5);
        $scope.quiz = Quizzes.get($stateParams.quizId);

        $scope.onBookTap = function (event, book) {
            console.log('Book tapped: ' + book.name);
            console.log('Book tapped: id = ' + book.id);
            var button = angular.element(event.target);
            console.log('button is ' + button);

            if ($scope.correctBookIndex === book.id) {
                $scope.currentBookIndex = book.id;
                $scope.correctBookIndex = $scope.currentBookIndex + 1;
                button.removeClass('fail');
                button.addClass('pass');
                $scope.score += 1;
                $timeout(function () {
                    button.removeClass('pass');
                    $scope.books = Books.randomSelection($scope.correctBookIndex, 5);
                }, 100);
            } else {
                button.addClass('fail');
                $timeout(function () {
                    button.removeClass('fail');
                }, 200);
            }
        };
    })

    .controller('StatsCtrl', function ($scope) {
        'use strict';
    })

    .controller('DonateCtrl', function ($scope) {
        'use strict';
    })

    .controller('SettingsCtrl', function ($scope, $rootScope) {
        'use strict';
        $scope.settings = {
            gamify: true
        };
    });
