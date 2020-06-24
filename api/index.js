const express = require('express')
const projectRoute = require('./projects')
const resourceRoute = require('./resources')
const taskRoute = require('./tasks')

const router = express.Router()

router.use('/projects', projectRoute)
router.use('/resources', resourceRoute)
router.use('/tasks', taskRoute)

module.exports = router

/* 
Endpoints

Projects:
 - GET /api/projects
 - GET /api/projects/:id -- returns project along with tasks and resources
 - GET /api/projects/:id/resources
 - GET /api/projects/:id/tasks
 - POST /api/projects

 Resources:
 - GET /api/resources
 - GET /api/resources/:id
 - POST /api/resources
 
 Tasks:
 - GET /api/tasks
 - GET /api/tasks/:id
 - POST /api/tasks  -- returns tasks along with project name and project description

*/