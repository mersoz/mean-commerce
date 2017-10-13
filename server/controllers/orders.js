var Order = require('../models/order');

function indexRoute(req, res, next) {
  Order
    .find()
    .exec()
    .then((orders) => res.status(200).json(orders))
    .catch(next);
}

function createRoute(req, res, next) {
  Order
    .create(req.body)
    .then((order) => res.status(201).json(order))
    .catch(next);
}

function showRoute(req, res, next) {
  Order
    .findById(req.params.id)
    .exec()
    .then((order) => {
      if(!order) return res.notFound();
      res.status(200).json(order);
    })
    .catch(next);
}

function deleteRoute(req, res, next) {
  console.log(req.params);
  Order
    .findById(req.params.id)
    .exec()
    .then((order) => {
      if(!order) return res.notFound();
      return order.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function updateRoute(req, res, next) {
  Order
    .findById(req.params.id)
    .exec()
    .then((order) => {
      if(!order) return res.notFound();
      for(const field in req.body) {
        order[field] = req.body[field];
      }
      return order.save();
    })
    .then((order) => res.status(200).json(order))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
