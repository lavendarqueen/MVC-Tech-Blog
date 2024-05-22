const router = require("express").Router();
const { User, Blog, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blogs.findAll({ include: [User] });
    const blog = blogData.map((blog) => blog.get({ plain: true }));
    res.render("home", { blogs });
  } catch (error) {}
});
