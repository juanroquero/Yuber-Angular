'use strict';

describe('Controller: ClientelistartransporteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ClientelistartransporteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientelistartransporteCtrl = $controller('ClientelistartransporteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientelistartransporteCtrl.awesomeThings.length).toBe(3);
  });
});
