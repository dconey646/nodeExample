'use strict';

/**
 * @ngdoc function
 * @name nodeJsExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeJsExampleApp
 */
angular.module('nodeJsExampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
