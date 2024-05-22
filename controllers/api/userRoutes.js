const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

//http://localhost:3001/api/user/:id
router.get("/", async (req, res) => {
  try {
    const userBlogData = await User.findByPk(req.params.id, {
      include: [{ model: Blog }, { model: Comment }],
    });

    if (!userBlogData) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }

    const blogs = userBlogData.map((blog) => blog.get({ plain: true }));

    res.render("dashboard", { blogs, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/user
router.post("/", async (req, res) => {
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/user/:id
router.put("/", async (req, res) => {
  try {
    const userData = await User.update(
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
      {
        where: {
          id: req.params.id,
        },
        individualHooks: true,
      }
    );
    if (!userData) {
      res.status(404).json({ message: "No user found with that id! " });
      return;
    }
    res.status(200).json(err);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;