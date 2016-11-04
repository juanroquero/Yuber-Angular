'use strict';

describe('Controller: AdmineditarCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var AdmineditarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdmineditarCtrl = $controller('AdmineditarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdmineditarCtrl.awesomeThings.length).toBe(3);
  });
});
