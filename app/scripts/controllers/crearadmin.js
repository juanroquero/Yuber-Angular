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

    administrador.verticales().then(function(result){
                ctrl.verticales = result.data;
                console.log(ctrl.verticales);
           }, function(data) {
                console.log(data);
            });
    
    ctrl.selectedVertical;

    ctrl.loadingVerticales = false;

    ctrl.listaVerticales = [];

    ctrl.agregarVertical = function(vertical){
        console.log(vertical);
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

        console.log(ctrl.listaVerticales);

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

    	   }, function(data) {
        
            if (_.isEmpty(listaVerticales)) {
                ctrl.openModal(nombre, email);
            }else{
                ctrl.addVerticalesAdmin(nombre, email, listaVerticales);
            }
            
                console.log(data);
        	});
        }
    }
    
    ctrl.addVerticalesAdmin = function(nombre, email, listaVerticales){

    angular.forEach(listaVerticales, function(value, key){         
        console.log(email);
        console.log(value.verticalTipo);
        administrador.addVertical(email, value.verticalTipo).then(function(result){
           }, function(data) {
                console.log(data);
            });
        });
        ctrl.openModal(nombre, email);

    }
   

    ctrl.openModal = function (nombre, email){

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
        }
      }
    });

    modalInstance.result.then(function (nombre, email) {
        ctrl.loading = true;
    }, function () {
 
    });
  };
  }]);

angular.module('yuberApp').controller('ModalInstanceAgregarAdminCtrl', function ($uibModalInstance, nombre, email) {
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