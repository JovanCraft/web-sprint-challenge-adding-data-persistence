// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    findAllTasks,
    findTasksById,
    postNewTask
}

async function findAllTasks(){
    const rows = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.task_id',
    't.task_description',
    't.task_notes',
    db.raw('(t.task_completed = 1) AS task_completed'),
    'p.project_name',
    'p.project_description')

    return rows.map(task => ({
        ...task,
        task_completed: Boolean(task.task_completed)
    }))
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
