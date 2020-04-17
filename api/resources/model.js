const db = require('../../dbConfig')

module.exports = {
  getResources,
  getResourceByID,
  addResource
}


function getResources(){
  return db('resources')
}

function getResourceByID(id){
  return db('resources')
          .where({ id })
}

function addResource(resource){
  return (
    db('resources')
      .insert(resource, 'id')
      .then(([id]) => {
        return getResourceByID(id)
      })
  )
}