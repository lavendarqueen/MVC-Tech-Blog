const router = require("express").Router();
const { Comment, User, Blog } = require("../../models");

//http://localhost:3001/api/comment
router.post("/", async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment_content: req.body.comment_content,
      user_id: req.body.user_id,
      blog_id: req.body.blog_id,
    });
    res.status(500).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
