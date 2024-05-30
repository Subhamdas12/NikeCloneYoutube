const mongoose = require("mongoose");
const { Schema } = mongoose;
const cartSchema = new Schema({
  quantity: { type: Number, require: true },
  product: { type: Schema.Types.ObjectId, ref: "Product", require: true },
  user: { type: Schema.Types.ObjectId, ref: "User", require: true },
  size: { type: String, require: true },
  color: { type: String, require: true },
});
exports.Cart = mongoose.model("Cart", cartSchema);
