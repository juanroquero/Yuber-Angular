'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:AdminlistCtrl
 * @description
 * # AdminlistCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('AdminlistCtrl', [ 'administrador' , '$uibModal', function (administrador, $uibModal) {
   	
  	var ctrl = this;

  	ctrl.loading = false;

  	administrador.list().then(function(result){
	   		console.log(result);
	   		ctrl.lista = result.data;
	   	}, function(data) {
        console.log(data);
    	})

    ctrl.eliminarAdmin = function(email){
    	
    	/*administrador.delete(email).then(function(result){
	   		console.log(result);
	   	}, function(error) {
        	console.log(error);
    	})*/

    }

    ctrl.openModal = function (nombre, email){

  	var modalInstance = $uibModal.open({
      animation: true,
      size:'md',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/modaldeleteadmin.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: 'ctrlmodal',
      resolve: {
      	nombre: function () {
          return nombre;
        },
        email: function () {
          return email;
        }
      }
    });

    modalInstance.result.then(function (email) {
    	ctrl.loading = true;
    	console.log(email);
    	administrador.delete(email).then(function(result){
    		
    		administrador.list().then(function(result){
	   		console.log(result);
	   		ctrl.lista = result.data;
	   		ctrl.loading = false;
		   	}, function(data) {
	        console.log(data);
	        ctrl.loading = false;
	    	})

	   	}, function(error) {
	   		administrador.list().then(function(result){
	   		console.log(result);
	   		ctrl.lista = result.data;
	   		ctrl.loading = false;
		   	}, function(data) {
	        console.log(data);
	        ctrl.loading = false;
	    	})
        	console.log(error);
    	})

    }, function () {
 
    });
  };

    ////////////////////////////MODAL/////////////////////////////////////

}]);

angular.module('yuberApp').controller('ModalInstanceCtrl', function ($uibModalInstance, nombre, email) {
  var $ctrl = this;
  $ctrl.email = email;
  $ctrl.nombre = nombre;

  $ctrl.ok = function (email) {
    $uibModalInstance.close(email);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});