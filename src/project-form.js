function projectForm() {
    const dialog = document.createElement('DIALOG')
    dialog.setAttribute("open", "open")

    const form = document.createElement('form')
    form.setAttribute('id', 'create-project-form')
    
    const titleLabel = document.createElement('label')
    titleLabel.setAttribute('for', 'title')
    titleLabel.textContent = 'What is the name of your project?'

    const titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('name', 'title')

    const submitButton = document.createElement('button')
    submitButton.setAttribute('type', 'submit')
    submitButton.setAttribute('id', 'submit-button-project')
    submitButton.textContent = 'Add project'

    form.append(titleLabel, 
        document.createElement('br'), 
        titleInput, 
        document.createElement('br'), 
        submitButton)
    dialog.appendChild(form)
    return dialog
}

export {projectForm}