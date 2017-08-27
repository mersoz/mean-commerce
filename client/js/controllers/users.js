angular
  .module('meanApp')
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersIndexCtrl.$inject = ['User', '$http', '$scope', '$state', '$resource'];
function UsersIndexCtrl(User, $http, $scope, $state, $resource) {
  const vm = this;
  vm.all = User.query();

  vm.create = usersCreate;
  function usersCreate() {
    $http.post('http://localhost:3000/api/users', vm.newUser)
    .then((response) => {
      vm.all.push(response.data);
      vm.newUser = {};
    });
  }
}

UsersShowCtrl.$inject = ['User', '$http', '$stateParams', '$state'];
function UsersShowCtrl(User, $http, $stateParams, $state) {
  const vm = this;

  User.get($stateParams)
    .$promise
    .then((data) => {
      vm.user = data;
      delete vm.user.password;
      delete vm.user.passwordConfirmation;
    });

  vm.update = usersUpdate;
  function usersUpdate() {
    vm.user
      .$update()
      .then(() => $state.go('usersShow', $stateParams));
  }

  vm.delete = usersDelete;
  function usersDelete() {
    vm.user
      .$remove()
      .then(() => $state.go('usersIndex'));
  }
}

UsersEditCtrl.$inject = ['User', '$http', '$stateParams', '$state'];
function UsersEditCtrl(User, $http, $stateParams, $state) {
  const vm = this;
  // vm.user = User.get($stateParams);

  User.get($stateParams)
    .$promise
    .then((data) => {
      vm.user = data;
      // delete vm.user.password;
      // delete vm.user.passwordConfirmation;
      console.log(vm.user);
    });

  vm.submit = usersUpdate;
  function usersUpdate() {
    console.log(vm.user);
    vm.user
      .$update()
      .then(() => $state.go('usersShow', $stateParams));
  }
}
