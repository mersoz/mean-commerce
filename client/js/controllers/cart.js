angular
  .module('meanApp')
  .controller('CartCtrl', CartCtrl);


CartCtrl.$inject = ['$http', '$auth', '$state', '$scope', '$rootScope', '$stateParams', 'User', 'Product', 'ngCart'];
function CartCtrl($http, $auth, $state, $scope, $rootScope, $stateParams, User, Product, ngCart) {

  ngCart.setTaxRate(15);
  ngCart.setShipping(17.70);

  console.log('this is the cart controller');
  const vm = this;

  // console.log('Error because no product on cart page');
  console.log($state);

  
}
