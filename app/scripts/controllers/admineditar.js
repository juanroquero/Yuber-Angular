'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:AdmineditarCtrl
 * @description
 * # AdmineditarCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('AdmineditarCtrl', [ 'administrador','$stateParams', '$uibModal', function (administrador, $stateParams, $uibModal) {
  
 var ctrl = this;
  
  ctrl.selectedVertical;

  ctrl.loadingVerticales = false;

  ctrl.listaVerticales = [];

  ctrl.email = $stateParams.email;

  administrador.retrieve(ctrl.email).then(function(result){
    console.log(result);
   		ctrl.nombre = result.data.administradorNombre;
   		ctrl.password = result.data.administradorContraseña;
   		ctrl.listaVerticales = result.data.verticales;
      ctrl.verticalesPreEdit = angular.copy(result.data.verticales);

      //verticales que quedan
       administrador.verticales().then(function(result){
              ctrl.verticales = result.data;
         
              var tipoverticales = _.map(ctrl.listaVerticales, function(a){return a.verticalTipo})
              ctrl.verticales = _.reject(ctrl.verticales, function(a){
                    return _.contains(tipoverticales, a.verticalTipo); 
                  });

         }, function(data) {
              console.log(data);
          });

	},  function(data) {
        console.log(data);
	});


  ctrl.agregarVertical = function(vertical){

    if (vertical == undefined){
        return
    }else{
        ctrl.loadingVerticales = true;
        ctrl.listaVerticales.push(vertical);
        ctrl.verticales =  _.without(ctrl.verticales, vertical);
        ctrl.loadingVerticales = false;

    }
  }

  ctrl.quitarVertical = function(vertical){
      ctrl.loadingVerticales = true;
      ctrl.listaVerticales = _.without(ctrl.listaVerticales, vertical);
      ctrl.verticales.push(vertical);
      ctrl.loadingVerticales = false;
  } 

   ctrl.editar = function(nombre, email, password, listaVerticales){

        if (nombre == undefined){
            return
        }else if (email == undefined){
            return
        }else if (!email.includes('@')){
            return
        }else if (password == undefined){
            return
        }else{

            administrador.edit(nombre, email, password).then(function(result){
    	   		console.log('exito');
    	   }, function(data) {
            console.log('error');

            var tipoVerticalesPostEdit = _.map(ctrl.listaVerticales, function(a){return a.verticalTipo})
            var aEliminarVerticales = _.reject(ctrl.verticalesPreEdit, function(elem){
                                  return _.contains(tipoVerticalesPostEdit,elem.verticalTipo); 
                                });
            console.log(aEliminarVerticales);

            var tipoVerticalesPreEdit = _.map(ctrl.verticalesPreEdit, function(a){return a.verticalTipo})
            var aAgregarVerticales = _.reject(ctrl.listaVerticales, function(elem){
                                  return _.contains(tipoVerticalesPreEdit,elem.verticalTipo); 
                                });
            console.log(aAgregarVerticales);

            ctrl.addVerticalesAdmin(nombre, email, aAgregarVerticales);
            ctrl.removeVerticalesAdmin(nombre, email, aEliminarVerticales);

            ctrl.openModal(nombre, email);

        	});
        }
    }

    ctrl.addVerticalesAdmin = function(nombre, email, listaVerticales){

    angular.forEach(listaVerticales, function(value, key){         
        administrador.addVertical(email, value.verticalTipo).then(function(result){
           }, function(data) {
                console.log(data);
            });
        });

    }

    ctrl.removeVerticalesAdmin = function(nombre, email, listaVerticales){

    angular.forEach(listaVerticales, function(value, key){         
        administrador.removeVertical(email, value.verticalTipo).then(function(result){
           }, function(data) {
                console.log(data);
            });
        });

    }

    ctrl.openModal = function (nombre, email){

    var modalInstance = $uibModal.open({
      animation: true,
      size:'md',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/modaleditadmin.html',
      controller: 'ModalInstanceEditarAdminCtrl',
      controllerAs: 'ctrlmodaleditadmin',
      resolve: {
        nombre: function () {
          return nombre;
        },
        email: function () {
          return email;
        }
      }
    });

     modalInstance.result.then(function (nombre, email) {
        ctrl.loading = true;
    }, function () {
 
    });
  };

    ////////////////////////////MODAL/////////////////////////////////////

}]);

angular.module('yuberApp').controller('ModalInstanceEditarAdminCtrl', function ($uibModalInstance, nombre, email) {
  var $ctrl = this;
  $ctrl.nombre = nombre;
  $ctrl.email = email;

  $ctrl.ok = function () {
    $uibModalInstance.close();
  };

   $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

});
