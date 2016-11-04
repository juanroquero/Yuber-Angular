'use strict';

describe('Service: administrador', function () {

  // load the service's module
  beforeEach(module('yuberApp'));

  // instantiate service
  var administrador;
  beforeEach(inject(function (_administrador_) {
    administrador = _administrador_;
  }));

  it('should do something', function () {
    expect(!!administrador).toBe(true);
  });

});
