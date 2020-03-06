'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User,{
      onDelete : "CASCADE",
      foreignKey : 'userId'
  });
  };
  return Post;
};