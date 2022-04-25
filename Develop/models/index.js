// import models
const User = require("./User");
const Thought = require("./Thought");

// // Users belongsTo Thought
// User.belongsTo(Thought, { foreignKey: "Thought_id" })

// // Categories have many Users
// Thought.hasMany(User, { foreignKey: "Thought_id" })
// // Users belongToMany Tags (through UserTag)
// User.belongsToMany(Tag, {
//   through: UserTag, as: "tagged_Users",
//   foreignKey: "User_id",
// })
// // Tags belongToMany Users (through UserTag)
// Tag.belongsToMany(User, {
//   through: UserTag, as: "tagged_Users",
//   foreignKey: "tag_id",
// })
module.exports = {
  User,
  Thought,
};
