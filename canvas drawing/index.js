const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const buttons = document.querySelectorAll('button')
const sizeDisp = document.querySelector('.size')
const color = document.querySelector('.color')

let x
let y
let size=10

isPressed=false
let x1
let y1

sizeDisp.innerHTML = size


function drawCircle(a,b){
    ctx.beginPath();
    ctx.arc(a, b, size, 0, Math.PI * 2);
    ctx.fillStyle = color.value
    ctx.fill()
}


function drawLine(x,y,x1,y1){
    ctx.beginPath();
    ctx.lineWidth = size*2 ;
    ctx.moveTo(x,y)
    ctx.lineTo(x1,y1)
    ctx.strokeStyle = color.value
    ctx.stroke()
}


canvas.addEventListener('mousedown', (e)=>{
    isPressed=true
        x=e.offsetX
        y=e.offsetY

        drawCircle(x,y)
        
})

canvas.addEventListener('mouseup', (e)=>{
    isPressed=false
})

canvas.addEventListener('mousemove', (e)=>{
    if(isPressed==true){
    x1=e.offsetX
    y1=e.offsetY
    drawCircle(x1,y1)
    drawLine(x,y,x1,y1)
    x=x1
    y=y1
  }
})

buttons.forEach(x=>x.addEventListener('click',(e)=>{
    if(e.target.className=='increase'){
        size<20 ? size+=1:size
        
        sizeDisp.innerHTML=size
    }else if(e.target.className=='reduce'){
        size>1?size-=1: size
        
        sizeDisp.innerHTML=size
    }
    else{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}))