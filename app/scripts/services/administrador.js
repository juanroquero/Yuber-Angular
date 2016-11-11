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

  	var URLserver = 'http://54.213.51.6:8080/YuberWEB/rest/';

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

  	//////////////////////////CAMBIAR SUPERADMIN POR MAIL ACTUAL DE LA SESION///////////////////////////////

  	administrador.addVertical = function(email, nombreVertical){

  		return $http.get(URLserver + 'Admin/AsignarVertical/SuperAdmin@yuber.com,' + email + ',' + nombreVertical);
  	}

  	administrador.removeVertical = function(email, nombreVertical){

  		return $http.get(URLserver + 'Admin/DenegarVertical/SuperAdmin@yuber.com,' + email + ',' + nombreVertical);
  	}

    ////////////////////////////////QUERIES/////////////////////////////

    //--------------------------CLIENTES---------------------------------

    administrador.topClientesPorCantidadInstanciasTransporte = function(limit){

      var list = [{clienteEmail:'juan@juan', clienteNombre: 'Juan', clientePuntaje:'3.3', clienteInstancias:'50'}, 
                  {clienteEmail:'clientun@client', clienteNombre: 'Giuseppe', clientePuntaje:'4.3', clienteInstancias:'10'}]
      var defer;
      defer = $q.defer();
      defer.resolve(list);
      return defer.promise;

      //return $http.get(URLserver + 'Admin/TopClientesPorPuntaje/' + limit);
    }

    administrador.topClientesPorCantidadInstanciasOnSite = function(limit){

      var list = [{clienteEmail:'juan@juan', clienteNombre: 'Juan', clientePuntaje:'3.3', clienteInstancias:'50'}, 
                  {clienteEmail:'clientun@client', clienteNombre: 'Giuseppe', clientePuntaje:'4.3', clienteInstancias:'10'}]
      var defer;
      defer = $q.defer();
      defer.resolve(list);
      return defer.promise;

      //return $http.get(URLserver + 'Admin/TopClientesPorPuntaje/' + limit);
    }

    administrador.topClientesPorPuntajeTransporte = function(limit){

      var list = [{clienteEmail:'clientun@client', clienteNombre: 'Giuseppe', clientePuntaje:'4.3', clienteInstancias:'10'},
                    {clienteEmail:'juan@juan', clienteNombre: 'Juan', clientePuntaje:'3.3', clienteInstancias:'50'}]
      var defer;
      defer = $q.defer();
      defer.resolve(list);
      return defer.promise;

      //return $http.get(URLserver + 'Admin/TopClientesPorPuntaje/' + limit);
    }

    administrador.topClientesPorPuntajeOnSite = function(limit){

      var list = [{clienteEmail:'clientun@client', clienteNombre: 'Giuseppe', clientePuntaje:'4.3', clienteInstancias:'10'},
                    {clienteEmail:'juan@juan', clienteNombre: 'Juan', clientePuntaje:'3.3', clienteInstancias:'50'}]
      var defer;
      defer = $q.defer();
      defer.resolve(list);
      return defer.promise;

      //return $http.get(URLserver + 'Admin/TopClientesPorPuntaje/' + limit);
    }

    //---------------------PROVEEDORES-----------------------------------

    administrador.topProveedoresPorPuntajeTransporte = function(limit){

      var list = [{proveedorEmail:'pobreza@pobre', proveedorNombre: 'Abdul', proveedorPuntaje:'4.3', proveedorGanancia:'100'},
                    {proveedorEmail:'juan@juan', proveedorNombre: 'Juan', proveedorPuntaje:'3.3', proveedorGanancia:'500'}]
      var defer;
      defer = $q.defer();
      defer.resolve(list);
      return defer.promise;
      //return $http.get(URLserver + 'Admin/TopProveedoresPorPuntajes/' + limit);
    }

    administrador.topProveedoresPorPuntajeOnSite = function(limit){

      var list = [{proveedorEmail:'pobreza@pobre', proveedorNombre: 'Abdul', proveedorPuntaje:'4.3', proveedorGanancia:'100'},
                    {proveedorEmail:'juan@juan', proveedorNombre: 'Juan', proveedorPuntaje:'3.3', proveedorGanancia:'500'}]
      var defer;
      defer = $q.defer();
      defer.resolve(list);
      return defer.promise;

      //return $http.get(URLserver + 'Admin/TopProveedoresPorPuntajes/' + limit);
    }

    administrador.topProveedoresPorGananciaTransporte = function(limit){

      var list = [{proveedorEmail:'juan@juan', proveedorNombre: 'Juan', proveedorPuntaje:'3.3', proveedorGanancia:'500'},
                   {proveedorEmail:'pobreza@pobre', proveedorNombre: 'Abdul', proveedorPuntaje:'4.3', proveedorGanancia:'100'}]
      var defer;
      defer = $q.defer();
      defer.resolve(list);
      return defer.promise;

      //return $http.get(URLserver + 'Admin/TopProveedoresPorGanancia/' + limit);
    }

    administrador.topProveedoresPorGananciaOnSite = function(limit){

     var list = [{proveedorEmail:'juan@juan', proveedorNombre: 'Juan', proveedorPuntaje:'3.3', proveedorGanancia:'500'},
                   {proveedorEmail:'pobreza@pobre', proveedorNombre: 'Abdul', proveedorPuntaje:'4.3', proveedorGanancia:'100'}]
      var defer;
      defer = $q.defer();
      defer.resolve(list);
      return defer.promise;

      //return $http.get(URLserver + 'Admin/TopProveedoresPorGanancia/' + limit);
    }

  	return administrador;

  }]);
