'use strict';

/**
 * @ngdoc overview
 * @name nodeJsExampleApp
 * @description
 * # nodeJsExampleApp
 *
 * Main module of the application.
 */
angular
  .module('nodeJsExampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
