'use strict';

/**
 * @ngdoc function
 * @name yeoprojectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeoprojectApp
 */
angular.module('yeoprojectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
