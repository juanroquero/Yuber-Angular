'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:UsuariosactivosTransporteCtrl
 * @description
 * # UsuariosactivosTransporteCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('UsuariosactivosTransporteCtrl', ['administrador', function (administrador) {
  
  	var ctrl = this;


  	administrador.usuariosActivos("Transporte").then(function(result){
  		ctrl.usuarios = result.data;

  	}, function(data){

  	});

  }]);
