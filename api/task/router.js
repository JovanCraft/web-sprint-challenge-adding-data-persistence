// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Task.findAllTasks()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(next)
})

router.get('/:task_id', (req, res, next) => {
    Task.findTasksById(req.params.task_id)
    .then(task => {
        res.json(task)
    }).
    catch(next)
})

router.post('/', (req, res, next) => {
    Task.postNewTask(req.body)
    .then(newTask => {
        res.json(newTask)
    })
    .catch(next)
})


module.exports = router
