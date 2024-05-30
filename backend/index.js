const express = require("express");
const server = express();
const port = 8080;
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const productRouter = require("./routes/Product");
const colorsRouter = require("./routes/Color");
const sizesRouter = require("./routes/Size");
const categoriesRouter = require("./routes/Category");
const authRouter = require("./routes/Auth");
const cartRouter = require("./routes/Cart");
const { User } = require("./models/User");
const {
  sanitizeUser,
  cookieExtractor,
  isAuth,
} = require("./constants/services");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const cookieParser = require("cookie-parser");
server.use(
  session({
    secret: "keyboard cat",
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
  })
);
server.use(passport.authenticate("session"));
const opts = {};
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = "hello";
server.use(cookieParser());
server.use(bodyParser.json());
server.use("/products", productRouter.router);
server.use("/colors", colorsRouter.router);
server.use("/sizes", sizesRouter.router);
server.use("/categories", categoriesRouter.router);
server.use("/auth", authRouter.router);
server.use("/cart", isAuth(), cartRouter.router);

passport.use(
  "Local",
  new LocalStrategy({ usernameField: "email" }, async function (
    email,
    password,
    done
  ) {
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(null, false, { message: "Invalid Credentials" });
      }

      crypto.pbkdf2(
        password,
        user.salt,
        310000,
        32,
        "sha256",
        async function (err, hashedPassword) {
          if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
            return done(null, false, { message: "Invalid Credentials" });
          }
          token = jwt.sign(sanitizeUser(user), "hello");

          return done(null, { ...sanitizeUser(user), token });
        }
      );
    } catch (error) {
      done(err);
    }
  })
);

passport.use(
  "jwt",
  new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
      const user = await User.findById({ _id: jwt_payload.id });
      if (user) {
        return done(null, sanitizeUser(user));
      } else {
        return done(error, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, sanitizeUser(user));
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nikeCloneApplication");
}
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
