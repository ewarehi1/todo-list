import {Task} from './task-constructor'
import {Project} from './project-constructor'
import {displayProject} from './project-display'

const exampleTasks = [
    new Task('Task 1', 'Comment 1', 'Jan 1st'),
    new Task('Task 2', 'Comment 2', 'Jan 2nd'),
    new Task('Task 3', 'Comment 3', 'Jan 3rd')
]

const exampleProject = new Project('Odin-lessons', exampleTasks)

const body = document.querySelector('body')
body.appendChild(displayProject(exampleProject))