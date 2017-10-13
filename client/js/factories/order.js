angular
  .module('vinoApp')
  .factory('Order', Order);

Order.$inject = ['$resource'];
function Order($resource) {
  const Order = new $resource('/api/orders/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });

  return Order;
}
