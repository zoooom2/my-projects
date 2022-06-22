let prevBtn=document.querySelector('#prev')
console.log(prevBtn)
let nextBtn=document.querySelector('#next')
console.log(nextBtn)
let circles = document.querySelectorAll('.circle')
let currentActive=0;


prevBtn.addEventListener('click',goBack)
nextBtn.addEventListener('click',goForward)

function goBack(){
    if (currentActive>0){
        currentActive--
        let setWidth = document.querySelector('.progress') 
        percent= Math.round(currentActive*100/3)
        console.log(percent)
        if(percent>=0 && currentActive>0){
            nextBtn.disabled= false
            setWidth.style.width=percent+'%'
        }
        if (percent===0){
            prevBtn.disabled= true
            setWidth.style.width=percent+'%'
        }
        
        let workit =[...circles]
        for (let i=workit.length-1; i>currentActive; i--){
            workit[i].classList.remove('active')
        }
        
        
        }
}

function goForward(){
    if (currentActive<circles.length-1){
    currentActive++
    let setWidth = document.querySelector('.progress') 
    percent= Math.round(currentActive*100/3)
    if(percent<=100 && currentActive>0){
        prevBtn.disabled= false
        setWidth.style.width=percent+'%'
    }
    if (percent===100){
        nextBtn.disabled= true
    }
    
    let workit =[...circles]
    for (let i=1; i<currentActive+1; i++){
        workit[i].classList.add('active')
    }
     console.log(currentActive)
    }
}

