'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:ServicioonSiteeditarCtrl
 * @description
 * # ServicioonSiteeditarCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('ServicioonSiteeditarCtrl', [ 'servicio', '$stateParams', '$uibModal', function (servicio, $stateParams, $uibModal){
  
 var ctrl = this;
  
  ctrl.id = $stateParams.id;

  servicio.retrieve(ctrl.id).then(function(result){
      console.log(result);
   		ctrl.nombre = result.data.servicioNombre;
   		ctrl.tarifabase = result.data.servicioTarifaBase;
   		ctrl.precioporhora = result.data.servicioPrecioHora;

	},  function(data) {
        console.log(data);
	});

   ctrl.editar = function(id, nombre, tarifabase, precioporhora){

        if (nombre == undefined){
            return
        }else if (tarifabase == undefined){
            return
        }else if (precioporhora == undefined){
            return
        }else{
			
        	var dataservicio = {
				"servicioId":id,
				"estado":"Ok",
				"borrado":0,
				"servicioPrecioHora":precioporhora,
				"servicioPrecioKM":0,
				"servicioTarifaBase":tarifabase,
				"servicioNombre":nombre
			}

            servicio.edit(dataservicio).then(function(result){
	            console.log(result);
	            ctrl.openModal(nombre, tarifabase, precioporhora);
            
    	   }, function(data) {

        	});
        }
    }

    ctrl.openModal = function (nombre, tarifabase, precioporhora){

    var modalInstance = $uibModal.open({
      animation: true,
      size:'md',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/modal-edit-servicio-onsite.html',
      controller: 'ModalInstanceEditarServicioOnsiteCtrl',
      controllerAs: 'ctrlmodaleditservicioonsite',
      resolve: {
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

     modalInstance.result.then(function () {
    }, function () {
 
    });
  };

    ////////////////////////////MODAL/////////////////////////////////////

}]);

angular.module('yuberApp').controller('ModalInstanceEditarServicioOnsiteCtrl', function ($uibModalInstance, nombre, tarifabase, precioporhora) {
  var $ctrl = this;
  console.log(nombre);
  $ctrl.nombre = nombre;
  $ctrl.tarifabase = tarifabase;
  $ctrl.precioporhora = precioporhora;

  $ctrl.ok = function () {
    $uibModalInstance.close();
  };

   $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

});

