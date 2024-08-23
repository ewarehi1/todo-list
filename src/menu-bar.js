function menuBar(projArr) {
    const projectsContainer = document.createElement('div')

    for (let obj of projArr) {
        const tab = document.createElement('div')
        tab.setAttribute('class', 'tab')

        const button = document.createElement('button')
        button.innerText = obj.title

        tab.appendChild(button)
        projectsContainer.appendChild(tab)
    }

    return projectsContainer
}

export {menuBar}