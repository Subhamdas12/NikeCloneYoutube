const { Color } = require("../models/Color");

exports.fetchColors = async (req, res) => {
  try {
    const colors = await Color.find({}).exec();
    res.status(200).json(colors);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
