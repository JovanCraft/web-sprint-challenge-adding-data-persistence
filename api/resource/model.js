// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
    findAllResources,
    findResourceById,
    postNewResource
}

async function findAllResources(){
    const rows = await db('resources as r')
    // let arr = rows.reduce((acc, row) => {
    //     acc.push(row)
    //     return acc
    // }, [])
    return rows
}

async function findResourceById(resource_id){
    const rows = await db('resources as r')
    .where('r.resource_id', '=', resource_id)

    return rows
}

function postNewResource(resource){
    return db('resources')
    .insert(resource)
    .then(([id]) => {
        return findResourceById(id).then(resources => resources[0])
    })
}
