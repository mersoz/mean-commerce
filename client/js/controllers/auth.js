angular
  .module('vinoApp')
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

  if ($auth.isAuthenticated()) {
    $state.go('productsIndex')
    console.log('Already logged in, logout before logging into another account.');
  }

  vm.submit = submit;
  function submit() {
    $auth.login(vm.credentials)
      .then((response) => {
        $window.location.reload();
      });
  }

}
