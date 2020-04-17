const db = require('../../dbConfig')

module.exports = {
  getProjects,
  getProjectByID,
  addProject,
  getProjectResources,
  getProjectTasks
}


function getProjects(){
  return db('projects')
}

function getProjectByID(id){
  return db('projects')
          .where({ id })
          .first()
}

function getProjectResources(id){
  return db('projects as p')
          .join('project_resources as pr', 'p.id', 'pr.project_id')
          .join('resources as r', 'pr.resource_id', `r.id`)
          .select('r.id', 'r.name as resource_name', 'r.description as resource_description')
          .where('p.id', id)
        
}

function getProjectTasks(id){
  return db('tasks')
          .where('project_id', id)
}

function addProject(project){
  return db('projects')
          .insert(project, 'id')
          .then(([id]) => {
            return getProjectByID(id)
          })
}
