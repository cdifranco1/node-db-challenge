const db = require('../../dbConfig')

module.exports = {
  getTasks,
  getTaskByID,
  addTask
}


function getTasks(){
  return db('tasks as t')
          .join('projects as p', 'p.id', 't.project_id')
          .select('t.id', 't.description as task_description', 't.notes as task_notes', 't.completed as task_completed', 'p.name as project_name', 'p.description as project_description')
}

function getTaskByID(id){
  return db('tasks')
          .where({ id })
}

function addTask(task){
  return (
    db('tasks')
      .insert(task, 'id')
      .then(id => {
        return getTaskByID(id)
      })
  )
}