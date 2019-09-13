exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').insert([
    { id: 1, recipe_id: 1, ingredient_id: 1, quantity: 6 },
    { id: 2, recipe_id: 1, ingredient_id: 2, quantity: 4 },
    { id: 3, recipe_id: 1, ingredient_id: 3, quantity: 10 },
    { id: 4, recipe_id: 2, ingredient_id: 1, quantity: 7 },
    { id: 5, recipe_id: 2, ingredient_id: 2, quantity: 6 },
    { id: 6, recipe_id: 2, ingredient_id: 3, quantity: 2 },
    { id: 7, recipe_id: 3, ingredient_id: 1, quantity: 9 },
    { id: 8, recipe_id: 3, ingredient_id: 2, quantity: 5 },
    { id: 9, recipe_id: 3, ingredient_id: 3, quantity: 6 },
  ]);
};
