// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    findAllTasks,
    findTasksById,
    postNewTask
}

async function findAllTasks(){
    const rows = await db('tasks').join('projects').select('tasks.*', 'projects.project_name', 'projects.project_description')

    return rows
}

async function findTasksById(task_id){
    const rows = await db('tasks as t').join('projects as p', 't.project_id', 'p.project_id').select('t.*', 'p.project_name', 'p.project_description')
    .where('t.task_id', '=', task_id)
    return rows
}

function postNewTask(task){
    return db('tasks as t')
    .insert(task)
    .then(([id]) => {
        return findTasksById(id).then(tasks => tasks[0])
    })
}
