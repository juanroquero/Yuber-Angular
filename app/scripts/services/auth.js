'use strict';

/**
 * @ngdoc service
 * @name yuberApp.auth
 * @description
 * # auth
 * Service in the yuberApp.
 */
angular.module('yuberApp')
  .factory('auth', [ '$http', '$cookieStore', '$rootScope', function ($http, $cookieStore, $rootScope) {

  	var auth = {};

  	auth.login = function(datausuario){

  		return $http({
              url: 'http://54.213.51.6:8080/YuberWEB/rest/Admin/Login',
              method: "POST",
              data: datausuario,
          });

  	}

  	auth.logout = function(datausuario){

  		console.log(datausuario);
  		return $http({
              url: 'http://54.213.51.6:8080/YuberWEB/rest/Admin/Logout',
              method: "POST",
              data: datausuario,
          });

  	}

  	auth.isAuthenticated = function(){
  		var userObj = $cookieStore.get('userObj');

        if (userObj)
            $rootScope.sesion = true;
        else
            $rootScope.sesion = false;

  		return $rootScope.sesion;
  	}


    auth.setAccessToken = function(authToken) {
        $cookieStore.put('accessToken', authToken);
    };

    auth.getAccessToken = function() {
        auth.authToken = $cookieStore.get('accessToken');
        return auth.authToken;
    };

    auth.getUserObj = function () {
        var userObj = $cookieStore.get('userObj');

        if (userObj)
            return userObj;
        else
            return undefined;
    };

    auth.setUserObj = function (userObj) {
        $cookieStore.put('userObj',userObj);
    };

    auth.removeCookies = function(){
        $cookieStore.remove('userObj');
        $cookieStore.remove('accessToken');
        $cookieStore.remove('facebook');
    };

  	return auth;

  }]);
