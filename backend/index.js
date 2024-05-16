const express = require("express");
const server = express();
const port = 8080;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRouter = require("./routes/Product");
const colorsRouter = require("./routes/Color");
const sizesRouter = require("./routes/Size");
const categoriesRouter = require("./routes/Category");
server.use(bodyParser.json());
server.use("/products", productRouter.router);
server.use("/colors", colorsRouter.router);
server.use("/sizes", sizesRouter.router);
server.use("/categories", categoriesRouter.router);
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nikeCloneApplication");
}
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
