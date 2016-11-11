'use strict';

describe('Controller: ClientespuntajeCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ClientespuntajeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientespuntajeCtrl = $controller('ClientespuntajeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientespuntajeCtrl.awesomeThings.length).toBe(3);
  });
});
