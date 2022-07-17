const { Model, DataTypes, Sequelize } = require('sequelize');

const MOVIETABLE = 'movie';

const MovieSchema = {};

class Movie extends Model {

};

module.exports = {
    MOVIETABLE,
    MovieSchema,
    Movie
}