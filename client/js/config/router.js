angular
  .module('meanApp')
  .config(Router);

Router.$inject = ["$stateProvider", "$urlRouterProvider", '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {

$locationProvider.html5Mode(true);

$stateProvider
  // .state('home', {
  //   url: '/',
  //  templateUrl: '/js/views/static/home.html'
  //   templateUrl: '/js/views/products/index.html',
  //   controller: 'ProductsIndexCtrl as productsIndex'
  // })

  .state('about', {
    url: '/hakkimizda',
    templateUrl: '/js/views/static/about.html'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl as usersIndex'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl as usersShow'
  })
  .state('usersEdit', {
    url: '/users/:id/edit',
    templateUrl: '/js/views/users/edit.html',
    controller: 'UsersEditCtrl as usersEdit'
  })
  .state('productsIndex', {
    url: '/',
    templateUrl: '/js/views/products/index.html',
    controller: 'ProductsIndexCtrl as productsIndex'
  })
  .state('productsNew', {
    url: '/urunler/yeni',
    templateUrl: '/js/views/products/new.html',
    controller: 'ProductsNewCtrl as productsNew'
  })
  .state('productsShow', {
    url: '/urunler/:id',
    templateUrl: '/js/views/products/show.html',
    controller: 'ProductsShowCtrl as productsShow'
  })
  .state('productsEdit', {
    url: '/urunler/:id/edit',
    templateUrl: '/js/views/products/edit.html',
    controller: 'ProductsEditCtrl as productsEdit'
  })
  .state('cart', {
    url: '/sepetim',
    templateUrl: '/js/views/cart/view.html',
    controller: 'CartCtrl as cart'
  })
  .state('login', {
    url: '/giris',
    templateUrl: 'js/views/auth/login.html',
    controller: 'LoginCtrl as login'
  })
  .state('register', {
    url: '/kayit',
    templateUrl: 'js/views/auth/register.html',
    controller: 'RegisterCtrl as register'
    // controller: 'LoginCtrl as login'
  });

$urlRouterProvider.otherwise('/');

}
