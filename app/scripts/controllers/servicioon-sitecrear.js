'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:ServicioonSitecrearCtrl
 * @description
 * # ServicioonSitecrearCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('ServicioonSitecrearCtrl', ['servicio', '$uibModal', function (servicio, $uibModal) {
  
    var ctrl = this;
    
    ctrl.agregar = function(nombre, tarifabase, precioporhora){


        if (nombre == undefined){
            return
        }else if (tarifabase == undefined){
  			return
        }else if (precioporhora == undefined){
            return
        }else{

        	var nuevoservicio = {
        		"tipoVertical":"On-Site",
        		"servicio":{
        			"servicioId":0,
        			"estado":"Ok",
        			"borrado":0,
        			"servicioPrecioHora":precioporhora,
        			"servicioPrecioKM":0,
        			"servicioTarifaBase":tarifabase,
        			"servicioNombre":nombre,
        		}
        	}
              
          servicio.create(nuevoservicio).then(function(result){
            
            console.log(result);
            ctrl.openModal(nombre, tarifabase, precioporhora);

    	   	}, function(data) {
                          
                console.log(data);
        	});
        }
    }
    

    ctrl.openModal = function (nombre, tarifabase, precioporhora){

    var modalInstance = $uibModal.open({
      animation: true,
      size:'md',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/modalcreateservicioonsite.html',
      controller: 'ModalInstanceAgregarServicioOnSiteCtrl',
      controllerAs: 'ctrlmodalAgregarServicioOnSite',
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

    modalInstance.result.then(function (nombre, tarifabase, precioporhora) {
    }, function () {
 
    });
  };
  }]);

angular.module('yuberApp').controller('ModalInstanceAgregarServicioOnSiteCtrl', function ($uibModalInstance, nombre, tarifabase, precioporhora) {
  var $ctrl = this;
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
