let bigCup = document.querySelector('.big-cup')
let cups= document.querySelector('.cups')
let cupsArray=cups.querySelectorAll('[data-cup-number]')
const check=document.querySelector('.check')
const remain = document.querySelector('.remain')
const topValues=document.querySelector('.top-boy')
const litre=document.querySelector('.litre')
// console.log(cupsArray)

function drink(){
    bigCup.classList.remove('bg-primary')
    cupsArray.forEach(x=>x.classList.remove('drank'))
    const number = parseInt(this.dataset.cupNumber)
    for(let i=0;i<number;i++){
        cupsArray[i].classList.add('drank')
    }
    
    let percentage = (number *125)/10
    
   
        litre.textContent=`${((100-percentage)*2)/100}ml`
   

    remain.setAttribute('style',`height:${percentage}%`)
    check.setAttribute('style',`height:${100-percentage}%`)
    remain.innerHTML=`<p class='show'>${(percentage)}%</p>`
    
}

cupsArray.forEach(x=>x.addEventListener('click', drink))