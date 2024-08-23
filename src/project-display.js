import {displayTask} from './task-display'

function displayProject(project) {
    const projectContainer = document.createElement('div')

    const projectTitle = document.createElement('div')
    projectTitle.textContent = project.title

    const projectTasks = document.createElement('ul')
    for (let task of project.items) {
        projectTasks.appendChild(displayTask(task))
    }

    projectContainer.append(projectTitle, projectTasks)
    return projectContainer
}

export {displayProject}