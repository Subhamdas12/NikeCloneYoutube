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
  // {
  //   gender: 'Women,Men,Unisex',
  //   kids: 'Boys',
  //   colors: 'Orange',
  //   category: 'Athletic Gear,Duffel Bags',
  //   size: '6.5,7.5,14,11',
  //   _sort: 'discountPrice',
  //   _order: 'asc'
  // }
  let query = Product.find({});
  if (req.query.colors) {
    //we are going to filter with the colors
    query = query.find({
      colors: { $elemMatch: { name: { $in: req.query.colors.split(",") } } },
    });
  }
  if (req.query.kids) {
    //we are going to filter with the kids
    query = query.find({
      kids: { $in: req.query.kids.split(",") },
    });
  }
  if (req.query.gender) {
    //we are going to filter with the gender
    query = query.find({
      gender: { $in: req.query.gender.split(",") },
    });
  }
  if (req.query.category) {
    //we are going to filter with the category
    query = query.find({
      category: { $in: req.query.category.split(",") },
    });
  }
  if (req.query.size) {
    //we are going to filter with the size
    query = query.find({
      sizes: { $in: req.query.size.split(",") },
    });
  }
  if (req.query._sort && req.query._order) {
    //we are going to filter with the sort and order
    query = query.sort({
      [req.query._sort]: req.query._order,
    });
  }
  try {
    const docs = await query.exec();
    res.status(200).json(docs);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.fetchProductById = async (req, res) => {
  const { id } = req.params;
  console.log("This is working");
  try {
    const product = await Product.findById({ _id: id }).exec();
    res.status(200).json(product);
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
