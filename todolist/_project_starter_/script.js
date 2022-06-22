
let todos = document.querySelector('#todos')

let data = []

let storeddata = JSON.parse(localStorage.getItem('results'))

if(storeddata){
        storeddata.forEach(x=>createTasks(x))
}


todos.addEventListener('keypress',(e) =>{
    if(e.key==='Enter' && e.target.value){
    let test = e.target.value
    createTasks(test)
    e.target.value = ''
}

})


function createTasks(a){
        let tasks = document.createElement('div')
        tasks.className = 'results'
        data.push(a)
        localStorage.setItem('results', JSON.stringify(data))
        tasks.innerHTML = a
        document.body.appendChild(tasks)

        let results = document.querySelectorAll('.results')

        results.forEach(x=> x.addEventListener('click', (e)=>{
           x.classList.toggle('complete')
        }
    ))
        
    results.forEach(x=> x.addEventListener('contextmenu', (e)=>{
        e.preventDefault()
        e.target.remove()
        updateResults()
        
    }))
}




let results = document.querySelectorAll('.results')


function updateResults(){
    let results = document.querySelectorAll('.results')
    data = []
    
    results.forEach(x=> data.push(x))

    localStorage.setItem('results', JSON.stringify(data))
}