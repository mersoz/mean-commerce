angular
  .module('meanApp')
  .controller('ProductsIndexCtrl', ProductsIndexCtrl)
  .controller('ProductsShowCtrl', ProductsShowCtrl);

ProductsIndexCtrl.$inject = ['Product', '$http', '$scope', '$state', '$resource'];
function ProductsIndexCtrl(Product, $http, $scope, $state, $resource) {
  // const Product = $resource('/api/products');
  const vm = this;
  vm.all = Product.query();

  vm.create = productsCreate;
  function productsCreate() {
    $http.post('http://localhost:3000/api/products', vm.newProduct)
    .then((response) => {
      vm.all.push(response.data);
      vm.newProduct = {};
    });
  }
}

ProductsShowCtrl.$inject = ['User', 'Product', '$http', '$stateParams', '$state', '$rootScope', '$auth', 'ngCart'];
function ProductsShowCtrl(User, Product, $http, $stateParams, $state, $rootScope, $auth, ngCart) {
  const vm = this;

  if ($rootScope.currentUser) {
    console.log($rootScope.currentUser);
  } else {
    console.log('Please log in.');
  };

  Product.get($stateParams)
    .$promise
    .then((data) => {
      console.log(data);
      vm.product = data;
    });

  vm.update = productsUpdate;
  function productsUpdate() {
    console.log(vm.product);

    vm.product
      .$update()
      .then(() => $state.go('productsShow', $stateParams));
  }

  vm.delete = productsDelete;
  function productsDelete() {
    vm.product
      .$remove()
      .then(() => $state.go('productsIndex'));
  }


}
