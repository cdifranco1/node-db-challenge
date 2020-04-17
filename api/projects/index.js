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

module.exports = router