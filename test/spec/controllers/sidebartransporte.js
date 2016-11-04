'use strict';

describe('Controller: SidebartransporteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var SidebartransporteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidebartransporteCtrl = $controller('SidebartransporteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SidebartransporteCtrl.awesomeThings.length).toBe(3);
  });
});
