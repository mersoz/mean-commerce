angular
  .module('vinoApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['User', '$window', '$scope', '$rootScope', '$state', '$auth'];
function MainCtrl(User, $window, $scope, $rootScope, $state, $auth) {
  const vm = this;

  if ($auth.getPayload() && !$auth.isAuthenticated()) {
    console.log('Removing expired token from local storage.');
    $auth.removeToken();
  } else {
    console.log('NO payload found.');
  }

  // vm.isAuthenticated = $auth.isAuthenticated;


  // if($auth.isAuthenticated){
  //   console.log('auth is authenticated');
  // } else if (true) {
  //
  // }
  //
  // vm.isAuthenticated = $auth.isAuthenticated;
  //
  // if(vm.isAuthenticated){
  //   console.log('vm is authenticated');
  // }
  //
  // console.log($auth.getPayload());
  //
  // if(vm.isAuthenticated()) {
  //   console.log('user logged in = payload found');
  //   vm.currentUserId = $auth.getPayload().userId;
  //   User
  //     .get({ id: vm.currentUserId })
  //     .$promise
  //     .then((user) => {
  //       console.log(user);
  //       vm.currentUser = user;
  //       $scope.currentUser = user;
  //       $rootScope.currentUser = user;
  //     });
  // } else {
  //   console.log('no payload found');
  // }

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
