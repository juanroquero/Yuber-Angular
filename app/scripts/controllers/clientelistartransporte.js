'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:ClientelistartransporteCtrl
 * @description
 * # ClientelistartransporteCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('ClientelistartransporteCtrl', ['administrador', function (administrador) {
  
  	var ctrl = this;

 	ctrl.loading = false;

  	ctrl.filters = ['Por puntaje', 'Por cantidad de instancias'];
   
  	administrador.topClientesPorPuntajeTransporte().then(function(result){
  		console.log(result);
  		ctrl.puntaje = result;

  	}, function(data){

  		console.log(data);
  	});

  	administrador.topClientesPorCantidadInstanciasTransporte().then(function(result){
  		console.log(result);
  		ctrl.instancias = result;

  	}, function(data){

  		console.log(data);
  	});

  	ctrl.seleccionarFiltro = function(filtro){
  			if (filtro === "Por puntaje"){
  				ctrl.loading = true;
  				ctrl.lista = angular.copy(ctrl.puntaje);
  				ctrl.loading = false;
  			}else if(filtro === "Por cantidad de instancias"){
  				ctrl.loading = true;
  				ctrl.lista = angular.copy(ctrl.instancias);
  				ctrl.loading = false;
  			}
  	}

  }]);
