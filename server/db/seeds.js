const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Product = require('../models/product');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI);

Product.collection.drop();

Product
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
  }, ])

  .then((products) => console.log(`${products.length} vino products created.`))

  .catch((err) => console.log(err))

  .finally(() => mongoose.connection.close());
