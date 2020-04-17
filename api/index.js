const express = require('express')
const projectRoute = require('./projects')
const resourceRoute = require('./resources')
// const taskRoute = require('./tasks')

const router = express.Router()

router.use('/projects', projectRoute)
router.use('/resources', resourceRoute)
// router.use('/tasks', taskRoute)

module.exports = router
