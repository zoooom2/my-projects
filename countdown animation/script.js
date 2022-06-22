let el = document.querySelector('h1')
let button=document.querySelector('button')
let num = 10

let countdown = document.querySelector('.container')
let trigger = document.querySelector('.container2')



button.addEventListener('click',()=>{
    let track = setInterval(() => {
    
        if(num>1){
            countdown.classList.remove('hide')
            trigger.classList.add('hide')
            num-=1
            el.innerHTML = num
        }else{
            countdown.classList.add('hide')
            trigger.classList.remove('hide')
            num=10
            clearInterval(track)
        }
    },1000)  
    
    
})


