
exports.seed = function(knex) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        {name: 'resource1', description: 'software license'},
        {name: 'resource2', description: 'analyst'},
        {name: 'resource3', description: 'some resource'},
        {name: 'resource4', description: 'some resource'},
        {name: 'resource5', description: 'some resource'}
      ]);
    });
};
