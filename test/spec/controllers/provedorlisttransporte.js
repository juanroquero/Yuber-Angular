'use strict';

describe('Controller: ProvedorlisttransporteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ProvedorlisttransporteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProvedorlisttransporteCtrl = $controller('ProvedorlisttransporteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProvedorlisttransporteCtrl.awesomeThings.length).toBe(3);
  });
});
