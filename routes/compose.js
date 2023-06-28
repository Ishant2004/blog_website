const router = require("express").Router();
const Blog = require("../models/Blog");

router.get("/compose", (req, res) => {
    res.render("composeBlog");
})

router.post("/compose", (req, res) => {
    const { title, content } = req.body;

    // * check for the missing fields!
    if (!title || !content)
      return res.send("Please enter all the required fields");

    const newBlog = new Blog({ title, content });

    // save the blog to the database
    newBlog
      .save()
      .then(() => {
        console.log("Blog Saved Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
});

module.exports = router;
