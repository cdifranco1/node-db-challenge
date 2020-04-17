const db = require('../../dbConfig')

module.exports = {
  getTasks,
  getResourceByID,
  addResource
}


function getTasks(){
  return db('tasks')
}

function getResourceByID(id){
  return db('tasks')
          .where({ id })
}

function addResource(resource){
  return (
    db('tasks')
      .insert(resource, 'id')
      .then(id => {
        return getResourceByID(id)
      })
  )
}