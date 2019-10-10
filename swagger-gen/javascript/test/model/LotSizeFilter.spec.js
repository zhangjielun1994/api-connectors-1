/**
 * Bybit API
 * ## REST API for the Bybit Exchange. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@bybit.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BybitApi);
  }
}(this, function(expect, BybitApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BybitApi.LotSizeFilter();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LotSizeFilter', function() {
    it('should create an instance of LotSizeFilter', function() {
      // uncomment below and update the code to test LotSizeFilter
      //var instance = new BybitApi.LotSizeFilter();
      //expect(instance).to.be.a(BybitApi.LotSizeFilter);
    });

    it('should have the property minTradingQty (base name: "min_trading_qty")', function() {
      // uncomment below and update the code to test the property minTradingQty
      //var instance = new BybitApi.LotSizeFilter();
      //expect(instance).to.be();
    });

    it('should have the property maxTradingQty (base name: "max_trading_qty")', function() {
      // uncomment below and update the code to test the property maxTradingQty
      //var instance = new BybitApi.LotSizeFilter();
      //expect(instance).to.be();
    });

    it('should have the property qtyStep (base name: "qty_step")', function() {
      // uncomment below and update the code to test the property qtyStep
      //var instance = new BybitApi.LotSizeFilter();
      //expect(instance).to.be();
    });

  });

}));