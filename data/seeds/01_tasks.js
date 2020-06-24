
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        {description: 'task1', project_id: 1},
        {description: 'task2', project_id: 1},
        {description: 'task3', project_id: 2}
      ]);
    });
};
