const User = require("./User");
const Comment = require("./Comment");
const Blogs = require("./Blogs");
// Creates a relationship between User and Project model, with the User having a "has many" relationship with Project model.
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Creates a relationship between User and Project model, with a "belongs to" relationship of the Project to the User.
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Blogs, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blogs.belongsTo(User, {
  foreignKey: "user_id",
});

Blogs.hasMany(Comment, { foreignKey: "blog_id" });
Comment.belongsTo(Blogs);

module.exports = { User, Comment, Blogs };
