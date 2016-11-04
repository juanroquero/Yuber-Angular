'use strict';

/**
 * @ngdoc overview
 * @name yuberApp
 * @description
 * # yuberApp
 *
 * Main module of the application.
 */
angular
  .module('yuberApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
       
       $urlRouterProvider.otherwise('/login');
      
        $stateProvider

        ////////////////////INICIAL Y LOGIN ///////////////////

        .state('initial', {
            //abstract:true,
            url: '/',
            views:{
              '':{templateUrl: 'views/main.html'},
              'header@initial':{templateUrl: 'views/header.html'}
            }
        })

        .state('initial.login', {
            url: 'login',
            views:{
              'body@initial':{templateUrl: 'views/login.html'},
              //'header@initial':{templateUrl: 'views/header.html'}
            },
            controller: 'LoginCtrl',
            controllerAs: 'loginCtrl'
        })

        ///////////////////////DASHBOARD//////////////////////////////
        
        .state('initial.dashboard', {
            url: '/dashboard',
            views:{
              'body@initial':{templateUrl:'views/dashboard.html'},
            
              //'body@dashboard': {templateUrl: 'views/body.html'},
            },
            controller:  'DashboardCtrl',
            controllerAs: 'dashboardCtrl'
        })

        ///////////////////////ON-SITE//////////////////////////////

        .state('initial.dashboard.on-site', {
            url: '/on-site',
            views:{
              //'':{templateUrl:'views/dashboard.html'},
              'sidebar': {templateUrl: 'views/sidebar.html'},
              'body': {template: '<div ui-view=body></div>'},
            },
            controller:  'DashboardCtrl',
            controllerAs: 'dashboardCtrl'
        })

         .state('initial.dashboard.on-site.usuarios', {
            url: '/usuarios',
            views:{
              'body@initial.dashboard.on-site': {templateUrl: 'views/usuariolist.html'},
            },
            controller:  'UsuariolistCtrl',
            controllerAs: 'usuarioListCtrl'
        })

         .state('initial.dashboard.on-site.servicios', {
            url: '/servicios',
            views:{
              'body@initial.dashboard.on-site': {templateUrl: 'views/serviciolist.html'},
            },
            controller:  'ServiciolistCtrl',
            controllerAs: 'servicioListCtrl'
        })

         .state('initial.dashboard.on-site.provedores', {
            url: '/proveedores',
            views:{
              'body@initial.dashboard.on-site': {templateUrl: 'views/provedorlist.html'},
            },
            controller:  'ProvedorlistCtrl',
            controllerAs:'provedorListCtrl'
        })

         .state('initial.dashboard.on-site.usuario', {
            url: '/usuario',
            views:{
              'body@initial.dashboard.on-site': {templateUrl: 'views/usuario.html'},
            },
            controller:  'UsuarioCtrl',
            controllerAs:'usuarioCtrl'
        })

        .state('initial.dashboard.on-site.servicio', {
            url: '/servicio',
            views:{
              'body@initial.dashboard.on-site': {templateUrl: 'views/servicio.html'},
            },
            controller:  'ServicioCtrl',
            controllerAs:'servicioCtrl'
        })

        /////////////////////////TRANSPORTE////////////////////////////////////////
        
        .state('initial.dashboard.transporte', {
            url: '/transporte',
            views:{
              //'':{templateUrl:'views/dashboard.html'},
              'sidebar': {templateUrl: 'views/sidebartransporte.html'},
              'body': {template: '<div ui-view=body></div>'},
            },
            controller:  'DashboardTransporteCtrl',
            controllerAs: 'dashboardTransporteCtrl'
        })

         .state('initial.dashboard.transporte.usuarios', {
            url: '/usuarios',
            views:{
              'body@initial.dashboard.transporte': {templateUrl: 'views/usuariolist-transporte.html'},
            },
            controller:  'UsuariolistTransporteCtrl',
            controllerAs: 'usuarioTransporteListCtrl'
        })

         .state('initial.dashboard.transporte.servicios', {
            url: '/servicios',
            views:{
              'body@initial.dashboard.transporte': {templateUrl: 'views/serviciolist-transporte.html'},
            },
            controller:  'ServiciolistTransporteCtrl',
            controllerAs: 'servicioTransporteListCtrl' 
        })

         .state('initial.dashboard.transporte.provedores', {
            url: '/proveedores',
            views:{
              'body@initial.dashboard.transporte': {templateUrl: 'views/provedorlist-transporte.html'},
            },
            controller:  'ProvedorlistTransporteCtrl',
            controllerAs: 'provedorTransporteListCtrl'
        })


         /////////////////////////ADMINISTRADORES///////////////////////////////////
        
        .state('initial.dashboard.administradores', {
            url: '/administradores',
            views:{
              //'':{templateUrl:'views/dashboard.html'},
              'sidebar': {templateUrl: 'views/sidebaradmin.html'},
              'body': {template: '<div ui-view=body></div>'},
            },
            controller:  'DashboardAdminCtrl',
            controllerAs: 'dashboardAdminCtrl'
        })

         .state('initial.dashboard.administradores.crear', {
            url: '/crear',
            views:{
              'body@initial.dashboard.administradores': 
              {templateUrl: 'views/crear-admin.html',
                controller:  'CrearadminCtrl as crearAdminCtrl',
              },
            },
        })

         .state('initial.dashboard.administradores.listar', {
            url: '/listar',
            views:{
              'body@initial.dashboard.administradores': 
              {templateUrl: 'views/admin-list.html',
                controller:  'AdminlistCtrl as adminListCtrl',
              },
            },
        })

         .state('initial.dashboard.administradores.editar', {
            url: '/editar/:email',
            views:{
              'body@initial.dashboard.administradores': 
              {templateUrl: 'views/admin-editar.html',
                controller:  'AdmineditarCtrl as adminEditarCtrl',
              },
            },
        });

         ///////////////////////HTTP CONFIGURATIONS////////////////////////////

        $httpProvider.defaults.headers.post["Accept"] = "application/json";
        $httpProvider.defaults.headers.post["Content-Type"] = "application/json";

}])