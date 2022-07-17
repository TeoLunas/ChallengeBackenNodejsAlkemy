const { Model, DataTypes, Sequelize } = require('sequelize');

const CHARACTER_TABLE = 'character';

const CharaterSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    age: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    weight: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    history: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    movieId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'movie_id'
    }
};

class Character extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CHARACTER_TABLE,
            modelName: 'Chracter',
            timestamps: false
        }
    }
}

module.exports = { Character, CharaterSchema, CHARACTER_TABLE }