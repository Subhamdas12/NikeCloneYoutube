const { User } = require("../models/User");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { sanitizeUser } = require("../constants/services");
exports.createUser = async (req, res) => {
  let user = await User.find({ email: req.body.email });
  if (user.length) {
    return res.status(400).json({ message: "User already exists" });
  }
  try {
    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(
      req.body.password,
      salt,
      310000,
      32,
      "sha256",
      async function (err, hashedPassword) {
        user = new User({
          ...req.body,
          password: hashedPassword,
          salt,
        });
        const doc = await user.save();

        req.login(sanitizeUser(user), function (err) {
          if (err) {
            res.status(400).json(err);
          } else {
            const token = jwt.sign(sanitizeUser(doc), "hello");
            res
              .cookie("jwt", token, {
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
                httpOnly: true,
              })
              .status(201)
              .json(sanitizeUser(doc));
          }
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.loginUser = (req, res) => {
  const user = req.user;
  res
    .cookie("jwt", user.token, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
    })
    .status(201)
    .json({ id: user.id, role: user.role });
};

exports.checkUser = (req, res) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.sendStatus(400);
  }
};
