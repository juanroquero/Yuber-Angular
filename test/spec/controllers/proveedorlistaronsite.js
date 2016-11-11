'use strict';

describe('Controller: ProveedorlistaronsiteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ProveedorlistaronsiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProveedorlistaronsiteCtrl = $controller('ProveedorlistaronsiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProveedorlistaronsiteCtrl.awesomeThings.length).toBe(3);
  });
});
