const projects = [
    { project_name: 'Project 1', project_description:   'Description for Project 1',
    project_completed: false },
    { project_name: 'Project 2',
    project_description: 'Description for Project 2',
    project_completed: true },
    { project_name: 'Project 3',
    project_description: 'Description for Project 3',
    project_completed: true },
    { project_name: 'Project 4', project_description:   'Description for Project 4',
    project_completed: false }
]

const resources = [
    { resource_name: 'Resource 1', resource_description: 'Description for Resource 1' },
    { resource_name: 'Resource 2', resource_description: 'Description for Resource 2' },
    { resource_name: 'Resource 3', resource_description: 'Description for Resource 3' },
    { resource_name: 'Resource 4', resource_description: 'Description for Resource 4' },
]

const tasks = [
    { task_description: 'Task 1 for Project 1', task_notes: 'Notes for Task 1',
    task_completed: false,
    project_id: 1 },
    { task_description: 'Task 2 for Project 1', task_notes: 'Notes for Task 2',
    task_completed: true,
    project_id: 1 },
    { task_description: 'Task 1 for Project 2', task_notes: 'Notes for Task 1',
    task_completed: false,
    project_id: 2 },
    { task_description: 'Task 2 for Project 2', task_notes: 'Notes for Task 2',
    task_completed: true,
    project_id: 2 },
    { task_description: 'Task 1 for Project 3', task_notes: 'Notes for Task 1',
    task_completed: false,
    project_id: 3 },
    { task_description: 'Task 2 for Project 3', task_notes: 'Notes for Task 2',
    task_completed: true,
    project_id: 3 },
    { task_description: 'Task 1 for Project 4', task_notes: 'Notes for Task 1',
    task_completed: false,
    project_id: 4 },
    { task_description: 'Task 2 for Project 4', task_notes: 'Notes for Task 2',
    task_completed: true,
    project_id: 4 }
]

const project_resources = [
    { resource_id: 1, project_id: 1 },
    { resource_id: 2, project_id: 1 },
    { resource_id: 2, project_id: 2 },
    { resource_id: 3, project_id: 2 },
    { resource_id: 3, project_id: 3 },
    { resource_id: 4, project_id: 3 },
    { resource_id: 1, project_id: 4 }
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}
