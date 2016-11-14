'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:ServiciotransporteeditarCtrl
 * @description
 * # ServiciotransporteeditarCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('ServiciotransporteeditarCtrl', [ 'servicio', '$stateParams', '$uibModal', function (servicio, $stateParams, $uibModal){
  
 var ctrl = this;

 console.log($stateParams);
  
  ctrl.id = $stateParams.id;

  servicio.retrieve(ctrl.id).then(function(result){
      console.log(result);
   		ctrl.nombre = result.data.servicioNombre;
   		ctrl.tarifabase = result.data.servicioTarifaBase;
   		ctrl.precioporhora = result.data.servicioPrecioHora;
   		ctrl.precioporkm = result.data.servicioPrecioKM

	},  function(data) {
        console.log(data);
	});

   ctrl.editar = function(id, nombre, tarifabase, precioporhora, precioporkm){

        if (nombre == undefined){
            return
        }else if (tarifabase == undefined){
            return
        }else if (precioporhora == undefined){
            return
        }else if (precioporkm == undefined){
            return
        }else{
			
        	var dataservicio = {
				"servicioId":id,
				"estado":"Ok",
				"borrado":0,
				"servicioPrecioHora":precioporhora,
				"servicioPrecioKM":precioporkm,
				"servicioTarifaBase":tarifabase,
				"servicioNombre":nombre
			}

            servicio.edit(dataservicio).then(function(result){
	            console.log(result);
	            ctrl.openModal(nombre, tarifabase, precioporhora, precioporkm);
            
    	   }, function(data) {

        	});
        }
    }

    ctrl.openModal = function (nombre, tarifabase, precioporhora, precioporkm){

    var modalInstance = $uibModal.open({
      animation: true,
      size:'md',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/modal-edit-servicio-transporte.html',
      controller: 'ModalInstanceEditarServicioTransporteCtrl',
      controllerAs: 'ctrlmodaleditserviciotransporte',
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
        precioporkm: function () {
          return precioporkm;
        }
      }
    });

     modalInstance.result.then(function () {
    }, function () {
 
    });
  };

    ////////////////////////////MODAL/////////////////////////////////////

}]);

angular.module('yuberApp').controller('ModalInstanceEditarServicioTransporteCtrl', function ($uibModalInstance, $state, nombre, tarifabase, precioporhora, precioporkm) {
  var $ctrl = this;
  $ctrl.nombre = nombre;
  $ctrl.tarifabase = tarifabase;
  $ctrl.precioporhora = precioporhora;
  $ctrl.precioporkm = precioporkm;

  $ctrl.ok = function () {
    $uibModalInstance.close();
    $state.go('initial.dashboard.transporte.servicios.listar');
  };

   $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

});

