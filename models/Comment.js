const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create Project model and datatypes, including the user_id foreign key.
class Comment extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Comment: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
