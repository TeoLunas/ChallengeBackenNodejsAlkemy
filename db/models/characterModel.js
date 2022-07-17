const sequelize = require('sequelize');
const { Model, DataTypes, Sequelize } = require('sequelize');

const CHARACTERTABLE = 'character';

const CharacterSchema = {

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
        type: DataTypes.INTEGER
    },
    weight: {
        allowNull: false,
        type: DataTypes.DECIMAL
    },
    history: {
        allowNull: type,
        type: DataTypes.TEXT
    },
    movieId: {
        allowNull: type,
        type: DataTypes.INTEGER
    },
    createAt: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'create_at',
        defaultValue: sequelize.NOW
    }

};

class Character extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CHARACTERTABLE,
            modelName: 'Character',
            timestamp: false
        }
    }
};

module.exports = {
    CHARACTERTABLE,
    CharacterSchema,
    Character
}