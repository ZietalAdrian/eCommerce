const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  title: String,
  description: String,
  price: Number,
});

module.exports = Product;