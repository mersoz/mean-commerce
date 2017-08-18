var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  username: String,
  email: String,
  first_name: String,
  last_name: Number
});
