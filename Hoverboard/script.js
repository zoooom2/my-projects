let boxCtn = document.querySelector('.container')

for(let i=0;i<900;i++) {
    let box = document.createElement('div')
    box.className = 'box'
    boxCtn.appendChild(box)
}

function hexNum(){
    let randomNum = Math.floor(Math.random()*16)
    randomNum==10?randomNum ='A':randomNum==11?randomNum='B':randomNum==12?randomNum='C':randomNum==13?randomNum='D':randomNum==14?randomNum='E':randomNum==15?randomNum='F':randomNum
    return randomNum
}

let randomColor =()=>{
    hexColor = '#'
    for(let i=0;i<6;i++){
        let h =hexNum()   
        hexColor+=h
    }
    return hexColor
}


let paint = (e) => {
    e.target.style.backgroundColor = randomColor()
}

let removePaint = (e) => {
    setTimeout(() => {
        e.target.style.background= 'rgba(255,255,255,0.1)'
    }, 1000); 
}

let boxes = document.querySelectorAll('.box')
 boxes.forEach(x=>x.addEventListener('mouseover',paint))

 boxes.forEach(x=>x.addEventListener('mouseout',removePaint ))
