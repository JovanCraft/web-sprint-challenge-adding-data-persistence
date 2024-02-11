// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
    findAllResources,
    findResourceById,
}

async function findAllResources(){
    const rows = await db('resources as r')
    let arr = rows.reduce((acc, row) => {
        acc.push(row)
        return acc
    }, [])
    return arr
}

async function findResourceById(resource_id){
    const rows = await db('resources as r')
    .where('r.resource_id', '=', resource_id)

    return rows
}
