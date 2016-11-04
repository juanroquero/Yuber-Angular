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

  	var administrador = {};


  	administrador.create = function(nombre, email, pass){

  		return $http.post('http://54.191.204.230:8080/YuberWEB/rest/Admin/CrearAdministrador?correo=' + email + '&contrasena=' + pass + '&nombre=' + nombre);
  	}

  	administrador.delete = function(email){

  		return $http.get('http://54.191.204.230:8080/YuberWEB/rest/Admin/EliminarAdministrador/' + email);
  	}

  	administrador.list = function(){

  		return $http.get('http://54.191.204.230:8080/YuberWEB/rest/Admin/ObtenerAdministradores');
  	}

  	administrador.retrieve = function(email){
  		console.log('service');
  		return $http.get('http://54.191.204.230:8080/YuberWEB/rest/Admin/ObtenerAdministrador/' + email);
  	}

  	administrador.edit = function(nombre, email, pass){

  		return $http.post('http://54.191.204.230:8080/YuberWEB/rest/Admin/ModificarAdministrador?correo='+ email + '&contrasena=' + pass +'&nombre=' + nombre);
  	}

  	administrador.verticales = function(){

		return $http.get('http://54.191.204.230:8080/YuberWEB/rest/Admin/ListarVerticales');

  	}

  	//////////////////////////CAMBIAR SUPERADMIN POR MAIL ACTUAL DE LA SESION///////////////////////////////

  	administrador.addVertical = function(email, nombreVertical){

  		return $http.get('http://54.191.204.230:8080/YuberWEB/rest/Admin/AsignarVertical/SuperAdmin@gmail.com,' + email + ',' + nombreVertical);
  	}

  	administrador.removeVertical = function(email, nombreVertical){

  		console.log(email);
  		console.log(nombreVertical);
  		return $http.get('http://54.191.204.230:8080/YuberWEB/rest/Admin/DenegarVertical/SuperAdmin@gmail.com,' + email + ',' + nombreVertical);
  	}

  	return administrador;

  }]);
