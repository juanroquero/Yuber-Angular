'use strict';

/**
 * @ngdoc service
 * @name yuberApp.servicio
 * @description
 * # servicio
 * Service in the yuberApp.
 */
angular.module('yuberApp')
  .factory('servicio', ['$http', function ($http) {

		var servicio = {};

    var URLserver = 'http://54.203.12.195:8080/YuberWEB/rest/';

		servicio.create = function(dataservicio){

          return $http({
              url: URLserver + 'Servicios/CrearServicio',
              method: "POST",
              data: dataservicio,
          });
    } 

    servicio.retrieve = function(id){

      return $http.get(URLserver + 'Servicios/ObtenerServicio/' + id);
    }

    servicio.edit = function(dataservicio){

          return $http({
              url: URLserver + 'Servicios/ModificarServicio',
              method: "POST",
              data: dataservicio,
          });
    } 

    servicio.delete = function(id){

      return $http.get(URLserver + 'Servicios/EliminarServicio/' + id);
    }

    servicio.list = function (vertical) {

       return $http.get(URLserver + 'Servicios/ObtenerServicios/' + vertical);
    }

		return servicio;

  }]);
