const express = require("express");
const server = express();
const port = 8080;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRouter = require("./routes/Product");
server.use(bodyParser.json());
server.use("/products", productRouter.router);
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nikeCloneApplication");
}
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
