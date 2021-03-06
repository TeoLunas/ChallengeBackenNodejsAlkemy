const { Model, DataTypes, Sequelize } = require('sequelize');

const MOVIE_TABLE = 'movies';

const MovieSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING
    },
    title: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    creationDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'creation_date'
    },
    score: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    characterID: {
        allowNull: false,
        field: 'character_id',
        type: DataTypes.INTEGER
    }
};

class Movie extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: MOVIE_TABLE,
            modelName: 'Movie',
            timestamps: false
        }
    }
}

module.exports = { Movie, MovieSchema, MOVIE_TABLE }