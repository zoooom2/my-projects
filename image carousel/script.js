let backgroundArray=["pexels-aleksandar-pasaric-325185.jpg", "pexels-artem-saranin-1496373.jpg","pexels-pixabay-210186.jpg", "pexels-roberto-nickson-2559941.jpg", "pexels-sam-kolder-2387873.jpg"]

let backgroundImage= document.querySelector('.image')
for(let j of backgroundArray){
    let image = document.createElement('img')
    image.src = j
    backgroundImage.appendChild(image)
}

let controlBtn= document.querySelectorAll('button')
let eachImage= document.querySelectorAll('.image>*')
let num = 0

controlBtn.forEach(x=>x.addEventListener('click', controls))

let carouse =()=>{
    num<backgroundArray.length-1?num++:num=0
    eachImage.forEach(x=>x.style.transform=`translateX(${-num*100}%)`)
}

let i = setInterval(carouse, 3000);

function controls(e){
        clearInterval(i)
        if(e.target['id']== 'previous'){
            num>0?num--:num=backgroundArray.length-1
        }else{
            num<backgroundArray.length-1?num++:num=0
        }
   
        eachImage.forEach(x=>x.style.transform=`translateX(${-num*100}%)`)
        i = setInterval(carouse, 3000)
}
