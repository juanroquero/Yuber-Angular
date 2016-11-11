'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('LoginCtrl', [ 'auth' , 'administrador', '$state', '$rootScope', function (auth, administrador, $state, $rootScope) {
  
        // $scope.hashredirect = function(url){
        //     $location.path("/"+localStorage.getItem("hash")+"/"+url);
        // };

        var ctrl = this;
        ctrl.error = false;

        ctrl.login = function(email, password){


      	if (email == undefined){
            return
        }else if (!email.includes('@')){
            return
        }else if (password == undefined){
            return
        }else{

        	var datausuario = {
        						"correo": email,
        						"password": password,
        						"deviceId":"050505050"
        	}

            auth.login(datausuario).then(function(result){

              if(result.data){
                var accessToken = "token prueba";
                var userObj = datausuario
                console.log(result);
                auth.setAccessToken(accessToken);
                auth.setUserObj(userObj);
                $rootScope.sesion = true;
                ctrl.error = false;

                /////////////VER LAS VERTICALES PARA VER A DONDE IR, SI NO TIENE NADA IR A UNA PAGINA NUEVA./////////////
                ////////////ANTES VER SI ES SUPERADMIN IR A ADMINISTRADOR, HACER LO DE ROOTSCOPE/////////////////////////

                administrador.retrieve(datausuario.correo).then(function(admin){
			      	console.log(admin);
			   		ctrl.nombre = admin.data.administradorNombre;
			   		ctrl.correo = admin.data.administradorCorreo;
			   		ctrl.password = admin.data.administradorContraseña;
			   	 	ctrl.verticales = admin.data.verticales;

			   	 	var verticalesTipo = _.map(ctrl.verticales, function(elem){return elem.verticalTipo});

			   	 	$rootScope.superAdmin = (ctrl.correo == 'SuperAdmin@yuber.com');
			   	 	$rootScope.transporte = ('Transporte' == _.find(verticalesTipo, function(elem){return elem == "Transporte"}));
			   	 	$rootScope.onsite = ('On-Site' == _.find(verticalesTipo, function(elem){return elem == "On-Site"})); 

			   	 	if ($rootScope.superAdmin){
			   	 		$state.go('initial.dashboard.administradores.listar');
			   	 	} else if ($rootScope.transporte){
			   	 		$state.go('initial.dashboard.transporte.servicios.listar');
			   	 	} else if ($rootScope.onsite){
			   	 		$state.go('initial.dashboard.on-site.servicios.listar');
			   	 	} else {
			   	 		$state.go('initial.provicional');
			   	 	}

  
		         }, function(data) {
		              console.log(data);
		          });

                $state.go('initial.dashboard.on-site.servicios.listar')
                /*localStorage.setItem('mensajes', JSON.stringify([]));
                alertify.success("Bienvenido a SapO " + userObj.nombre + "!");
                $scope.hash = $scope.hashcodel(userObj.email);
                localStorage.setItem("hash",$scope.hash);
                $location.path('/'+$scope.hash+'/home');*/
            } else {
            	ctrl.error = true;
            }

    	   }, function(data) {
        
                console.log(data);
        	});
        }
    }



        ctrl.isLoggedIn = function () {
            return (auth.getUserObj() != undefined) && (auth.getUserObj() != null);
        };


        /*$scope.loginComun = function () {
            console.log('login..');
            var e = $scope.email;
            var p = $scope.password;
            loginRestFactory.loginComun(e, p).success(function (response) {
                if ((response != undefined) && (response != null) && (response !== "")) {
                    console.log('todo ok');
                    var accessToken = "token prueba";
                    var userObj = response;
                    console.log(response);
                    authFactory.setAccessToken(accessToken);
                    authFactory.setFacebook(false);
                    authFactory.setUserObj(userObj);
                    localStorage.setItem('mensajes', JSON.stringify([]));
                    alertify.success("Bienvenido a SapO " + userObj.nombre + "!");
                    $scope.hash = $scope.hashcodel(userObj.email);
                    localStorage.setItem("hash",$scope.hash);
                    $location.path('/'+$scope.hash+'/home');

                } else {
                    alertify.error("Los datos no coinciden, Intentelo de nuevo por favor");
                    $location.path('/');
                }
            }).error(function (response) {
                alertify.error("Lo sentimos, se perdio la conexion con el servidor");
                $location.path('/');
            });
        };
*/

    }]);
