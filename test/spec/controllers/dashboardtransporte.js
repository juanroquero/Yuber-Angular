'use strict';

describe('Controller: DashboardtransporteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var DashboardtransporteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardtransporteCtrl = $controller('DashboardtransporteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DashboardtransporteCtrl.awesomeThings.length).toBe(3);
  });
});
