const router = require("express").Router();

const userRoutes = require("./userRoutes.js");
const blogRoutes = require("./blogRoutes.js");
const commentRoutes = require("./commentRoutes.js");

//http://localhost:3001/api/user
router.use("/user", userRoutes);
//http://localhost:3001/api/blog
router.use("./blog", blogRoutes);
//http://localhost:3001/api/comment
router.use("./comment", commentRoutes);

module.exports = router;
