const User = require('./User');
const Posts = require('./Posts');
const Recipe = require('./Recipe');
const Comments = require('./Comments');



Posts.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Recipe.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Posts.hasMany(Comments, {
    foreignKey: 'posts_id',
    onDelete: 'CASCADE'
  });

Recipe.hasMany(Comments, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
  });

Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });



module.exports = { User, Posts, Recipe, Comments};