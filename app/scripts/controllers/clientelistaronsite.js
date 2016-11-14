'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:ClientelistaronsiteCtrl
 * @description
 * # ClientelistaronsiteCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('ClientelistaronsiteCtrl', ['administrador', function (administrador) {
   
  	var ctrl = this;

 	ctrl.loading = false;

  	ctrl.filters = ['Por puntaje', 'Por cantidad de instancias'];
   
  	administrador.topClientesPorPuntajeOnSite().then(function(result){
  		ctrl.puntaje = result;

  	}, function(data){

  	});

  	administrador.topClientesPorCantidadInstanciasOnSite().then(function(result){
  		ctrl.instancias = result;

  	}, function(data){

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
