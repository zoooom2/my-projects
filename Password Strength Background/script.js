let password = document.querySelector('input[name="password"]')
let bgImage = document.querySelector('.bgImage')

password.addEventListener('keyup', (e)=>{
        
        step = e.target.value.length*2
        bgImage.style.filter = `blur(${30-step}px)`
})