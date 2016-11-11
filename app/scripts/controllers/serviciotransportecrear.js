'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:ServiciotransportecrearCtrl
 * @description
 * # ServiciotransportecrearCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('ServiciotransportecrearCtrl', ['servicio', '$uibModal', function (servicio, $uibModal) {

    var ctrl = this;
    
    ctrl.agregar = function(nombre, tarifabase, precioporhora, precioporkm){


        if (nombre == undefined){
            return
        }else if (tarifabase == undefined){
  			return
        }else if (precioporhora == undefined){
            return
        }else if (precioporkm == undefined){
            return
        }else{

        	var nuevoservicio = {
        		"tipoVertical":"Transporte",
        		"servicio":{
        			"servicioId":0,
        			"estado":"Ok",
        			"borrado":0,
        			"servicioPrecioHora":precioporhora,
        			"servicioPrecioKM":precioporkm,
        			"servicioTarifaBase":tarifabase,
        			"servicioNombre":nombre,
        		}
        	}
              
          servicio.create(nuevoservicio).then(function(result){
            
            console.log(result);
            ctrl.openModal(nombre, tarifabase, precioporhora, precioporkm);

    	   	}, function(data) {
                          
                console.log(data);
        	});
        }
    }
    

    ctrl.openModal = function (nombre, tarifabase, precioporhora, precioporkm){

    var modalInstance = $uibModal.open({
      animation: true,
      size:'md',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/modalcreateserviciotransporte.html',
      controller: 'ModalInstanceAgregarServicioTransporteCtrl',
      controllerAs: 'ctrlmodalAgregarServicioTransporte',
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
        },

      }
    });

    modalInstance.result.then(function (nombre, tarifabase, precioporhora, precioporkm) {
    }, function () {
 
    });
  };
  }]);

angular.module('yuberApp').controller('ModalInstanceAgregarServicioTransporteCtrl', function ($uibModalInstance, nombre, tarifabase, precioporhora, precioporkm) {
  var $ctrl = this;
  $ctrl.nombre = nombre;
  $ctrl.tarifabase = tarifabase;
  $ctrl.precioporhora = precioporhora;
  $ctrl.precioporkm = precioporkm;

  $ctrl.ok = function () {
    $uibModalInstance.close();
  };

   $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

});
