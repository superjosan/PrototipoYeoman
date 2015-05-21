'use strict';

angular.module('yeoprojectApp')
  .controller('MainCtrl', function ($scope) {
  	var baseURL='http://lorempixel.com/960/450';
  	$scope.setInterval=5000; //tasa de refresco 5s

  	$scope.slides= [
  	{
  		title:'Aprende a mantenerte en forma',
  		image:baseURL+ '/city/',
  		text:'¡Práctica algún deporte todos los días!'
  	},
  	{
  		title:'Buena alimentación',
  		image:baseURL+'/food/',
  		text:'¡La importacia de frutas y verduras!'
  	},
  	{
  		title:'En contacto con la naturaleza',
  		image:baseURL+'/nature/',
  		text:'¡Mantente en armonía con la naturaleza!'
  	}
  	];

    //Modelo para los tres bloques de contenidos
    var baseURLs='http://lorempixel.com/200/200/';
    $scope.contenido=[
    {
      img:baseURLs+'people',
      title:'Sobre Nosotros',
      sumario:'Somos una empresa comprometida con la vida sana'
    },
    {
      img:baseURLs+'business',
      title:'Nuestros Servicios',
      sumario:'Ofrecemos asesoría profesional para mantenerse sano.'
    },
    {
      img:baseURLs+'transport',
      title:'Contáctanos',
      sumario:'#333, Buena Vida Online, Plaza Central, Durance, Zip-432167'
    }
    ];

  });


/**

 * @ngdoc function
 * @name yeoprojectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeoprojectApp

angular.module('yeoprojectApp')
  .controller('MainCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
*/