'use strict';

/**
 * @ngdoc function
 * @name yuberApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the yuberApp
 */
angular.module('yuberApp')
  .controller('DashboardCtrl', '$rootScope', [function ($rootScope) {
    
    $rootScope.$stateParams.body = 'body';
    
  }]);
