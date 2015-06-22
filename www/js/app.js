/*global angular*/
/*global cordova*/
/*global StatusBar*/
/*jslint browser: true, devel: true*/
/// <reference path="../../typings/tsd.d.ts" />

// BOTB - Books of the Bible

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'botb' is the name of this angular module (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'botb.services' is found in services.js
// 'botb.controllers' is found in controllers.js

angular.module('botb', [
    'ionic',
    'botb.controllers',
    'botb.services'
])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })

    .config(['$ionicConfigProvider', function ($ionicConfigProvider) {
        // force tabs on bottom (http://tinyurl.com/ionicbottomtabs)
        $ionicConfigProvider.tabs.position('bottom');
    }])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // each tab has its own nav history stack:

            .state('tab.quiz', {
                url: '/quiz',
                views: {
                    'tab-quiz': {
                        templateUrl: 'templates/tab-quiz.html',
                        controller: 'QuizCtrl'
                    }
                }
            })
            .state('tab.quiz-detail', {
                url: '/quiz/:quizId',
                views: {
                    'tab-quiz': {
                        templateUrl: 'templates/quiz-detail.html',
                        controller: 'QuizDetailCtrl'
                    }
                }
            })

            .state('tab.stats', {
                url: '/stats',
                views: {
                    'tab-stats': {
                        templateUrl: 'templates/tab-stats.html',
                        controller: 'StatsCtrl'
                    }
                }
            })

            .state('tab.donate', {
                url: '/donate',
                views: {
                    'tab-donate': {
                        templateUrl: 'templates/tab-donate.html',
                        controller: 'DonateCtrl'
                    }
                }
            })

            .state('tab.settings', {
                url: '/settings',
                views: {
                    'tab-settings': {
                        templateUrl: 'templates/tab-settings.html',
                        controller: 'SettingsCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/quiz');

    });
