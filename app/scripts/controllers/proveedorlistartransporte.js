'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:ProveedorlistartransporteCtrl
 * @description
 * # ProveedorlistartransporteCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('ProveedorlistartransporteCtrl', ['administrador', function (administrador) {

  	var ctrl = this;

 	ctrl.loading = false;

  	ctrl.filters = ['Por puntaje', 'Por ganancia'];
   
  	administrador.topProveedoresPorPuntajeTransporte().then(function(result){
  		console.log(result);
  		ctrl.puntaje = result.data;

  	}, function(data){

  		console.log(data);
  	});

  	administrador.topProveedoresPorGananciaTransporte().then(function(result){
  		console.log(result);
  		ctrl.ganancia = result.data;

  	}, function(data){

  		console.log(data);
  	});

  	ctrl.seleccionarFiltro = function(filtro){
  			if (filtro === "Por puntaje"){
  				ctrl.loading = true;
  				ctrl.lista = angular.copy(ctrl.puntaje);
  				ctrl.loading = false;
  			}else if (filtro == 'Por ganancia'){
  				ctrl.loading = true;
  				ctrl.lista = angular.copy(ctrl.ganancia);
  				ctrl.loading = false;
  			}
  	}

  }]);
