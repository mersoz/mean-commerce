angular
  .module('meanApp')
  .controller('ProductsIndexCtrl', ProductsIndexCtrl);
  // .controller('ProductsNewCtrl', ProductsNewCtrl);

ProductsIndexCtrl.$inject = ['$http', '$scope', '$resource'];
function ProductsIndexCtrl($http, $scope, $resource) {
  // const Product = $resource('/api/products');
  const vm = this;
  vm.all = [];
  // vm.newProduct = {};

  productsIndex();
  function productsIndex() {
    $http.get('http://localhost:3000/api/products')
      .then((response) => {
        console.log(response.data);
        vm.all = response.data;
      });
  }

  vm.create = createProduct;
  // $scope.createProduct = createProduct;
  function createProduct() {
    $http.post('http://localhost:3000/api/products', vm.newProduct)
    .then((response) => {
      vm.all.push(response.data);
      vm.newProduct = {};
    });
  }

  vm.delete = productsDelete;
  function productsDelete(product) {
    // console.log(req.params);
    console.log(`Product: ${product.id}`);
    $http.delete(`http://localhost:3000/api/products/${product.id}` )
      .then((response) => {
        console.log(`Response: ${response.data}`);
        const index = vm.all.indexOf(product);
        vm.all.splice(index, 1);
      });
  }
  // function productsDelete() {
  //   vm.product
  //     .$remove()
  //     .then(() => $state.go('tracksIndex'));
  // }
  //
  // vm.delete = productsDelete;

    // console.log(this);
    // const product = new Product();
    // product.name = $scope.productName;
    // product.$save(function(result) {
    //   $scope.products.push(result);
    //   vm.all.push(result)
    //   $scope.productName = '';
    // });

}
  // Product.query(function(results) {
  //   // $scope.products = results;
  //   vm.all = results;
  //   console.log(results);
  // });
  //

// ProductsNewCtrl.$inject = ['$http', '$scope', '$resource'];
// function ProductsNewCtrl($http, $scope, $resource) {
//   // console.log(vm.newProduct);
//   // $http.post('http://localhost:3000/api/products', vm.newProduct)
//   // .then((response) => {
//   //   vm.all.push(response.data);
//   //   // vm.newProduct = {};
//   // });
//
//
// }
  // vm.productsCreate = productsCreate;
  // }
  //
  // vm.productsDelete = productsDelete;
  // function productsDelete(product) {
  //   $http.delete(`http://localhost:3000/api/products/${product._id}`)
  //     .then(() => {
  //       const index = vm.all.indexOf(product);
  //       vm.all.splice(index, 1);
  //     });
  // }

  // $scope.products = [];
  //
  // $scope.createProduct = createProduct;
  // function createProduct() {
  //   console.log(this);
  //   const product = new Product();
  //   product.name = $scope.productName;
  //   product.$save(function(result) {
  //     $scope.products.push(result);
  //     vm.all.push(result)
  //     $scope.productName = '';
  //   });
  // }
// }
