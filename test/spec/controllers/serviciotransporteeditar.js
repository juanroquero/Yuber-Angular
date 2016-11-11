'use strict';

describe('Controller: ServiciotransporteeditarCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ServiciotransporteeditarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiciotransporteeditarCtrl = $controller('ServiciotransporteeditarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiciotransporteeditarCtrl.awesomeThings.length).toBe(3);
  });
});
