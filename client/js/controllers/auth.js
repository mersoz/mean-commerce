angular
  .module('vinoApp')
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl);

RegisterCtrl.$inject = ['$auth', '$state'];
function RegisterCtrl($auth, $state) {
  const vm = this;
  vm.user = {};

  // If already logged in, redirect.
  if ($auth.isAuthenticated()) {
    $state.go('productsIndex')
  }

  vm.submit = submit;
  function submit() {
    $auth.signup(vm.user)
      .then(() => $state.go('login'));
  }
}

LoginCtrl.$inject = ['$window', '$auth', '$state', '$rootScope'];
function LoginCtrl($window, $auth, $state, $rootScope) {
  const vm = this;
  vm.credentials = {};

  // If already logged in, redirect.
  // Alternatively, remove existing token.
  if ($auth.isAuthenticated()) {
    $state.go('productsIndex')
  }

  vm.submit = submit;
  function submit() {
    $auth.login(vm.credentials)
      .then((response) => {
        // Reload window to update the navigation bar
        $window.location.reload();
      });
  }
}
