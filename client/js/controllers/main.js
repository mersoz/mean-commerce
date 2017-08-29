angular
  .module('meanApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$window', '$scope', '$rootScope', '$state', '$auth', 'User'];
function MainCtrl($window, $scope, $rootScope, $state, $auth, User) {
// MainCtrl.$inject = ['$scope', '$rootScope', '$route', '$routeParams', '$location', '$state', '$auth', 'User'];
// function MainCtrl($scope, $rootScope, $route, $routeParams, $location, $state, $auth, User) {
  // $scope.$route = $route;
  // $scope.$location = $location;
  // $scope.$routeParams = $routeParams;

  const vm = this;

  // Something wrong with $auth.isAuthenticated
  // console.log($auth.isAuthenticated);
  vm.isAuthenticated = $auth.isAuthenticated;
  // if ($auth.isAuthenticated) {
  //     console.log('is authenticated');
  // } else {
  //   console.log('not authenticated');
  //
  // }
  // vm.isAuthenticated = false;

  console.log($auth.getPayload());
  if($auth.getPayload()) {
    console.log('user logged in = payload found');
    vm.currentUserId = $auth.getPayload().userId;
    User
      .get({ id: vm.currentUserId })
      .$promise
      .then((user) => {
        console.log(user);
        vm.currentUser = user;

        $scope.currentUser = user;
        $rootScope.currentUser = user;

        // vm.isAuthenticated = true;
      });
      console.log($scope.currentUser);

  } else {
    console.log('no payload found');
  }
  console.log($rootScope.currentUser);
  console.log($scope.currentUser);

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
}
