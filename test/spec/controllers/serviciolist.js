'use strict';

describe('Controller: ServiciolistCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ServiciolistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiciolistCtrl = $controller('ServiciolistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiciolistCtrl.awesomeThings.length).toBe(3);
  });
});
