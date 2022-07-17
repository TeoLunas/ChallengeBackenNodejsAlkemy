const { Model, DataTypes, Sequelize } = require('sequelize')

const TYPE_TABLE = 'types';

const TypeSchema = {};

class Type extends Model {

};

module.exports = {
    TYPE_TABLE,
    TypeSchema,
    Type
}