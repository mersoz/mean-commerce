const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  price: { type: Number },
  inStock: { type: Number }
});

module.exports = mongoose.model('Product', productSchema);
