angular
  .module('meanApp')
  .config(Router);

Router.$inject = ["$stateProvider", "$urlRouterProvider"];
function Router($stateProvider, $urlRouterProvider) {
$stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/js/views/home.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/js/views/about.html'
  })
  .state('products', {
    url: '/products',
    templateUrl: '/js/views/products.html',
    controller: 'ProductsIndexCtrl',
    controllerAs: 'products'
  });

$urlRouterProvider.otherwise('/home');
}
