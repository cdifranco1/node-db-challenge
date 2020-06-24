const db = require('../../dbConfig')

module.exports = {
  getProjects,
  getProjectByID,
  addProject,
  getProjectResources,
  getProjectTasks,
  remove
}


function getProjects(){
  return db('projects')
}

function getProjectByID(id){
  return db('projects as p')
          .where({ id })
          .first()
}

function getProjectResources(id){
  return db('projects as p')
          .join('project_resources as pr', 'p.id', 'pr.project_id')
          .join('resources as r', 'pr.resource_id', `r.id`)
          .select('r.id', 'r.name', 'r.description')
          .where('p.id', id)
        
}

function getProjectTasks(id){
  return db('tasks')
          .where('project_id', id)
          .select('id', 'description', 'notes', 'completed')
}

function addProject(project){
  return db('projects')
          .insert(project, 'id')
          .then(([id]) => {
            return getProjectByID(id)
          })
}

function remove(id){
  return db('project')
          .where({ id })
          .del()
}
