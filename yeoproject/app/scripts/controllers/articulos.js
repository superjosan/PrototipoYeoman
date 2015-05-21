'use strict';

/**
 * @ngdoc function
 * @name yeoprojectApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the yeoprojectApp
 */
angular.module('yeoprojectApp')
  .controller('ArticulosCtrl', function ($scope) {
    $scope.posts = [
      {
      	title:'Alimentos buenos para la salud',
      	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet augue est. Phasellus elementum viverra venenatis. Nullam a aliquet lacus. Proin mollis, eros a placerat dictum, purus ipsum congue nibh, vel blandit eros nisi aliquet lacus. Sed sed dictum nulla, vitae malesuada mauris. Proin sed viverra nisi. Donec sit amet nibh elementum, commodo mi vel, interdum erat. Vestibulum sed tincidunt lacus, eu iaculis nisl. In efficitur at augue eu posuere. '
      },
      {
      	title:'Debes comer vegetales',
      	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet augue est. Phasellus elementum viverra venenatis. Nullam a aliquet lacus. Proin mollis, eros a placerat dictum, purus ipsum congue nibh, vel blandit eros nisi aliquet lacus. Sed sed dictum nulla, vitae malesuada mauris. Proin sed viverra nisi. Donec sit amet nibh elementum, commodo mi vel, interdum erat. Vestibulum sed tincidunt lacus, eu iaculis nisl. In efficitur at augue eu posuere. '
      },
      {
      	title:'¡Límita tu cantidad de hidratos de carbono!',
      	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet augue est. Phasellus elementum viverra venenatis. Nullam a aliquet lacus. Proin mollis, eros a placerat dictum, purus ipsum congue nibh, vel blandit eros nisi aliquet lacus. Sed sed dictum nulla, vitae malesuada mauris. Proin sed viverra nisi. Donec sit amet nibh elementum, commodo mi vel, interdum erat. Vestibulum sed tincidunt lacus, eu iaculis nisl. In efficitur at augue eu posuere. '
      }
    ];
  });
