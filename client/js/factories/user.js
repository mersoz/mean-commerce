angular
  .module('meanApp')
  .factory('User', User);

User.$inject = ['$resource'];
function User($resource) {
  const User = new $resource('/api/users/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });

  return User;
}
