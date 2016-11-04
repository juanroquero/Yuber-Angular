'use strict';

describe('Controller: UsuariotransporteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var UsuariotransporteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuariotransporteCtrl = $controller('UsuariotransporteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsuariotransporteCtrl.awesomeThings.length).toBe(3);
  });
});
