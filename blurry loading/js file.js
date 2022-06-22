let loader = document.querySelector('.loader')
let imageCatch= document.querySelector('#bg-img')
let blurValue = 100;
loader.style.opacity=1

window.addEventListener('load', changeBlur )

function changeBlur(){
      setInterval(()=>{
          if(blurValue>0){      
         blurValue--
        imageCatch.style.filter=`blur(${Math.round(blurValue*0.3)+'px'})`
        loader.innerText=(100-blurValue)+'%'
        loader.style.opacity-=0.01
        }
        }, 100) 
     
}



