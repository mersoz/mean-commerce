angular
  .module('meanApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth', 'User'];
function MainCtrl($rootScope, $state, $auth, User) {
  const vm = this;

  vm.isAuthenticated = $auth.isAuthenticated;
  //
  // console.log(vm.isAuthenticated);

  if($auth.getPayload()) {
    vm.currentUserId = $auth.getPayload().userId;
    User
      .get({ id: vm.currentUserId })
      .$promise
      .then((user) => {
        console.log(user);
        vm.currentUser = user;
        $rootScope.currentUser = user;

        // vm.isAuthenticated = true;
      });
  }

  vm.logout = logout;

  function logout() {
    $auth.logout();
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
}
