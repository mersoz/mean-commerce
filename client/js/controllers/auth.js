angular
  .module('meanApp')
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl);

RegisterCtrl.$inject = ['$auth', '$state'];
function RegisterCtrl($auth, $state) {
  const vm = this;
  vm.user = {};

  function submit() {
    $auth.signup(vm.user)
      .then(() => $state.go('login'));
  }

  vm.submit = submit;
}

LoginCtrl.$inject = ['$window', '$auth', '$state', '$rootScope'];
function LoginCtrl($window, $auth, $state, $rootScope) {
  const vm = this;
  vm.credentials = {};

  console.log($rootScope.currentUser);
  if ($rootScope.currentUser) {
    $state.go('productsIndex')
  }

  vm.submit = submit;
  function submit() {
    $auth.login(vm.credentials)
      .then((response) => {
        // console.log(response);
        $window.location.reload();
      });
  }

}
