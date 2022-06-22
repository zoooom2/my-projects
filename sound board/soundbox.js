let audio= document.querySelectorAll('audio')

let boxes = document.querySelectorAll('.box')



boxes.forEach(x=>x.addEventListener('click', ()=>{
    let boxName = x.textContent
    let check = document.querySelector(`#${boxName}`)
    check.currentTime=0
    check.play()

}))



