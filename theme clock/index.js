let button= document.querySelector('button')
let hourHand=document.querySelector('.hour')
let minutesHand=document.querySelector('.minute')
let secondsHand=document.querySelector('.second')
let digitalClock=document.querySelector('.digital-clock')
let today=document.querySelector('.today')
let body=document.querySelector('body')

const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
let newrotation=null
let calibration = 266
let date = new Date()
let seconds=date.getSeconds()

setInterval(() => {
    
    
    let minutes=date.getMinutes()
    let hours=date.getHours()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getYear()
    let dayweek= date.getDay()
    let secondDegree =  (seconds*6)-90
    srotation=secondDegree
    if(secondDegree<=264 && secondDegree>=0){
        srotation+=6
       
    }else if(secondDegree<0){
        srotation+=6
        
        
    }
    
    secondsHand.style.transform= `rotate(${srotation}deg)`
    minutesHand.style.transform= `rotate(${((minutes/5)*30)-90}deg)`
    hourHand.style.transform= `rotate(${((hours)*30)-90}deg)`
   
    seconds<10?seconds='0'+seconds:seconds
    minutes<10?minutes='0'+minutes:minutes
    hours<10?hours='0'+hours:hours

    digitalClock.innerHTML=`${hours}:${minutes}:${seconds}`
    today.innerHTML =`${weekDay[dayweek]} ${day}/${month+1}/${year+1900}`
    
}, 1000);

button.addEventListener('click',(e)=>{
   body.classList.toggle('bg-dark')
   hourHand.classList.toggle(`border-white`)
   minutesHand.classList.toggle(`border-white`)
   digitalClock.classList.toggle('text-white')   
   today.classList.toggle('text-white')
   e.target.classList.toggle('mode')
   if (e.target.classList.contains('mode')){
        button.innerHTML = 'Light Mode'
   }else{
       button.innerHTML = 'Dark Mode'
   }

})

