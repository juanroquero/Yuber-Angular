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
    'ui.bootstrap',
    'chart.js',
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
              'header@initial':{
                templateUrl: 'views/header.html',
                  controller: 'HeaderCtrl',
                  controllerAs: 'headerCtrl'
                }
            }
        })

        .state('initial.login', {
            authenticate: false,
            url: 'login',
            views:{
              'body@initial':{
                templateUrl: 'views/login.html',
                  controller: 'LoginCtrl',
                  controllerAs: 'loginCtrl'
              },
              //'header@initial':{templateUrl: 'views/header.html'}
            },
 
        })

        ///////////////////////DASHBOARD//////////////////////////////
        
        .state('initial.dashboard', {
            url: 'dashboard',
            abstract: true,
            authenticate: true,
            views:{
              'body@initial':{templateUrl:'views/dashboard.html'},
            
              //'body@dashboard': {templateUrl: 'views/body.html'},
            },
        })

        ///////////////////////ON-SITE//////////////////////////////

        .state('initial.dashboard.on-site', {
            url: '/on-site',
            authenticate: true,
            views:{
              //'':{templateUrl:'views/dashboard.html'},
              'sidebar': {templateUrl: 'views/sidebaronsite.html',
                            controller:  'SidebaronsiteCtrl',
                            controllerAs: 'sidebaronsiteCtrl'
                        },
              'body': {template: '<div ui-view=body></div>'},
            },
        })


         //----------------------SERVICIOS---------------------------

         .state('initial.dashboard.on-site.servicios', {
            //abstract: true,
            authenticate: true,
            url: '/servicio-on-site',
            views:{
            'body': {template: '<div ui-view=body></div>'},            
            },
        })

         .state('initial.dashboard.on-site.servicios.listar', {
            url: '/listar',
            authenticate: true,
            views:{
              'body@initial.dashboard.on-site.servicios': {
                templateUrl: 'views/serviciolist-on-site.html',
                  controller:  'ServiciolistonSiteCtrl',
                  controllerAs: 'servicioListOnSiteCtrl' 
              },
            },
        })

        .state('initial.dashboard.on-site.servicios.editar', {
            url: '/editar/:id',
            authenticate: true,
            views:{
              'body@initial.dashboard.on-site.servicios': 
              {templateUrl: 'views/servicio-editar-on-site.html',
                  controller:  'ServicioonSiteeditarCtrl',
                  controllerAs: 'serviciOnSiteEditarCtrl' 
              },
            },
        })

        .state('initial.dashboard.on-site.servicios.crear', {
            url: '/crear',
            authenticate: true,
            views:{
              'body@initial.dashboard.on-site.servicios': 
              {templateUrl: 'views/servicio-crear-on-site.html',
                controller:  'ServicioonSitecrearCtrl',
                controllerAs: 'servicioOnSiteCrearCtrl' 
              },
            },
        })

        .state('initial.dashboard.on-site.servicios.gananciamensual', {
            url: '/ganancia-mensual',
            authenticate: true,
            views:{
              'body@initial.dashboard.on-site.servicios': {
                templateUrl: 'views/gananciamensual-onsite.html',
                  controller:  'GananciamensualOnsiteCtrl',
                  controllerAs: 'gananciamensualOnsiteCtrl' 
              },
            },
        })

        .state('initial.dashboard.on-site.servicios.usuariosactivos', {
            url: '/usuarios-activos',
            authenticate: true,
            views:{
              'body@initial.dashboard.on-site.servicios': {
                templateUrl: 'views/usuariosactivos-onsite.html',
                  controller:  'UsuariosactivosOnsiteCtrl',
                  controllerAs: 'usuariosactivosOnsiteCtrl' 
              },
            },
        })

        //--------------------PROVEEDORES-----------------------------

        .state('initial.dashboard.on-site.proveedores', {
            url: '/proveedores',
            authenticate: true,
            views:{
              'body@initial.dashboard.on-site': 
              {templateUrl: 'views/proveedor-listar-on-site.html',
                controller:  'ProveedorlistaronsiteCtrl',
                controllerAs: 'proveedorListarOnSiteCtrl' 
              },
            },
        })

        //--------------------CLIENTES--------------------------------

        .state('initial.dashboard.on-site.clientes', {
            url: '/clientes',
            authenticate: true,
            views:{
              'body@initial.dashboard.on-site': 
              {templateUrl: 'views/cliente-listar-on-site.html',
                controller:  'ClientelistaronsiteCtrl',
                controllerAs: 'clienteListarOnSiteCtrl' 
              },
            },
        })

        /////////////////////////TRANSPORTE////////////////////////////
        
        .state('initial.dashboard.transporte', {
            url: '/transporte',
            authenticate: true,
            views:{
              //'':{templateUrl:'views/dashboard.html'},
              'sidebar': {templateUrl: 'views/sidebartransporte.html',
                            controller:  'SidebartransporteCtrl',
                            controllerAs: 'sidebartransporteCtrl'
                         },
              'body': {template: '<div ui-view=body></div>'},
            },
        })


         //----------------------SERVICIOS---------------------------

         .state('initial.dashboard.transporte.servicios', {
            abstract: true,
            authenticate: true,
            url: '/servicio-transporte',
            views:{
            'body': {template: '<div ui-view=body></div>'},            
            },
        })

         .state('initial.dashboard.transporte.servicios.listar', {
            url: '/listar',
            authenticate: true,
            views:{
              'body@initial.dashboard.transporte.servicios': {
                templateUrl: 'views/serviciolist-transporte.html',
                  controller:  'ServiciolisttransporteCtrl',
                  controllerAs: 'servicioListTransporteCtrl' 
              },
            },
        })

        .state('initial.dashboard.transporte.servicios.editar', {
            url: '/editar/:id',
            authenticate: true,
            views:{
              'body@initial.dashboard.transporte.servicios': 
              {templateUrl: 'views/servicio-editar-transporte.html',
                  controller:  'ServiciotransporteeditarCtrl',
                  controllerAs: 'servicioTransporteEditarCtrl' 
              },
            },
        })

        .state('initial.dashboard.transporte.servicios.crear', {
            url: '/crear',
            authenticate: true,
            views:{
              'body@initial.dashboard.transporte.servicios': 
              {templateUrl: 'views/servicio-crear-transporte.html',
                controller:  'ServiciotransportecrearCtrl',
                controllerAs: 'servicioTransporteCrearCtrl' 
              },
            },
        })

        .state('initial.dashboard.transporte.servicios.gananciamensual', {
            url: '/ganancia-mensual',
            authenticate: true,
            views:{
              'body@initial.dashboard.transporte.servicios': {
                templateUrl: 'views/gananciamensual-transporte.html',
                  controller:  'GananciamensualTransporteCtrl',
                  controllerAs: 'gananciamensualTransporteCtrl' 
              },
            },
        })

        .state('initial.dashboard.transporte.servicios.usuariosactivos', {
            url: '/usuarios-activos',
            authenticate: true,
            views:{
              'body@initial.dashboard.transporte.servicios': {
                templateUrl: 'views/usuariosactivos-transporte.html',
                  controller:  'UsuariosactivosTransporteCtrl',
                  controllerAs: 'usuariosactivosTransporteCtrl' 
              },
            },
        })


        //--------------------PROVEEDORES-----------------------------

        .state('initial.dashboard.transporte.proveedores', {
            url: '/proveedores',
            authenticate: true,
            views:{
              'body@initial.dashboard.transporte': 
              {templateUrl: 'views/proveedor-listar-transporte.html',
                controller:  'ProveedorlistartransporteCtrl',
                controllerAs: 'proveedorListarTransporteCtrl' 
              },
            },
        })

        //--------------------CLIENTES--------------------------------

        .state('initial.dashboard.transporte.clientes', {
            url: '/clientes',
            authenticate: true,
            views:{
              'body@initial.dashboard.transporte': 
              {templateUrl: 'views/cliente-listar-transporte.html',
                controller:  'ClientelistartransporteCtrl',
                controllerAs: 'clienteListarTransporteCtrl' 
              },
            },
        })

         /////////////////////////ADMINISTRADORES///////////////////////////////////
        
        .state('initial.dashboard.administradores', {
            url: '/administradores',
            authenticate: true,
            views:{
              //'':{templateUrl:'views/dashboard.html'},
              'sidebar': {
                templateUrl: 'views/sidebaradmin.html',
                  controller:  'SidebaradminCtrl',
                  controllerAs: 'sidebaradminCtrl'
                },

              'body': {template: '<div ui-view=body></div>'},
            },
            controller:  'DashboardAdminCtrl',
            controllerAs: 'dashboardAdminCtrl'
        })

         .state('initial.dashboard.administradores.crear', {
            url: '/crear',
            authenticate: true,
            views:{
              'body@initial.dashboard.administradores': 
              {templateUrl: 'views/crear-admin.html',
                controller:  'CrearadminCtrl as crearAdminCtrl',
              },
            },
        })

         .state('initial.dashboard.administradores.listar', {
            url: '/listar',
            authenticate: true,
            views:{
              'body@initial.dashboard.administradores': 
              {templateUrl: 'views/admin-list.html',
                controller:  'AdminlistCtrl as adminListCtrl',
              },
            },
        })

         .state('initial.dashboard.administradores.editar', {
            url: '/editar/:email',
            authenticate: true,
            views:{
              'body@initial.dashboard.administradores': 
              {templateUrl: 'views/admin-editar.html',
                controller:  'AdmineditarCtrl as adminEditarCtrl',
              },
            },
        })

        //--------------ESTADO PROVICIONAL POR SI NO TIENE PERMISO DE NADA---------------

        .state('initial.provicional', {
            url: '/sin-permisos',
            authenticate: true,
            views:{
              'body@initial': 
              {templateUrl: 'views/sin-permisos.html',
              },
            },
        });

         ///////////////////////HTTP CONFIGURATIONS////////////////////////////

        $httpProvider.defaults.headers.post["Accept"] = "application/json";
        $httpProvider.defaults.headers.post["Content-Type"] = "application/json";

}])

