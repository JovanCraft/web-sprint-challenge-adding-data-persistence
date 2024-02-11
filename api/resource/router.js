// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Resource.findAllResources()
    .then(resources => {
        res.json(resources)
    })
    .catch(next)
})

router.get('/:resource_id', (req, res, next) => {
    Resource.findResourceById(req.params.resource_id)
    .then(resource => {
        res.json(resource)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.postNewResource(req.body)
    .then(newResource => {
        res.json(newResource)
    }).catch(next)
})

module.exports = router
