'use strict';

describe('Controller: ClientelistaronsiteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ClientelistaronsiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientelistaronsiteCtrl = $controller('ClientelistaronsiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientelistaronsiteCtrl.awesomeThings.length).toBe(3);
  });
});
