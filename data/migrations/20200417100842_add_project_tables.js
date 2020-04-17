
exports.up = function(knex) {
  return knex.schema
      .createTable('projects', tbl => {
        tbl.increments('id')
        tbl.string('name', 255).unique().notNullable()
        tbl.string('description', 255)
        tbl.boolean('completed').defaultTo(false).notNullable()
      })
      .createTable('tasks', tbl => {
        tbl.increments('id')
        tbl.string('description', 255).notNullable()
        tbl.text('notes')
        tbl.boolean('completed').defaultTo(false)

        //foreign key
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
      })
      .createTable('resources', tbl => {
        tbl.increments('id')
        tbl.string('name', 255).notNullable().unique()
        tbl.text('description')
      })
      .createTable('project_resources', tbl => {
        tbl.increments('id')
        
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        
        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        tbl.unique(['project_id', 'resource_id'])
      })
};

exports.down = function(knex) {
  return knex.schema
          .dropTableIfExists('projects')
          .dropTableIfExists('tasks')
          .dropTableIfExists('resources')
          .dropTableIfExists('project_resources')
};
