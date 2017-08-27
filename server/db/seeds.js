const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Product = require('../models/product');
const User = require('../models/user');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI);

Product.collection.drop();
User.collection.drop();

User
  .create([{
    username: 'admin',
    email: 'admin@vino.com',
    password: 'admin',
    passwordConfirmation: 'admin',
    first_name: 'Lorem',
    last_name: 'Ipsum',
    cart: []

  }, {
    username: 'janedoe',
    email: 'janedoe@vino.com',
    password: 'a',
    passwordConfirmation: 'a',
    first_name: 'Jane',
    last_name: 'Doe',
    cart: []

  }])
  .then((users) => {
      console.log(`${users.length} users created`);
      return Product
      // Product
        .create([{
          name: 'Cabarnet Sauvignon',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          price: 30,
          image: 'http://via.placeholder.com/300x150',
          inStock: 5
        }, {
          name: 'Pinot noir',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          price: 30,
          image: 'http://via.placeholder.com/300x150',
          inStock: 5
        }, {
          name: 'Merlot',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          price: 30,
          image: 'http://via.placeholder.com/300x150',
          inStock: 5
        }, {
          name: 'Sauvignon blanc',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          price: 30,
          image: 'http://via.placeholder.com/300x150',
          inStock: 5
        }, {
          name: 'Shiraz',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          price: 30,
          image: 'http://via.placeholder.com/300x150',
          inStock: 5
        }, {
          name: 'Riesling',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          price: 30,
          image: 'http://via.placeholder.com/300x150',
          inStock: 5
        }, ]);
      })
  .then((products) => console.log(`${products.length} vino products created.`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
