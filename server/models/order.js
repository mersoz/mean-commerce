const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  referenceNumber: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref:'User' },
  deliverTo: {
    recipient: { type: String },
    phone: { type: String },
    addressType: { type: String },
    fullAddress: { type: String },
    city: { type: String },
    borough: { type: String },
    postcode: { type: String }
   },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
      quantity: { type: Number }
    }
  ],
  orderCost: { type: Number },
  paymentMethod: { type: String },
  paymentStatus: { type: Boolean }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
