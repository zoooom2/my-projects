const word= 'We Love You'
let text=document.querySelector('.text')
let speed = document.querySelector('#speed')
 
 const wordArray=word.split('')
let display=''
let i=0

speed.addEventListener('change', function(){
    let value = 550 -(50*(parseInt(speed.value)))
    setInterval(() => {
        
        text.innerHTML =''

        if (i < wordArray.length){
        display +=wordArray[i] 
        i++
         text.innerHTML = display}
         else{
             i=0
             display=''
         }

         

      }, value);
})

    
  
  
  

 