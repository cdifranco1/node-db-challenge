const express = require('express')
const Tasks = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

router.post('/', (req, res) => {
  Tasks.addTask(req.body)
    .then(task => {
      res.status(200).json(task)
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})


module.exports = router