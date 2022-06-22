
const navBtn = document.querySelector('#navBtn')
let closeBtn = document.querySelector('#closeBtn')
let black = document.querySelector('.black')
let red = document.querySelector('.red')
let white = document.querySelector('.white')
let navArr = [black,red,white]

navBtn.addEventListener('click',()=>{
    navArr.forEach(x=>x.classList.add('show'))
})

closeBtn.addEventListener('click',()=>{
    navArr.forEach(x=>x.classList.remove('show'))
})