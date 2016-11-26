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
		ctrl.puntaje = result.data;

	}, function(data){

	});

	administrador.topProveedoresPorGananciaTransporte().then(function(result){
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

  ctrl.labels = ["Proveedores"];

 /* ctrl.labels = ["Proveedores"];
  ctrl.series = ['Auto', 'Limusina', 'Helicoptero', 'Moto', 'Camioneta'];
  ctrl.data = [
    [65, 59, 80, 81, 56],
    [28, 48, 40, 19, 86],
    [44, 34, 32, 38, 66],
    [55, 43, 58, 56, 67],
    [20, 23, 68, 78, 90]
  ];*/


}]);
