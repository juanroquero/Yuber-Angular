'use strict';

/**
 * @ngdoc service
 * @name yuberApp.usuario
 * @description
 * # usuario
 * Service in the yuberApp.
 */
angular.module('yuberApp')
  .factory('usuario', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var usuario = {};
  		usuario.admin = function () { 
  		
               return $http.get('http://172.16.113.205:8080/YuberWEB/rest/Admin/ObtenerAdministrador/maxi@gmail.com');
  			}

  		usuario.cliente = function (cliente) {

  			return $http({
					        url: 'http://172.16.113.212:8080/YuberWEB/rest/Cliente/RegistrarCliente',
					        method: "POST",
					        data: cliente,
					    })

  			//$http.post('http://172.16.113.205:8080/YuberWEB/rest/Cliente/RegistrarCliente', angular.toJson(cliente))
  		}

  		usuario.clienteVer = function () {

  			return $http.get("http://172.16.113.212:8080/YuberWEB/rest/Cliente/ObtenerClientes")
  		}

  			return usuario;
  }]);
