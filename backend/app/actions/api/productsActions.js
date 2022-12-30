const Product = require("../../db/models/product");

module.exports = {
  async getAllProducts(req, res) {
    const doc = await Product.find({});

    res.status(200).json(doc);
  },

  async getProduct(req, res) {
    const id = req.params.id;
    try {
      const product = await Product.findOne({ _id: id });
      res.status(200).json(product);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },

  async saveProduct(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;

    let newProduct;

    try {
      newProduct = new Product({ title, description, price });
      await newProduct.save();
    } catch (err) {
      res.status(422).json({ message: err.message });
    }

    res.status(201).json(newProduct);
  },
};
