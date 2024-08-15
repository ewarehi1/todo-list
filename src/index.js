import {Task} from './task'

const firstTask = new Task('Dishes', 'dont forget gloves', 'aug 3rd')
console.log(firstTask.title, firstTask.description, firstTask.dueDate)