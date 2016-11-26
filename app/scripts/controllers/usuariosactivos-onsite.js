'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:UsuariosactivosOnsiteCtrl
 * @description
 * # UsuariosactivosOnsiteCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('UsuariosactivosOnsiteCtrl', ['administrador', function (administrador) {
  
  	var ctrl = this;


  	administrador.usuariosActivos("On-Site").then(function(result){
  		ctrl.usuarios = result.data;

  	}, function(data){

  	});

  }]);
