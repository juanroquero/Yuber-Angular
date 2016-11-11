'use strict';

describe('Controller: ProveedorlistartransporteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ProveedorlistartransporteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProveedorlistartransporteCtrl = $controller('ProveedorlistartransporteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProveedorlistartransporteCtrl.awesomeThings.length).toBe(3);
  });
});
