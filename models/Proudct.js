//products => {id, title, price, stock, expired_date, main_image, images: [], description, properties: [objectid]}
const mongoose = require("mongoose");
//schema
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true },
  expired: { type: Boolean, required: true },
});

//model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
