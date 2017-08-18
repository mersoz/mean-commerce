const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  inStock: Number
});

module.exports = mongoose.model('Product', productSchema);
