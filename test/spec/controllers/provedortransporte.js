'use strict';

describe('Controller: ProvedortransporteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ProvedortransporteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProvedortransporteCtrl = $controller('ProvedortransporteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProvedortransporteCtrl.awesomeThings.length).toBe(3);
  });
});
