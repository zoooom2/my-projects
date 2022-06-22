const textValue= document.querySelector('textarea');
const renderChoice= document.querySelector('.displayChoices')

const displaychoice=()=>{
    const separate= textValue.value.split(',')
    separate.map(x=>{
        if(x!==''){
        let choice = `<button class='btn btn-warning rounded-pill mx-1 test'>${x}</button>`
        renderChoice.innerHTML+= choice
        }else{
            return;
        }
        
    })
    showChoice()
}

let showChoice = ()=>{
    let within= renderChoice.querySelectorAll('.test')
          
        
        const i = setInterval(() => {
            for(let i=0;i<10;i++){
            within.forEach(x=>x.classList.replace('btn-warning','btn-primary'))
            let j=Math.floor(Math.random()* within.length)
            within[j].classList.add('btn-warning') }
        }, 200); 

        setTimeout(()=>clearInterval(i),5000)
   
    
}
textValue.addEventListener('change',displaychoice)