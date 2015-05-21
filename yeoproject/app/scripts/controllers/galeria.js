'use strict';

/**
 * @ngdoc function
 * @name yeoprojectApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the yeoprojectApp
 */
angular.module('yeoprojectApp')
  .controller('GaleriaCtrl', function ($scope) {
    var pictures =$scope.pictures=[];

    var baseURL='http://lorempixel.com/300/180/';

    var titles=['Comida Sana','Salud y Trabajo','Vida en la Ciudad',
    'Mantente activo','Cuida tu aspecto','¡Vida nocturna!'];
    var keywords=['food','business','city','sports','fashion',
    'nightfile'];
    var dummyText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet augue est. Phasellus elementum viverra venenatis. Nullam a aliquet lacus. Proin mollis, eros a placerat dictum, purus ipsum congue nibh, vel blandit eros nisi aliquet lacus. Sed sed dictum nulla, vitae malesuada mauris. Proin sed viverra nisi. Donec sit amet nibh elementum, commodo mi vel, interdum erat. Vestibulum sed tincidunt lacus, eu iaculis nisl. In efficitur at augue eu posuere. ';
    $scope.addPics=function (i) {
    	pictures.push({
    		url:baseURL+keywords[i],
    		title:titles[i],
    		summary:dummyText
    	});
    };
    for (var i = 0; i < 5; i++) {
    	$scope.addPics(i);
    }
    $scope.rate = 0;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver= function (value) {
        $scope.overStar = value;
        $scope.percent = 100*(value/$scope.max);
    };

  });
