'use strict';

/**
 * @ngdoc service
 * @name yuberApp.servicio
 * @description
 * # servicio
 * Service in the yuberApp.
 */
angular.module('yuberApp')
  .factory('servicio', [ 'Restangular', '$q', function (Restangular, $q) {

  		var servicio = {};
  		servicio.list = function () { 
  		//return Restangular.all().getList('servicios');
  		var lista = [{
						"ServicioId": "1",
						"ServicioNombre": "Plomero",
						"ServicioPrecioHora": "50",
						"ServicioTarifaBase": "30"
					}, {
						"ServicioId": "2",
						"ServicioNombre": "Pintor",
						"ServicioPrecioHora": "60",
						"ServicioTarifaBase": "45"
					}, {
						"ServicioId": "3",
						"ServicioNombre": "Mecanico",
						"ServicioPrecioHora": "70",
						"ServicioTarifaBase": "35"
					}]
			   var deferred = $q.defer();
               deferred.resolve(lista);
               //console.log(deferred.promise);
               return deferred.promise;
  			}

  			return servicio;

  }]);

/*angular.module('customersApp')
    .service('dataService', ['$http', function ($http) {

        var urlBase = '/api/customers';

        this.getCustomers = function () {
            return $http.get(urlBase);
        };

        this.getCustomer = function (id) {
            return $http.get(urlBase + '/' + id);
        };

        this.insertCustomer = function (cust) {
            return $http.post(urlBase, cust);
        };

        this.updateCustomer = function (cust) {
            return $http.put(urlBase + '/' + cust.ID, cust)
        };

        this.deleteCustomer = function (id) {
            return $http.delete(urlBase + '/' + id);
        };

        this.getOrders = function (id) {
            return $http.get(urlBase + '/' + id + '/orders');
        };
    }]);*/