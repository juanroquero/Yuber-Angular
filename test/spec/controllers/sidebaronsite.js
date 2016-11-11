'use strict';

describe('Controller: SidebaronsiteCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var SidebaronsiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidebaronsiteCtrl = $controller('SidebaronsiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SidebaronsiteCtrl.awesomeThings.length).toBe(3);
  });
});
