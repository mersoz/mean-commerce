angular
  .module('meanApp')
  .controller('ProductsIndexCtrl', ProductsIndexCtrl)
  .controller('ProductsShowCtrl', ProductsShowCtrl);

ProductsIndexCtrl.$inject = ['Product', '$http', '$scope', '$resource'];
function ProductsIndexCtrl(Product, $http, $scope, $resource) {
  // const Product = $resource('/api/products');
  const vm = this;
  vm.all = [];
  // vm.newProduct = {};

  productsIndex();
  function productsIndex() {
    $http.get('http://localhost:3000/api/products')
      .then((response) => {
        console.log(response);
        vm.all = response.data;
      });
  }

  vm.create = createProduct;
  function createProduct() {
    $http.post('http://localhost:3000/api/products', vm.newProduct)
    .then((response) => {
      vm.all.push(response.data);
      vm.newProduct = {};
    });
  }

  vm.delete = productsDelete;
  function productsDelete(product) {
    $http.delete(`http://localhost:3000/api/products/${product.id}` )
      .then((response) => {
        const index = vm.all.indexOf(product);
        vm.all.splice(index, 1);
      });
  }
}


ProductsShowCtrl.$inject = ['$http', '$stateParams', '$state'];
function ProductsShowCtrl($http, $stateParams, $state) {
  const vm = this;

  productsShow();
  function productsShow(product) {
    $http.get(`http://localhost:3000/api/products/${$stateParams.id}`)
      .then((response) => {
        vm.product = response.data;
      });

  }

  vm.update = updateProduct;
  function updateProduct() {
    // vm.product;


  }
}
