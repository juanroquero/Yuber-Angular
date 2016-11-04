'use strict';

describe('Service: servicio', function () {

  // load the service's module
  beforeEach(module('yuberApp'));

  // instantiate service
  var servicio;
  beforeEach(inject(function (_servicio_) {
    servicio = _servicio_;
  }));

  it('should do something', function () {
    expect(!!servicio).toBe(true);
  });

});
