let button=document.querySelector('button')


button.addEventListener('click',function(e){
    x = e.clientX
    y = e.clientY
    
    topSide= this.offsetTop
    leftSide= this.offsetLeft
    
    xaxis= x-leftSide
    yaxis= y-topSide

    let circle= document.createElement('span')
    circle.classList.add('circle')
    circle.style.left=xaxis +'px'
    circle.style.top=yaxis+'px'

    button.appendChild(circle)
    
    setTimeout(() => {
        circle.remove()
    }, 500);

    
})