'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
