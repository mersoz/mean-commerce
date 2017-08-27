var User = require('../models/user');

function indexRoute(req, res, next) {
  User
    .find()
    .exec()
    .then((users) => res.status(200).json(users))
    .catch(next);
}

function createRoute(req, res, next) {
  // req.body.createdBy = req.user;

  User
    .create(req.body)
    .then((user) => res.status(201).json(user))
    .catch(next);
}

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      res.status(200).json(user);
    })
    .catch(next);
}

function deleteRoute(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      return user.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function updateRoute(req, res, next) {
  console.log(req.body);
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      for(const field in req.body) {
        user[field] = req.body[field];
      }
      console.log(user);
      return user.save();
    })
    .then((user) => res.status(201).json(user))
    .catch(next);

}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
