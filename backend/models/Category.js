const mongoose = require("mongoose");
const { Schema } = mongoose;
const categorySchema = new Schema({
  label: { type: String, require: true, unique: true },
  value: { type: String, require: true, unique: true },
});

exports.Category = mongoose.model("Category", categorySchema);
