const { Character, CharacterSchema } = require('./characterModel');

function setupModel(sequelize) {
    Character.init(CharacterSchema, Character.config(sequelize))
};

module.exports = setupModel;