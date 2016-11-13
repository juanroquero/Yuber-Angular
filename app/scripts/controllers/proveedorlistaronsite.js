'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:ProveedorlistaronsiteCtrl
 * @description
 * # ProveedorlistaronsiteCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('ProveedorlistaronsiteCtrl',['administrador', function (administrador) {

  	var ctrl = this;

 	ctrl.loading = false;

  	ctrl.filters = ['Por puntaje', 'Por ganancia'];
   
  	administrador.topProveedoresPorPuntajeOnSite().then(function(result){
  		ctrl.puntaje = result.data;

  	}, function(data){

  		console.log(data);
  	});

  	administrador.topProveedoresPorGananciaOnSite().then(function(result){
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
