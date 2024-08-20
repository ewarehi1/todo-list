import {Task} from './task-constructor'
import {Project} from './project-constructor'
import {displayProject} from './project-display'
import {menuBar} from './menu-bar'


const exampleTasks = [
    new Task('Task 1', 'Comment 1', 'Jan 1st'),
    new Task('Task 2', 'Comment 2', 'Jan 2nd'),
    new Task('Task 3', 'Comment 3', 'Jan 3rd')
]

const projects = [
    new Project('Odin-lessons', exampleTasks),
    new Project('Doki-Doki Literature Club Essay', exampleTasks)
]

const body = document.querySelector('body')

body.appendChild(menuBar(projects))

body.appendChild(displayProject(projects[0]))