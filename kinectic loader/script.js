const topTriangle =document.querySelector('#topTriangle')
const bottomTriangle =document.querySelector('#bottomTriangle')
let angle = 0



setInterval(() => {
    angle += 180
    topTriangle.style.transform=`rotate(${angle}deg)`
    
    setTimeout(() => {
        bottomTriangle.style.transform=`rotate(${angle}deg)`
    }, 400);
}, 900);