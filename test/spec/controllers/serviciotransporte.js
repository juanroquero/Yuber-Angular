'use strict';

describe('Controller: ServiciotransporteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ServiciotransporteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiciotransporteCtrl = $controller('ServiciotransporteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiciotransporteCtrl.awesomeThings.length).toBe(3);
  });
});
