const mongoose = require("mongoose");
const { Schema } = mongoose;
const sizeSchema = new Schema({
  label: { type: String, require: true, unique: true },
  value: { type: String, require: true, unique: true },
});

exports.Size = mongoose.model("Size", sizeSchema);
