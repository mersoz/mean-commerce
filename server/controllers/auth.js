const { secret } = require('../config/environment');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

function register(req, res, next) {
  User
    .create(req.body)
    .then(() => res.json({ message: 'Registration successful'}))
    .catch(next);
}

function login(req, res, next) {
  console.log(req.body);
  User
    .findOne({ email: req.body.email })
    .then((user) => {

      if(!user || !user.validatePassword(req.body.password)) return res.unauthorized();
      const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr' });
      res.json({ token, message: `Welcome back ${user.username}`, user: `${user.id}` });

    })
    .catch(next);
}

module.exports = {
  register,
  login
};
