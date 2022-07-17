const { models } = require('../libs/sequelize');

class CharacterService {
    constructor() {

    }

    async getAllCharacters(query) {
        const options = {
            where: {}
        }
        const { name, age, movies } = query;
        if (name) {
            options.where.name = name;
        }
        if (age) {
            options.where.age = age;
        }

        const listCharacters = await models.Chracter.findAll(options);
        return listCharacters;
    }

    async createCharacter(data) {
        const newCharacter = await models.Chracter.create(data);
        return newCharacter;
    }

    async updateCharacter(id, changes) {
        const character = await models.Chracter.findByPk(id);
        const update = await character.update(changes);
        return update
    }

    async deleteCharacter(id) {
        const character = await models.Chracter.findByPk(id);
        await character.destroy();
        return 'Eliminado';
    }

}

module.exports = CharacterService;