'use strict';

describe('Controller: ServiciolistonSiteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ServiciolistonSiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiciolistonSiteCtrl = $controller('ServiciolistonSiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiciolistonSiteCtrl.awesomeThings.length).toBe(3);
  });
});
