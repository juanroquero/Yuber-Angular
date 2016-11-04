'use strict';

describe('Service: provedor', function () {

  // load the service's module
  beforeEach(module('yuberApp'));

  // instantiate service
  var provedor;
  beforeEach(inject(function (_provedor_) {
    provedor = _provedor_;
  }));

  it('should do something', function () {
    expect(!!provedor).toBe(true);
  });

});
