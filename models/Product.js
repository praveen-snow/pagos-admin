var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  sku: String,
  title: String,
  model: String,
  images: [
    {
      image: String
    }
  ],
  color: String,
  description: String,
  washCare: String,
  small: Number,
  medium: Number,
  large: Number,
  xlarge: Number,
  price: String,
  coupon: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);
