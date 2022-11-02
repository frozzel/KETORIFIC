const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Recipe extends Model{}

Recipe.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        title: DataTypes.STRING,
        instructions: DataTypes.STRING,
        ingredients: DataTypes.STRING,
        image: DataTypes.STRING,
       
        
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'Recipe'
    }
);

module.exports= Recipe;