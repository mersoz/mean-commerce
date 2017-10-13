angular
  .module('vinoApp')
  .controller('NewsletterCtrl', NewsletterCtrl);

  NewsletterCtrl.$inject = ['Newsletter', '$http', '$scope', '$state', '$resource'];
  function NewsletterCtrl(Newsletter, $http, $scope, $state, $resource) {
    // const Product = $resource('/api/products');
    const vm = this;
    // Newsletter.query();

    vm.submit = addToNewsletter;
    function addToNewsletter() {
      // console.log(vm.email);
      //
      // vm.email
      //   .$update()
      //   .then(() => $state.go('productsShow', $stateParams));
    }


  }
