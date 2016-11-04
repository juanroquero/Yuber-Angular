'use strict';

describe('Controller: UsuariolisttransporteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var UsuariolisttransporteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuariolisttransporteCtrl = $controller('UsuariolisttransporteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsuariolisttransporteCtrl.awesomeThings.length).toBe(3);
  });
});
