'use strict';

/**
 * @ngdoc service
 * @name yuberApp.administrador
 * @description
 * # administrador
 * Service in the yuberApp.
 */
angular.module('yuberApp')
  .factory('administrador', ['$http', '$q', function ($http, $q) {

  	var URLserver = 'http://54.203.12.195:8080/YuberWEB/rest/';

    var administrador = {};

    ///////////////////////////CRUD///////////////////////////////////

  	administrador.create = function(nombre, email, pass){

  		return $http.post(URLserver + 'Admin/CrearAdministrador?correo=' + email + '&contrasena=' + pass + '&nombre=' + nombre);
  	}

    administrador.retrieve = function(email){

      return $http.get(URLserver + 'Admin/ObtenerAdministrador/' + email);
    }

    administrador.edit = function(nombre, email, pass){

      return $http.post(URLserver + 'Admin/ModificarAdministrador?correo='+ email + '&contrasena=' + pass +'&nombre=' + nombre);
    }

  	administrador.delete = function(email){

  		return $http.get(URLserver + 'Admin/EliminarAdministrador/' + email);
  	}

  	administrador.list = function(){

  		return $http.get(URLserver + 'Admin/ObtenerAdministradores');
  	}

  	///////////////////////////VERTICALES//////////////////////////////////////////

  	administrador.verticales = function(){

		return $http.get(URLserver + 'Admin/ListarVerticales');

  	}

  	administrador.addVertical = function(email, nombreVertical){

  		return $http.get(URLserver + 'Admin/AsignarVertical/SuperAdmin@yuber.com,' + email + ',' + nombreVertical);
  	}

  	administrador.removeVertical = function(email, nombreVertical){

  		return $http.get(URLserver + 'Admin/DenegarVertical/SuperAdmin@yuber.com,' + email + ',' + nombreVertical);
  	}

    ////////////////////////////////QUERIES/////////////////////////////

    //--------------------------CLIENTES---------------------------------

    administrador.topClientesPorCantidadInstanciasTransporte = function(limit){

      return $http.get(URLserver + 'Admin/TopClientesPorCantServicios/' + '100,Transporte');
    }

    administrador.topClientesPorCantidadInstanciasOnSite = function(limit){

      return $http.get(URLserver + 'Admin/TopClientesPorCantServicios/' + '100,On-Site');
    }

    administrador.topClientesPorPuntajeTransporte = function(limit){

      return $http.get(URLserver + 'Admin/TopClientesPorPuntaje/' + '100,Transporte');
    }

    administrador.topClientesPorPuntajeOnSite = function(limit){

      return $http.get(URLserver + 'Admin/TopClientesPorPuntaje/' + '100,On-Site');
    }

    administrador.usuariosActivos = function(vertical){

      return $http.get(URLserver + 'Admin/ObtenerClientesActivos/' + vertical);
    }

    //---------------------PROVEEDORES-----------------------------------

    administrador.topProveedoresPorPuntajeTransporte = function(limit){
      
      return $http.get(URLserver + 'Admin/TopProveedoresPorPuntajes/' + '100,' + 'Transporte');
    }

    administrador.topProveedoresPorPuntajeOnSite = function(limit){

      return $http.get(URLserver + 'Admin/TopProveedoresPorPuntajes/' + '100,' + 'On-Site');
    }

    administrador.topProveedoresPorGananciaTransporte = function(limit){

      return $http.get(URLserver + 'Admin/TopProveedoresPorGanancia/' + '100,' + 'Transporte');
    }

    administrador.topProveedoresPorGananciaOnSite = function(limit){

      return $http.get(URLserver + 'Admin/TopProveedoresPorGanancia/' + '100,' + 'On-Site');
    }

    //---------------------VERTICALES-----------------------------------

    administrador.gananciaMensual = function(vertical, mes){

      return $http.get(URLserver + 'Admin/ObtenerGananciaMensual/' + vertical + ',' + mes);
    }

  	return administrador;

  }]);
