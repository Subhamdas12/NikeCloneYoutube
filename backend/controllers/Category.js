const { Category } = require("../models/Category");

exports.fetchCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).exec();
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
