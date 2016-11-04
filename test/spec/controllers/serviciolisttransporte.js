'use strict';

describe('Controller: ServiciolisttransporteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ServiciolisttransporteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiciolisttransporteCtrl = $controller('ServiciolisttransporteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiciolisttransporteCtrl.awesomeThings.length).toBe(3);
  });
});
