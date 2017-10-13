angular
  .module('vinoApp')
  .controller('CartCtrl', CartCtrl);


CartCtrl.$inject = ['$http', '$auth', '$state', '$scope', '$rootScope', '$stateParams', 'User', 'Product', 'ngCart'];
function CartCtrl($http, $auth, $state, $scope, $rootScope, $stateParams, User, Product, ngCart) {

  ngCart.setTaxRate(15);
  ngCart.setShipping(17.70);

  console.log('this is the cart controller');
  const vm = this;

  // console.log('Error because no product on cart page');
  console.log($state);

  Product.get($stateParams)
  .$promise
  .then((data) => {
    vm.product = data;
    // console.log('product saved in vm');
  });

  User.get({ id: $auth.getPayload().userId })
    .$promise
    .then((data) => {
      vm.user = data;
      console.log(vm.user.cart);
      vm.all = vm.user.cart;
      // console.log('user saved in vm');
    });
  // vm.all = vm.user.cart;
  // console.log(vm.all);

  vm.addToCart = addToCart;
  function addToCart(product) {
    if (!$rootScope.currentUser) {
      console.log('You must log in to add product to cart.');
    }

    var elementIndex = vm.user.cart.map(function(item) {return item.id}).indexOf(product.id);

    var objectFound = vm.user.cart[elementIndex];
    console.log(objectFound);

    if (!objectFound) {
      // User.update({query}, { $push: { cart: { $each: membersListToAdd } } }, options, callback)
      vm.user.cart.push({
        name: product.name,
        price: product.price,
        id: product.id,
        quantity: 1
      });
      vm.user.$update();
      // vm.user.$update().then(() => $state.go('cart'));
      console.log(vm.user.cart);
      console.log('added product to cart');
    } else {
      console.log('found product in cart already, adding one more');
      objectFound.quantity++;
      vm.user.$update().then(() => $state.go('cart'));

    }
    console.log(vm.user.cart);
  }
}
