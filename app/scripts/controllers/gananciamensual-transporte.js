'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:GananciamensualTransporteCtrl
 * @description
 * # GananciamensualTransporteCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('GananciamensualTransporteCtrl', ['administrador', '$q', function (administrador, $q) {
   

  var ctrl = this;

  var ganancias = [[]];

  var list;

  //para crear la lista de lista de ganancias por servicio vacia
  administrador.gananciaMensual("Transporte", 11).then(function(result){
  		list = result.data;
  		ctrl.series = _.map(list, function(elem){return elem.servicio;});
  		//// inicializo lista de ganancias
  		for (var i=0; i<list.length; i++) {
  			ganancias[i]=[];
  		}

  		let promiseOne = administrador.gananciaMensual("Transporte", 7);

		let promiseTwo = administrador.gananciaMensual("Transporte", 8);

		let promiseThree = administrador.gananciaMensual("Transporte", 9);

		let promiseFour = administrador.gananciaMensual("Transporte", 10);

		let promiseFive = administrador.gananciaMensual("Transporte", 11);

		$q.all([promiseOne, promiseTwo, promiseThree, promiseFour, promiseFive]).then(data => {
  			angular.forEach(data, function(value){
  			for (var servicios=0; servicios<value.data.length; servicios++) {
  				ganancias[servicios].push(value.data[servicios].ganancia);
  			}
  			})
		});

	  }, function(error){
	  	console.log(error);
	  });

  
  

  ctrl.labels = ["Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];
  ctrl.data = ganancias;

}]);