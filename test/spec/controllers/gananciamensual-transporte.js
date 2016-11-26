'use strict';

describe('Controller: GananciamensualTransporteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var GananciamensualTransporteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GananciamensualTransporteCtrl = $controller('GananciamensualTransporteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GananciamensualTransporteCtrl.awesomeThings.length).toBe(3);
  });
});
