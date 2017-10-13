angular
  .module('vinoApp')
  .controller('OrdersIndexCtrl', OrdersIndexCtrl)
  .controller('OrdersNewCtrl', OrdersNewCtrl)
  .controller('OrdersShowCtrl', OrdersShowCtrl)
  .controller('OrdersEditCtrl', OrdersEditCtrl);

OrdersIndexCtrl.$inject = ['Order', '$http', '$scope', '$state', '$resource'];
function OrdersIndexCtrl(Order, $http, $scope, $state, $resource) {
  const vm = this;
  vm.all = Order.query();
}

OrdersNewCtrl.$inject = ['Order', '$http', '$scope', '$state', '$resource'];
function OrdersNewCtrl(Order, $http, $scope, $state, $resource) {
  // const Order = $resource('/api/orders');
  const vm = this;
  vm.all = Order.query();

  vm.create = ordersCreate;
  function ordersCreate() {
    $http.post('http://localhost:3000/api/orders', vm.newOrder)
    .then((response) => {
      vm.all.push(response.data);
      vm.newOrder = {};
      $state.go('ordersIndex');
    });
  }
}

OrdersShowCtrl.$inject = ['User', 'Order', '$http', '$stateParams', '$state', '$rootScope', '$auth', 'ngCart'];
function OrdersShowCtrl(User, Order, $http, $stateParams, $state, $rootScope, $auth, ngCart) {
  const vm = this;

  if ($rootScope.currentUser) {
    console.log($rootScope.currentUser);
  } else {
    console.log('Please log in.');
  };

  Order.get($stateParams)
    .$promise
    .then((data) => {
      console.log(data);
      vm.order = data;
    });
}

OrdersEditCtrl.$inject = ['User', 'Order', '$http', '$stateParams', '$state', '$rootScope', '$auth'];
function OrdersEditCtrl(User, Order, $http, $stateParams, $state, $rootScope, $auth) {
  const vm = this;
  console.log('edit order');

  Order.get($stateParams)
    .$promise
    .then((data) => {
      console.log(data);
      vm.order = data;
    });

  vm.update = ordersUpdate;
  function ordersUpdate() {
    vm.order
      .$update()
      .then(() => $state.go('ordersShow', $stateParams));
  }

  vm.delete = ordersDelete;
  function ordersDelete() {
    vm.order
      .$remove()
      .then(() => $state.go('ordersIndex'));
  }

}
