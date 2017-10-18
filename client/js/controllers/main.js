angular
  .module('vinoApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['User', '$window', '$scope', '$rootScope', '$state', '$auth'];
function MainCtrl(User, $window, $scope, $rootScope, $state, $auth) {
  const vm = this;

  // Remove expired token from local storage
  if ($auth.getPayload() && !$auth.isAuthenticated()) {
    $auth.removeToken();
  } else if ($auth.isAuthenticated()) {
    console.log('A user is logged in:');
    User
      .get({ id: $auth.getPayload().userId })
      .$promise
      .then((user) => {
        console.log(user);
        vm.currentUser = user;
        // $scope.currentUser = user;
        // $rootScope.currentUser = user;
      });
  } else {
    console.log('No payload found...');
  }

  vm.isAuthenticated = $auth.isAuthenticated;

  // if($auth.isAuthenticated){
  //   console.log('auth is authenticated');
  // } else if (true) {
  // }
  // if(vm.isAuthenticated){
  //   console.log('vm is authenticated');
  // }
  // console.log($auth.getPayload());

  if (vm.isAuthenticated()) {

  } else {
    console.log('not authenticated');
  }

  vm.logout = logout;
  function logout() {
    $auth.logout();
    $window.location.reload();
    $state.go('productsIndex');
  }

  $rootScope.$on('error', (e, err) => {
    vm.stateHasChanged = false;
    vm.message = err.data.message;

    if(err.status === 401) $state.go('login');
  });

  $rootScope.$on('$stateChangeSuccess', (e, toState) => {
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    vm.stateName = toState.name;
    console.log(stateName);

  });

  // console.log(vm.stateName);
}
