'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:ServiciolistCtrl
 * @description
 * # ServiciolistCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('ServiciolistCtrl', [ 'servicio' , 'usuario', '$scope', function (servicio, usuario, $scope) {

  	$scope.algo = "algo";

   servicio.list().then(function(result){
                $scope.lista = result;
            });
   //console.log($scope.lista);

   /*usuario.admin().then(function(result){
   		console.log(result);
   }, console.log("error"));*/

   $scope.boton = function(){
   var data = {
                  "usuarioDireccion":"callefalsa123",
                  "usuarioContraseña":"123",
                  "usuarioTelefono":"123456789",
                  "usuarioApellido":"La pantera",
                  "usuarioPromedioPuntaje":0,
                  "usuarioCorreo":"sologet@gmail.com",
                  "usuarioNombre":"Pocho",
                  "usuarioCiudad":"Montevideo",
                  "estado":"OK"
              };

      console.log("boton");
	   usuario.cliente(data).then(function(result){
	   		console.log(result);
	   }, function(data) {
        console.log(data);
    })

    }

    $scope.botonVer = function(){

     usuario.clienteVer().then(function(result){
        console.log(result);
     }, function(data) {
        console.log(data);
     })

  }

}]);
