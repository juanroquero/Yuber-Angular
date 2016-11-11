'use strict';

describe('Controller: ServiciotransportecrearCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ServiciotransportecrearCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiciotransportecrearCtrl = $controller('ServiciotransportecrearCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiciotransportecrearCtrl.awesomeThings.length).toBe(3);
  });
});
