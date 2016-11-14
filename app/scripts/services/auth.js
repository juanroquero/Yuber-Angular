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

    var URLserver = 'http://54.203.12.195:8080/YuberWEB/rest/';

  	auth.login = function(datausuario){

  		return $http({
              url: URLserver + 'Admin/Login',
              method: "POST",
              data: datausuario,
          });

  	}

  	auth.logout = function(datausuario){

  		return $http({
              url: URLserver + 'Admin/Logout',
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

    auth.isAdministrador = function(){
      var userObj = $cookieStore.get('userObj');
      if (userObj){
        if (userObj.administrador)
            $rootScope.administrador = true;
        else
            $rootScope.administrador = false;

      return $rootScope.administrador;
      }
       else{
        return false;
      } 
    }

    auth.isTransporte = function(){
      var userObj = $cookieStore.get('userObj');

      if (userObj){
        if (userObj.transporte)
            $rootScope.transporte = true;
        else
            $rootScope.transporte = false;

      return $rootScope.transporte;
      }
      else{
        return false;
      }  
    }

    auth.isOnSite = function(){
      var userObj = $cookieStore.get('userObj');

      if (userObj){
        if (userObj.onsite)
            $rootScope.onsite = true;
        else
            $rootScope.onsite = false;

        return $rootScope.onsite;
      } else {
        return false;
      }
        
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
