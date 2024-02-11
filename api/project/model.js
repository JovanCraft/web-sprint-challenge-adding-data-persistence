// build your `Project` model here
const db = require('../../data/dbConfig')


module.exports = {
    findAllProjects,
    findProjectById,
    postNewProject
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

function postNewProject(project){
    return db('projects as p')
    .insert(project)
    .then(([id]) => {
        return findProjectById(id).then(projects => projects[0])
    })
}
