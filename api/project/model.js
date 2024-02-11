// build your `Project` model here
const db = require('../../data/dbConfig')


module.exports = {
    findAllProjects,
    findProjectById,
}

async function findAllProjects(){
    const rows = await db('projects as p')

    return rows
}

async function findProjectById(project_id){
    const rows = await db('projects as p')
    .where('p.project_id', '=', project_id)

    return rows
}
