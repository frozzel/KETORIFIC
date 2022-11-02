const {  Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comments extends Model {}

Comments.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comments'
  }
);

module.exports = Comments;