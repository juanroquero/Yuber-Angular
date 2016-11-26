'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('HeaderCtrl', ['auth', '$rootScope', '$state', function (auth, $rootScope, $state) {
 		
  	var ctrl = this;

  	var user = auth.getUserObj();

   	$rootScope.administrador = (user !== undefined)

   	$rootScope.transporte = (user !== undefined)

   	$rootScope.onsite = (user !== undefined)

   ctrl.logout = function () {

     	var user = auth.getUserObj();


     	ctrl.sesion = (user !== undefined);

     	var datausuario = {
          						"correo": user.email,
          						"password": "basura",
          						"deviceId":"050505050"
          	}
      
     	auth.logout(datausuario).then(function(result){
     		auth.removeCookies();
     		$rootScope.sesion = false;
     		$state.go('initial.login');
     	}, function(data){
     	})
      
      //localStorage.removeItem("hash");
      //$location.path('/');

	};

  }]);