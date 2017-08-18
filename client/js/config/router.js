angular
  .module('meanApp')
  .config(Router);

Router.$inject = ["$stateProvider", "$urlRouterProvider", '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
$stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/static/home.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/js/views/static/about.html'
  })
  .state('productsIndex', {
    url: '/products',
    templateUrl: '/js/views/products/index.html',
    controller: 'ProductsIndexCtrl as productsIndex'
  })
  .state('productsShow', {
    url: '/products/:id',
    templateUrl: '/js/views/products/show.html',
    controller: 'ProductsShowCtrl as productsShow'
  });

$urlRouterProvider.otherwise('/');
}
