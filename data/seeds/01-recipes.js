exports.seed = function(knex) {
  return knex('recipes').insert([
    { id: 1, recipe_name: 'Recipe 1' },
    { id: 2, recipe_name: 'Recipe 2' },
    { id: 3, recipe_name: 'Recipe 3' },
  ]);
};
