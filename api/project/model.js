// build your `Project` model here
const db = require('../../data/dbConfig')


module.exports = {
    findAllProjects,
    findProjectById,
    postNewProject
}

async function findAllProjects(){
    const rows = await db('projects as p')

    const projects = rows.map(project => ({
        ...project,
        project_completed: !!project.project_completed
    }))
    return projects
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
