'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:ServiciolisttransporteCtrl
 * @description
 * # ServiciolisttransporteCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('ServiciolisttransporteCtrl', [ 'servicio', '$uibModal', function (servicio, $uibModal) {
      	
  	var ctrl = this;

  	ctrl.loading = false;

  	servicio.list('Transporte').then(function(result){
	   		ctrl.lista = result.data;
	   	}, function(data) {
    	})

    ctrl.openModal = function (id, nombre, tarifabase, precioporhora, precioporkm){

  	var modalInstance = $uibModal.open({
      animation: true,
      size:'md',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/modal-delete-servicio-transporte.html',
      controller: 'ModalInstanceDeleteServiceTransporteCtrl',
      controllerAs: 'ctrlmodaldeleteservice',
      resolve: {
      	id: function () {
          return id;
        },
      	nombre: function () {
          return nombre;
        },
        tarifabase: function () {
          return tarifabase;
        },
        precioporhora: function () {
          return precioporhora;
        },
        precioporkm: function () {
          return precioporkm;
        }
      }
    });

    modalInstance.result.then(function (id, nombre, tarifabase, precioporhora, precioporkm) {
    	ctrl.loading = true;
    	servicio.delete(id).then(function(result){
    		
    		servicio.list('Transporte').then(function(result){
	   		ctrl.lista = result.data;
	   		ctrl.loading = false;
		   	}, function(data) {
	        ctrl.loading = false;
	    	})

	   	}, function(error) {
    	})

    }, function () {
 
    });
  };

    ////////////////////////////MODAL/////////////////////////////////////

}]);

angular.module('yuberApp').controller('ModalInstanceDeleteServiceTransporteCtrl', function ($uibModalInstance, id, nombre, tarifabase, precioporhora, precioporkm) {
  var $ctrl = this;
  $ctrl.id = id;
  $ctrl.nombre = nombre;
  $ctrl.tarifabase = tarifabase;
  $ctrl.precioporhora = precioporhora;
  $ctrl.precioporkm = precioporkm;

  $ctrl.ok = function (id) {
    $uibModalInstance.close(id);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});