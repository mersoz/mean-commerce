angular
  .module('vinoApp')
  .controller('CartCtrl', CartCtrl);


CartCtrl.$inject = ['$http', '$auth', '$state', '$scope', '$rootScope', '$stateParams', 'User', 'Product', 'ngCart', 'checkout'];
function CartCtrl($http, $auth, $state, $scope, $rootScope, $stateParams, User, Product, ngCart, checkout) {
  // ngCart.setTaxRate(18);
  ngCart.setShipping(7.90);
}
