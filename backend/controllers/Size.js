const { Size } = require("../models/Size");

exports.fetchSizes = async (req, res) => {
  try {
    const sizes = await Size.find({}).exec();
    res.status(200).json(sizes);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
