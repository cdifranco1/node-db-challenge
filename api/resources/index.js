const express = require('express')
const router = express.Router()
const Resources = require('./model')


router.get('/', (req, res) => {
  Resources.getResources()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  Resources.getResourceByID(id)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
  Resources.addResource(req.body)
    .then((resource) => {
      res.status(200).json(resource)
    })
    .catch(err => {
      res.status(500).json({ error: "Could not add resource to database." })
    })
})

module.exports = router