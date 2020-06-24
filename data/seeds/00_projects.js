
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {name: 'project1'},
        {name: 'project2'},
        {name: 'project3'}
      ]);
    });
};
