const router = require("express").Router();
// Import the Project model from the models folder
const { Comment } = require("../../models");

// If a POST request is made to /api/projects, a new project is created. If there is an error, the function returns with a 400 error.
router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// If a DELETE request is made to /api/projects/:id, that project is deleted.
router.delete("/:id", async (req, res) => {
  try {
    const blogData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: "No blog found with this id!" });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
