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
  		ctrl.puntaje = result.data;
      console.log(result.data);

  	}, function(data){

  	});

  	administrador.topClientesPorCantidadInstanciasOnSite().then(function(result){
  		ctrl.instancias = result.data;
      console.log(result.data);

  	}, function(data){

  	});

  	ctrl.seleccionarFiltro = function(filtro){
  			if (filtro === "Por puntaje"){
  				ctrl.loading = true;
  				ctrl.lista = angular.copy(ctrl.puntaje);
          ctrl.series = _.map(ctrl.lista, function(elem){return elem.cliente.usuarioApellido + ", " + elem.cliente.usuarioNombre});
          ctrl.data = _.map(ctrl.lista, function(elem){return [elem.cliente.usuarioPromedioPuntaje]});
  				ctrl.loading = false;
  			}else if(filtro === "Por cantidad de instancias"){
  				ctrl.loading = true;
  				ctrl.lista = angular.copy(ctrl.instancias);
          ctrl.series = _.map(ctrl.lista, function(elem){return elem.cliente.usuarioApellido + ", " + elem.cliente.usuarioNombre});
          ctrl.data = _.map(ctrl.lista, function(elem){return [elem.cantServicios]});
  				ctrl.loading = false;
  			}
  	}

  }]);
