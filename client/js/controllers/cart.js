angular
  .module('meanApp')
  .controller('CartCtrl', CartCtrl);

CartCtrl.$inject = ['User', 'Product', '$http', '$auth', '$state', '$rootScope', '$stateParams'];
function CartCtrl(User, Product, $http, $auth, $state, $rootScope, $stateParams) {

  console.log('this is the cart controller');
  const vm = this;
  var temp_id = $rootScope.currentUser.id;

  Product.get($stateParams)
  .$promise
  .then((data) => {
    vm.product = data;
    console.log('product saved in vm');
  });

  User.get({ id: $auth.getPayload().userId })
    .$promise
    .then((data) => {
      vm.user = data;
      console.log('user saved in vm');
    });
  // vm.all = $rootScope.currentUser.cart;
  // console.log(vm.all);

  vm.addToCart = addToCart;
  function addToCart(product) {
    if (!$rootScope.currentUser) {
      console.log('You must log in to add product to cart.');
    }
    console.log(product);
    // console.log($stateParams);

    var elementIndex = vm.user.cart.map(function(item) {return item.id}).indexOf(product.id);

    console.log(elementIndex);

    var objectFound = vm.user.cart[elementIndex];

    if (!objectFound) {

      // User.update({query}, { $push: { cart: { $each: membersListToAdd } } }, options, callback)


      vm.user.cart.push({
        name: product.name,
        price: product.price,
        id: product.id,
        quantity: 1
      });
      vm.user.$update().then(() => $state.go('about'));
      console.log(vm.user.cart);
      console.log('added product to cart');
    } else {
      console.log('found product in cart already, adding one more');
      objectFound.quantity++;
    }
    console.log(vm.user.cart);
  }
}
