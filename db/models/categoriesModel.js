const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORIE_TABLE = 'categories';

const CategorieSchema = {
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
    image: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    movieID: {
        allowNull: false,
        field: 'movie_id',
        type: DataTypes.INTEGER
    }
};

class Categorie extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORIE_TABLE,
            modelName: 'Categorie',
            timestamps: false
        }
    }
}

module.exports = { Categorie, CategorieSchema, CATEGORIE_TABLE };