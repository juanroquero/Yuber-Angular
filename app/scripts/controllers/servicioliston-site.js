'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:ServiciolistonSiteCtrl
 * @description
 * # ServiciolistonSiteCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('ServiciolistonSiteCtrl', [ 'servicio', '$uibModal', function (servicio, $uibModal) {

  	var ctrl = this;

  	ctrl.loading = false;

  	servicio.list('On-Site').then(function(result){
	   		console.log(result);
	   		ctrl.lista = result.data;
	   	}, function(data) {
        console.log(data);
    	})

    ctrl.openModal = function (id, nombre, tarifabase, precioporhora){

  	var modalInstance = $uibModal.open({
      animation: true,
      size:'md',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/modal-delete-servicio-on-site.html',
      controller: 'ModalInstanceDeleteServiceOnSiteCtrl',
      controllerAs: 'ctrlmodaldeleteserviceon-site',
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
      }
    });

    modalInstance.result.then(function (id, nombre, tarifabase, precioporhora, precioporkm) {
    	ctrl.loading = true;
    	servicio.delete(id).then(function(result){
    		
    		servicio.list('On-Site').then(function(result){
	   		console.log(result);
	   		ctrl.lista = result.data;
	   		ctrl.loading = false;
		   	}, function(data) {
	        console.log(data);
	        ctrl.loading = false;
	    	})

	   	}, function(error) {
	   		console.log(error);
    	})

    }, function () {
 
    });
  };

    ////////////////////////////MODAL/////////////////////////////////////

}]);

angular.module('yuberApp').controller('ModalInstanceDeleteServiceOnSiteCtrl', function ($uibModalInstance, id, nombre, tarifabase, precioporhora) {
  var $ctrl = this;
  $ctrl.id = id;
  $ctrl.nombre = nombre;
  $ctrl.tarifabase = tarifabase;
  $ctrl.precioporhora = precioporhora;

  $ctrl.ok = function (id) {
    $uibModalInstance.close(id);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
