'use strict';

const { CharaterSchema, CHARACTER_TABLE } = require('./../models/characterModel');
const { CategorieSchema, CATEGORIE_TABLE } = require('./../models/categoriesModel');
const { MovieSchema, MOVIE_TABLE } = require('./../models/movieModel');


module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CHARACTER_TABLE, CharaterSchema);
    await queryInterface.createTable(CATEGORIE_TABLE, CategorieSchema);
    await queryInterface.createTable(MOVIE_TABLE, MovieSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CHARACTER_TABLE);
    await queryInterface.dropTable(CATEGORIE_TABLE);
    await queryInterface.dropTable(MOVIE_TABLE);
  }
};
