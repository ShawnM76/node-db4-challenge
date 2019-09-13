exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 200).notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 200).notNullable();
    })
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl
        .integer('step_number')
        .notNullable()
        .unsigned();
      tbl.string('instruction', 800).notNullable();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('supplies', tbl => {
      tbl.increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .onUpdate('CASCADE');
      tbl.float('quantity').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExist('instructions')
    .dropTableIfExist('supplies')
    .dropTableIfExist('ingredients')
    .dropTableIfExist('recipes');
};
