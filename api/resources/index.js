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

module.exports = router