var Product = require('../models/product');

function indexRoute(req, res, next) {
  Product
    .find()
    .exec()
    .then((products) => res.status(200).json(products))
    .catch(next);
  // console.log('index');
  // Product.find({}, function(err, results) {
  //   console.log(results);
  //   res.json(results);
  // });
}

function createRoute(req, res, next) {
    // var product = new Product(req.body);
    // product.save(function(err, result) {
    //   res.json(result);
    // });
    // console.log(req);
  Product
    .create(req.body)
    .then((product) => res.status(201).json(product))
    .catch(next);
}

function deleteRoute(req, res, next) {
  console.log(req.params);
  Product
    .findById(req.params.id)
    .exec()
    .then((product) => {
      if(!product) return res.notFound();

      return product.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

// function deleteRoute(product) {
  // $http.delete(`http://localhost:3000/products/${product.id}`)
  //   .then(() => {
  //     const index = vm.all.indexOf(product);
  //     vm.all.splice(index, 1);
  //   });
// }

// module.exports.index = function(req,res) {
//   Product.find({}, function(err, results) {
//     res.json(results);
//   });
// }

// module.exports.create = function (req, res) {

// }

module.exports = {
  index: indexRoute,
  create: createRoute,
  // show: showRoute,
  // update: updateRoute,
  delete: deleteRoute
};
