'use strict';

/**
 * @ngdoc function
 * @name yeoprojectApp.controller:ListaCtrl
 * @description
 * # ListaCtrl
 * Controller of the yeoprojectApp
 */
angular.module('yeoprojectApp')
  .controller('ListaCtrl', function ($scope, localStorageService) {

  	var tareasEnAlmacen = localStorageService.get('tareas');
	$scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];
	$scope.$watch('tareas',function  () {
		localStorageService.add('tareas',$scope.tareas.join('\n'));
	}, true);
	$scope.addTarea = function  () {
		$scope.tareas.push($scope.tarea);
		$scope.tarea = ''; //borramos contenido a la entrada de texto.
	};
	$scope.eliminarTarea = function (index) {
		$scope.tareas.splice(index,1);
	};
    
  });

