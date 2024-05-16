const mongoose = require("mongoose");
const { Schema } = mongoose;
const colorSchema = new Schema({
  name: { type: String, require: true, unique: true },
  class: { type: String, require: true, unique: true },
  selectedClass: { type: String, require: true, unique: true },
});

exports.Color = mongoose.model("Color", colorSchema);
