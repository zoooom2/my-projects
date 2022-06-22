let addBtn = document.querySelector('.noteBtn')
let notes = document.querySelector('.notes')

let textArray = JSON.parse(localStorage.getItem('textArray'))

textArray.forEach(x=>newNote(x))

addBtn.addEventListener('click', ()=> newNote())

function updateLS(){
    let notesText = document.querySelectorAll('textarea')
    let textArray = []
    notesText.forEach(x=> textArray.push(x.value))
    localStorage.setItem("textArray", JSON.stringify(textArray))
}

function newNote(txt){
    txt?txt:txt =''
    const container = document.createElement('div')
    container.className = 'noteContainer'
    container.innerHTML = 
                            `   <div class="noteHeader">
                                    <button type="button" class="toggleNote"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button type="button" class="deleteNote"><i class="fa-solid fa-trash-can"></i></button>
                                </div>
                                <div class="noteBody">
                                    <textarea class="noteBlock" placeholder="type something">${txt}</textarea>
                                    <div class="nn hide"></div>
                                </div>
                            `
    notes.appendChild(container)
    let deleteBtn = document.querySelectorAll('.deleteNote')
    let textarea = document.querySelectorAll('textarea')
    let toggleBtn = document.querySelectorAll('.toggleNote')

    
    textarea.forEach(x=>x.addEventListener('keyup', function(){
        x.nextElementSibling.textContent = x.value
        updateLS()
    }))

    deleteBtn.forEach(x=>x.addEventListener('click', function(index){
        this.parentNode.nextElementSibling.querySelector('textarea').value=""
        this.parentNode.parentNode.remove()
        updateLS()
    }))

    toggleBtn.forEach(x=>x.addEventListener('click', function(){
        this.parentNode.nextElementSibling.querySelector('textarea').classList.toggle('hide')
        this.parentNode.nextElementSibling.querySelector('div').classList.toggle('hide')
    }))
}


