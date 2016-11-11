'use strict';

describe('Controller: ServicioonSitecrearCtrl', function () {

  // load the controller's module
  beforeEach(module('yuberApp'));

  var ServicioonSitecrearCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicioonSitecrearCtrl = $controller('ServicioonSitecrearCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServicioonSitecrearCtrl.awesomeThings.length).toBe(3);
  });
});
