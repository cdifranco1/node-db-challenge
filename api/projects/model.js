const db = require('../../dbConfig')

module.exports = {
  getProjects,
  getProjectByID,
  addProjects
}


function getProjects(){
  return db('projects')
}

function getProjectByID(id){
  return db('projects')
          .where({ id })
}


function addProjects(project){
  return db('projects')
          .insert(project, 'id')
          .then(id => {
            return getProjectByID(id)
          })
}
