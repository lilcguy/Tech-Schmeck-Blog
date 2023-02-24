const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {

        },
        contents: {

        },
        date: {

        },
        user_id: { //could be username instead?
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
        modelName: "post",
      }
);

module.exports = Post;