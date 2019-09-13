const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getSupplies,
  getInstructions,
};

function getRecipes() {
  return db('recipes');
}

function getSupplies(recipe_id) {
  return db('recipes as r')
    .select('i.ingredient_name', 's.quantity')
    .join('supplies as s', 'r.id', 's.recipe_id')
    .join('ingredients as i', 'i.id', 's.ingredient_id')
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db('recipes as r')
    .select('i.step_number', 'i.instructions')
    .join('instructions as i', 'r.id', 'i.recipe_id')
    .where({ recipe_id })
    .orderBy('i.step_number', 'asc');
}
