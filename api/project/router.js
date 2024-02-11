// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Project.findAllProjects()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})

router.get('/:project_id', (req, res, next) => {
    Project.findProjectById(req.params.project_id)
    .then(project => {
        res.json(project)
    })
    .catch(next)
})








module.exports = router;
