const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, require: true, unique: true },
    password: { type: Buffer, require: true },
    role: { type: String, require: true, default: "User" },
    addresses: { type: [Schema.Types.Mixed] },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    dateOfBirth: { type: String, default: "" },
    salt: Buffer,
    resetPasswordToken: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

exports.User = mongoose.model("User", userSchema);
