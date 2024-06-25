const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')

form.addEventListener('submit',(e) =>  "" null ){
    let message = []
    if (name.value == '' || name.value == null){
        messages.push('Name is required')
    }

    if (Email.value == '' || Email.value == null){
        messages.push('Email is null')
     }

    if (messages.length > 0){
        e.preventDefault()
        ErrorElement.innerText = Messages.join(',')
    }
}