const User = require("./User");
const Comment = require("./Comment");
const Blog = require("./Blog");
// Creates a relationship between User and Project model, with the User having a "has many" relationship with Project model.
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Creates a relationship between User and Project model, with a "belongs to" relationship of the Project to the User.
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

Blog.hasMany(Comment, { foreignKey: "blog_id" });
Comment.belongsTo(Blog);

module.exports = { User, Comment, Blog };
