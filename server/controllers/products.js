var Product = require('../models/product');

function indexRoute(req, res, next) {
  Product
    .find()
    .exec()
    .then((products) => res.status(200).json(products))
    .catch(next);
}

function createRoute(req, res, next) {
  Product
    .create(req.body)
    .then((product) => res.status(201).json(product))
    .catch(next);
}

function showRoute(req, res, next) {
  Product
    .findById(req.params.id)
    .exec()
    .then((product) => {
      if(!product) return res.notFound();
      res.status(200).json(product);
    })
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

function updateRoute(req, res, next) {
  Product
    .findById(req.params.id)
    .exec()
    .then((product) => {
      if(!product) return res.notFound();
      for(const field in req.body) {
        product[field] = req.body[field];
      }
      return product.save();
    })
    .then((product) => res.status(200).json(product))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
