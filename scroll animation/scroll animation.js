let boxes = document.querySelectorAll('.box')




window.addEventListener("scroll", updateBox)

function updateBox(){
    let triggerBottom = window.innerHeight *4/5
     boxes.forEach(x=>{
         const boxTop = x.getBoundingClientRect().top

         if(boxTop < triggerBottom){
             x.classList.add('show')
         }else{
            x.classList.remove('show')
        }
       }
      )
    }