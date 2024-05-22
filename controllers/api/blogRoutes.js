const router = require("express").Router();
const { Blog, Comment, User } = require("../../models");

//http://localhost:3001/api/blog/:id
router.get("/", async (req, res) => {
  try {
    const blogData = await BlogfindByPk(req.params.id, {
      include: [{ model: Comment }, { model: User }],
    });

    if (!blogData) {
      res.status(404).json({ message: "No blog found with that id!" });
      return;
    }

    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/blog
router.post("/", async (req, res) => {
  try {
    const blogData = await Blog.create({
      title: req.body.title,
      blog_content: req.body.blog_content,
      user_id: req.body.user_id,
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/blog/:id
router.put("/", async (req, res) => {
  try {
    const blogData = await Blog.update(
      {
        title: req.body.title,
        blog_content: req.body.blog_content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!blogData) {
      res.status(404).json({ message: "No blog found with that id!" });
      return;
    }
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/blog/:id
router.delete("/:id", async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: "No blog found with that id!" });
      return;
    }

    res.status(200).json({ message: "No blog found with that id!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
