'use strict';

describe('Controller: ProvedorCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ProvedorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProvedorCtrl = $controller('ProvedorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProvedorCtrl.awesomeThings.length).toBe(3);
  });
});
