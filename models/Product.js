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
  material: String,
  color: String,
  description: String,
  washCare: String,
  inventory:[{
    quantity: Number,
    size: String,
    discount: String
  }],
  price: String,
  coupon: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);
