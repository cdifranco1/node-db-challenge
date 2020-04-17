
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        {name: 'task1', project_id: 1},
        {name: 'task2', project_id: 1},
        {name: 'task3', project_id: 2}
      ]);
    });
};
