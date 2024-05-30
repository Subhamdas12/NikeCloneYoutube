const { Cart } = require("../models/Cart");

exports.addToCart = async (req, res) => {
  try {
    const { id } = req.user;
    const cart = new Cart({ ...req.body, user: id });
    const doc = await cart.save();
    const element = await Cart.findById(doc._id).populate("product");
    res.status(201).json(element);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.fetchCart = async (req, res) => {
  const { id } = req.user;
  try {
    const cart = await Cart.find({ user: id }).populate("product");
    res.status(200).json(cart);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.deletFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndDelete(id);
    res.status(200).json(cart);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.updateCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndUpdate(id, req.body, { new: true });
    const result = await cart.populate("product");
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
