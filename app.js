const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ! connection to the mongodb database...
mongoose.connect(
  "mongodb://localhost/blog_website",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },)
  .then(() => console.log("connected successfully to mongodb server locally in 'blog_website' database"))
  .catch((err) => console.log(err));



//!  middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



//! routes
app.use(require("./routes/index"))
app.use(require("./routes/compose"))
app.use(require("./routes/blog"))



//! server configurations are here....

app.listen(3000, () => console.log("Server started listening on port:3000 search: 'localhost:3000/' in browser"));
