'use strict';

describe('Controller: GananciamensualOnsiteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var GananciamensualOnsiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GananciamensualOnsiteCtrl = $controller('GananciamensualOnsiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GananciamensualOnsiteCtrl.awesomeThings.length).toBe(3);
  });
});
