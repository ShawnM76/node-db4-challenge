exports.seed = function(knex) {
  return knex('table_name').insert([
    { id: 1, step_number: 1, instruction: 'step 1', recipe_id: 1 },
    { id: 2, step_number: 2, instruction: 'step 2', recipe_id: 1 },
    { id: 3, step_number: 3, instruction: 'step 3', recipe_id: 1 },
    { id: 4, step_number: 1, instruction: 'start', recipe_id: 2 },
    { id: 5, step_number: 2, instruction: 'make', recipe_id: 2 },
    { id: 6, step_number: 3, instruction: 'done', recipe_id: 2 },
    { id: 7, step_number: 1, instruction: 'gather', recipe_id: 3 },
    { id: 8, step_number: 2, instruction: 'mix together', recipe_id: 3 },
    { id: 9, step_number: 3, instruction: 'complete', recipe_id: 3 },
  ]);
};
