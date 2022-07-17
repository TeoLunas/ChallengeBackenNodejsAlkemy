const { Character, CharaterSchema } = require('./characterModel');
const { CategorieSchema, Categorie } = require('./categoriesModel');
const { Movie, MovieSchema } = require('./movieModel');

function setupModels(sequelize) {
    Character.init(CharaterSchema, Character.config(sequelize));
    Categorie.init(CategorieSchema, Categorie.config(sequelize));
    Movie.init(MovieSchema, Movie.config(sequelize));
}

module.exports = setupModels;