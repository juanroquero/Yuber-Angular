'use strict';

describe('Controller: SidebaradminCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var SidebaradminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidebaradminCtrl = $controller('SidebaradminCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SidebaradminCtrl.awesomeThings.length).toBe(3);
  });
});
