'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:CrearadminCtrl
 * @description
 * # CrearadminCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('CrearadminCtrl', [ 'administrador', '$uibModal', function (administrador, $uibModal) {

    var ctrl = this;

    ctrl.huboerror = false;

    administrador.verticales().then(function(result){
                ctrl.verticales = result.data;
           }, function(data) {
            });
    
    ctrl.selectedVertical;

    ctrl.loadingVerticales = false;

    ctrl.listaVerticales = [];

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
    
    ctrl.agregar = function(nombre, email, password, listaVerticales){


        if (nombre == undefined){
            return
        }else if (email == undefined){
            return
        }else if (!email.includes('@')){
            return
        }else if (password == undefined){
            return
        }else{

            administrador.create(nombre, email, password).then(function(result){
              

              if(result.data.EXITO){
                  if (_.isEmpty(listaVerticales)) {
                      ctrl.openModal(nombre, email);
                  }else{
                      ctrl.addVerticalesAdmin(nombre, email, listaVerticales);
                  }
              }else{
                ctrl.huboerror = true;
                ctrl.error = result.data.ERROR;
                ctrl.openModal(nombre, email, ctrl.huboerror, ctrl.error);
              }
            
    	   }, function(data) {
        
        	});
        }
    }
    
    ctrl.addVerticalesAdmin = function(nombre, email, listaVerticales){

    angular.forEach(listaVerticales, function(value, key){         

        administrador.addVertical(email, value.verticalTipo).then(function(result){
         }, function(data) {
            });
        });
        ctrl.openModal(nombre, email, ctrl.huboerror, ctrl.error);

    }
   

    ctrl.openModal = function (nombre, email, huboerror, error){

    var modalInstance = $uibModal.open({
      animation: true,
      size:'md',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/modalcreateadmin.html',
      controller: 'ModalInstanceAgregarAdminCtrl',
      controllerAs: 'ctrlmodalAgregarAdmin',
      resolve: {
        nombre: function () {
            return nombre;
        },
        email: function () {
          return email;
        },
        huboerror: function () {
            return huboerror;
        },
        error: function () {
          return error;
        }
      }
    });

    modalInstance.result.then(function (nombre, email, huboerror, error) {
        ctrl.loading = true;
    }, function () {
 
    });
  };
  }]);

angular.module('yuberApp').controller('ModalInstanceAgregarAdminCtrl', function ($uibModalInstance, $state, nombre, email, huboerror, error) {
  var $ctrl = this;
  $ctrl.nombre = nombre;
  $ctrl.email = email;
  $ctrl.huboerror = huboerror;
  $ctrl.error = error;

  $ctrl.ok = function () {
    $uibModalInstance.close();
    $state.go('initial.dashboard.administradores.listar');  
  };

   $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

});