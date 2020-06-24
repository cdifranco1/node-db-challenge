const express = require('express')
const router = express.Router()
const Projects = require('./model')


router.get('/', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/:id', validateProjectID, async (req, res) => {
  const { id } = req.params
  try {
    const project = await Projects.getProjectByID(id) 
    const tasks = await Projects.getProjectTasks(id)
    const resources = await Projects.getProjectResources(id)

    const formatProj = convertBoolean(project)
    const formatTasks = tasks.map(obj => convertBoolean(obj))

    const newObj = {
      ...formatProj,
      tasks: [...formatTasks],
      resources: [...resources]
    }
    
    res.status(200).json(newObj)

  } catch (error) {
    res.status(500).json({ error: error.message })
  } 
})

router.get('/:id/resources', validateProjectID, (req, res) => {
  const { id } = req.params

  Projects.getProjectResources(id)
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/:id/tasks', validateProjectID, (req, res) => {
  const { id } = req.params

  Projects.getProjectTasks(id)
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', validateProjectBody, (req, res) => {
  
  Projects.addProject(req.body)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

//middleware

async function validateProjectID(req, res, next){
  const project = await Projects.getProjectByID(req.params.id)
  if (!project){
    res.status(404).json({ message: "Project with specified ID does not exist."})
  } else {
    next()
  }
}

function validateProjectBody(req, res, next){
  if (!req.body){
    res.status(400).json({ message: 'Please provide project details.'})
  } else if (!req.body.name){
    res.status(400).json({ message: 'Please provide project name'})
  } else {
    next()
  }
}


//util function
function convertBoolean(obj){
  return {
    ...obj,
    completed: !!obj.completed
  }
}

module.exports = router