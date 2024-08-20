function displayTask(task) {
    const container = document.createElement('div')

    const title = document.createElement('div')
    title.textContent = task.title

    const description = document.createElement('div')
    description.textContent = task.description 

    const dueDate = document.createElement('div')
    dueDate.textContent = task.dueDate

    container.append(title, description, dueDate)
    return container
}

export {displayTask}