angular
  .module('vinoApp')
  .config(Router);

Router.$inject = ["$stateProvider", "$urlRouterProvider", '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {

$locationProvider.html5Mode(true);

$stateProvider
  .state('about', {
    url: '/hakkimizda',
    templateUrl: '/js/views/static/about.html'
  })
  .state('policies', {
    url: '/sozlesmeler',
    templateUrl: '/js/views/static/policies.html'
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
    url: '/users/:id/duzenle',
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
    url: '/urunler/:id/duzenle',
    templateUrl: '/js/views/products/edit.html',
    controller: 'ProductsEditCtrl as productsEdit'
  })
  .state('ordersIndex', {
    url: '/siparisler',
    templateUrl: '/js/views/orders/index.html',
    controller: 'OrdersIndexCtrl as ordersIndex'
  })
  .state('ordersNew', {
    url: '/siparisler/yeni',
    templateUrl: '/js/views/orders/new.html',
    controller: 'CartCtrl as cart'
  })
  .state('ordersShow', {
    url: '/siparisler/:id',
    templateUrl: '/js/views/orders/show.html',
    controller: 'OrdersShowCtrl as ordersShow'
  })
  .state('ordersEdit', {
    url: '/siparisler/:id/duzenle',
    templateUrl: '/js/views/orders/edit.html',
    controller: 'OrdersEditCtrl as ordersEdit'
  })
  .state('cart', {
    url: '/sepetim',
    templateUrl: '/js/views/cart/view.html',
    controller: 'CartCtrl as cart'
  })
  .state('checkout', {
    url: '/siparis',
    templateUrl: '/js/views/cart/checkout.html',
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
