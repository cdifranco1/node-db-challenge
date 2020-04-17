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

router.get('/:id', validateProjectID, (req, res) => {
  const { id } = req.params

  Projects.getProjectByID(id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
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

router.post('/', (req, res) => {
  
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

module.exports = router