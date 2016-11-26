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

  	});

  	administrador.topProveedoresPorGananciaOnSite().then(function(result){
  		ctrl.ganancia = result.data;

  	}, function(data){

  	});

  	ctrl.seleccionarFiltro = function(filtro){
  			if (filtro === "Por puntaje"){
  				ctrl.loading = true;
  				ctrl.lista = angular.copy(ctrl.puntaje);
          ctrl.series = _.map(ctrl.lista, function(elem){return elem.usuarioApellido + ", " + elem.usuarioNombre});
          ctrl.data = _.map(ctrl.lista, function(elem){return [elem.usuarioPromedioPuntaje]});
  				ctrl.loading = false;
  			}else if (filtro == 'Por ganancia'){
  				ctrl.loading = true;
  				ctrl.lista = angular.copy(ctrl.ganancia);
          ctrl.series = _.map(ctrl.lista, function(elem){return elem.usuarioApellido + ", " + elem.usuarioNombre});
          ctrl.data = _.map(ctrl.lista, function(elem){return [elem.gananciaTotal]});
  				ctrl.loading = false;
  			}
  	}

  }]);
