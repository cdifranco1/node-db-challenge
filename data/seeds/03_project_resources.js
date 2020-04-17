
exports.seed = function(knex) {
  return knex('project_resources').del()
    .then(function () {
      return knex('project_resources').insert([
        {project_id: 1, resouce_id: 1},
        {project_id: 2, resouce_id: 2},
        {project_id: 1, resouce_id: 2}
      ]);
    });
};
