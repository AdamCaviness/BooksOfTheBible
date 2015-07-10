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

    .controller('QuizDetailCtrl', function ($scope, $state, $stateParams, $timeout, Quizzes, Books) {
        'use strict';

        var allBooks, allBookCount;
        allBooks = Books.all();
        allBookCount = allBooks.length;
        $scope.currentBookIndex = -1;
        $scope.correctBookIndex = $scope.currentBookIndex + 1;
        $scope.books = Books.randomSelection($scope.correctBookIndex, 5);
        $scope.quiz = Quizzes.get($stateParams.quizId);

        $scope.onBookTap = function (event, book) {
            if ($scope.runningScore === undefined) {
                $scope.runningScore = 0;
            }
            if ($scope.prevBookName === undefined) {
                $scope.prevBookName = '';
            }
            var button = angular.element(event.target);

            if ($scope.correctBookIndex === book.id) {
                $scope.currentBookIndex = book.id;
                $scope.prevBookName = allBooks[$scope.currentBookIndex].name;
                $scope.correctBookIndex = $scope.currentBookIndex + 1;
                $scope.runningScore += 12;
                $scope.animationClass = '';
                $scope.animationClass = 'animated fadeIn';
                button.addClass('pass');
                $timeout(function () {
                    button.removeClass('pass');
                    if ($scope.correctBookIndex < allBookCount) {
                        $scope.books = Books.randomSelection($scope.correctBookIndex, 5);
                    } else {
                        $state.go('tab.stats');
                    }
                }, 100);
                $timeout(function () {
                    $scope.animationClass = '';
                }, 7000);
            } else {
                button.addClass('fail');
                $scope.runningScore -= 12;
                $timeout(function () {
                    button.removeClass('fail');
                }, 200);
            }
        };
    })

    .controller('StatsCtrl', function ($scope) {
        'use strict';
    })

    .controller('UpgradeCtrl', function ($scope) {
        'use strict';
    })

    .controller('SettingsCtrl', function ($scope, $rootScope) {
        'use strict';
        $scope.settings = {
            gamify: true
        };
    });
