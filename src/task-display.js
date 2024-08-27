function displayTask(task) {
    const container = document.createElement('div')

    const title = document.createElement('div')
    title.textContent = task.title

    const description = document.createElement('div')
    description.textContent = task.description 

    const dueDate = document.createElement('div')
    dueDate.textContent = task.dueDate

    const taskStatus = document.createElement('div')
    taskStatus.textContent = task.status

    container.append(title, description, dueDate)
    return container
}

export {displayTask}