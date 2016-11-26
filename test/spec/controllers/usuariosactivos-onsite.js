'use strict';

describe('Controller: UsuariosactivosOnsiteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var UsuariosactivosOnsiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuariosactivosOnsiteCtrl = $controller('UsuariosactivosOnsiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsuariosactivosOnsiteCtrl.awesomeThings.length).toBe(3);
  });
});
