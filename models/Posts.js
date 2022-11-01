const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Posts extends Model {}

Posts.init(

    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },  
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
       
       
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'Posts'
    }
);

module.exports = Posts;