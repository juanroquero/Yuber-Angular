'use strict';

describe('Controller: ServicioonSiteeditarCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ServicioonSiteeditarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicioonSiteeditarCtrl = $controller('ServicioonSiteeditarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServicioonSiteeditarCtrl.awesomeThings.length).toBe(3);
  });
});
