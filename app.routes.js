
// Declare app level module which depends on filters, and services
var application =
  angular.module('application', [
    // 'application.controllers',
    'ngAnimate',
    'ui.router',
    'ngMaterial',
    'ngAria',
  ])
    .config(function ($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('light-blue', {
          'default': '300'
        })
        .accentPalette('deep-orange', {
          'default': '500'
        });
    })
    .config(['$stateProvider', '$urlRouterProvider', '$logProvider',
      function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
          .state('application', {
            url: '/',

            views: {

              '@': {
                templateUrl: 'views/navBarLeft.html',
                controller: 'navLeftBarController as vm'
              }
            }
          })
          .state('application.helloWorld', {
            url: '/helloWorld',

            views: {

              'content@application': {
                templateUrl: 'views/helloWorld.html'
              }
            }
          });
  }]);