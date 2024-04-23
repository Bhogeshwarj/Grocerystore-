// productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  },
    manufactureDate:{
        type:Date,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
  },
);

module.exports = mongoose.model('Product', productSchema);
