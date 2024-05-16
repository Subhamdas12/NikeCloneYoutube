const { Product } = require("../models/Product");

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  product.discountPrice = Math.round(
    product.price * (1 - product.discount / 100)
  );
  console.log(product);
  try {
    const doc = await product.save();
    console.log(doc);
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.fetchProducts = async (req, res) => {
  let query = Product.find({});
  try {
    const docs = await query.exec();
    res.status(200).json(docs);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.updateProductById = async (req, res) => {
  const { id } = req.params;
  try {
    let product = await Product.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    product.discountPrice = Math.round(
      product.price * (1 - product.discount / 100)
    );
    const updateProduct = await product.save();
    res.status(200).json(updateProduct);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.deleteProductById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    let product = await Product.findByIdAndDelete({ _id: id });
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