.run(function ($rootScope, $state, auth) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    ////PREVENIR IR A ESTADOS QUE NECESITAN LOGIN SIN ESTAR LOGUEADO////
    if (toState.authenticate && !auth.isAuthenticated()){
      // User isn’t authenticated
      event.preventDefault();
      $state.go("initial.login");
    }
    ////PREVENIR IR AL LOGIN ESTANDO LOGUEADO////
    if (toState.name == 'initial.login' && auth.isAuthenticated()){
        if (auth.isAdministrador()){
          event.preventDefault();
          $state.transitionTo('initial.dashboard.administradores.listar');
          $rootScope.administrador = true;
        } else if ($rootScope.transporte){
          event.preventDefault();
          $state.transitionTo('initial.dashboard.transporte.servicios.listar');
          $rootScope.transporte = true;
        } else if (auth.isOnSite()){
          event.preventDefault();
          $state.transitionTo('initial.dashboard.on-site.servicios.listar');
          $rootScope.onsite = true;
        } else {
          event.preventDefault();
          $state.transitionTo('initial.provicional');
        }
    }
    ////PREVENIR VER ADMINS SIN TENER PERMISO DE SUPERADMIN////
    if (toState.name.startsWith('initial.dashboard.administradores') && auth.isAuthenticated()){
        if (!auth.isAdministrador()){
          event.preventDefault();
           if (auth.isTransporte()){
            $state.transitionTo('initial.dashboard.transporte.servicios.listar');
            $rootScope.transporte = true;
          } else if (auth.isOnSite()){
            $state.transitionTo('initial.dashboard.on-site.servicios.listar');
            $rootScope.onsite = true;
          } else {
            $state.transitionTo('initial.provicional');
          }
        }
        $rootScope.administrador = true;
    }
    ////PREVENIR VER TRANSPORTE SIN TENER PERMISO////
    if (toState.name.startsWith('initial.dashboard.transporte') && auth.isAuthenticated()){
        if (!auth.isTransporte()){
          event.preventDefault();
           if (auth.isAdministrador()){
            $state.transitionTo('initial.dashboard.administradores.listar');
            $rootScope.administrador = true;
          } else if (auth.isOnSite()){
            $state.transitionTo('initial.dashboard.on-site.servicios.listar');
            $rootScope.onsite = true;
          } else {
            $state.transitionTo('initial.provicional');
          }
          $rootScope.transporte = true;
      }
    }
    ////PREVENIR VER ON-SITE SIN TENER PERMISO////
    if (toState.name.startsWith('initial.dashboard.on-site') && auth.isAuthenticated()){
        if (!auth.isTransporte()){
          event.preventDefault();
           if (auth.isAdministrador()){
            $state.transitionTo('initial.dashboard.administradores.listar');
            $rootScope.administrador = true;
          } else if (auth.isTransporte()){
            $state.transitionTo('initial.dashboard.transporte.servicios.listar');
            $rootScope.transporte = true;
          } else {
            $state.transitionTo('initial.provicional');
          }
      }
      $rootScope.onsite = true;
    }
  });
});