angular
  .module('meanApp')
  .factory('Product', Product);

Product.$inject = ['$resource'];
function Product($resource) {
  console.log('hello from factory');
  const Product = new $resource('/api/products/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });

  Object.defineProperty(Product.prototype, 'firstName', {
    get: function(){
      if (this.name) {
        return this.name.split(' ')[0];
      }
    }
  });

  return Product;
}
