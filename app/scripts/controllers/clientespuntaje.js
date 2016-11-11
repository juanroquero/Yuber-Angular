'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:ClientespuntajeCtrl
 * @description
 * # ClientespuntajeCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('ClientespuntajeCtrl', [ 'administrador', function (administrador) {
    	
  		var limit = 10;

    	administrador.topclientesporpuntaje(limit).then(function(result){
    		console.log(result);

    	}, function(data){

    	})
  }]);
