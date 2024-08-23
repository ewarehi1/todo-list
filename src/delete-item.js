function deleteItem(projectArray, projectTask) {
    const pos = projectArray.find(task => {
        task.title == projectTask
    })

    projectArray.splice(pos, 1)
}

export{deleteItem}