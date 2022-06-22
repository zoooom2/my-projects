let question1=['what is my name?',['roqeeb','tunde','lolu','tade']]
let question2=['where are you from?',['Nigeria', 'Ghana','South Africa','Kenya']]
let question3=['who is the GOAT?',['Ronaldo', 'Messi','Maradona','Bendtner']]
let question4=['which club do you support?',['Manchester United', 'Chelsea','Arsenal','Liverpool']]
let question5 = ['are you there',['yes','no','no','yes']]
let question6 = ['bawo ni',['mo wa','mi o wa', 'kilagbe kilaju','ti o ba koshi kuro ni waju mi']]
let questions = [question1,question2,question3,question4,question5, question6];

let questionT = shuffle(questions)


let index = 0;
let score=0

document.addEventListener('DOMContentLoaded',()=>{
    createquestion(...questionT[index])
})

let container = document.querySelector('.container')
let submitButton = document.querySelector('.submit')

let createquestion = ( question,[...args])=>{
    submitButton.innerHTML = 'Submit'
    // 
    form= document.createElement('form')
    form.innerHTML = ` <div class="question">${question}</div>
    <div class="answers"><input type="radio" name='answer' class="correct" id="radio1"><label for="radio1">${args[0]}</label></div>
    <div class="answers"><input type="radio" name='answer' id="radio2"><label for="radio2">${args[1]}</label></div>
    <div class="answers"><input type="radio" name='answer' id="radio3"><label for="radio3">${args[2]}</label></div>
    <div class="answers"><input type="radio" name='answer' id="radio4"><label for="radio4">${args[3]}</label></div>`
    
    
    form.querySelectorAll('div.answers').forEach(x=> {
        x.style.order = Math.ceil(Math.random()*100)
    })
    container.insertBefore(form,submitButton)
    let radio = document.querySelectorAll('input')


submitButton.addEventListener('click',()=>{
    radio.forEach(x=>{
        if(x.checked && x.classList.contains('correct')){
            score++
        }
    })

    let form = document.querySelector('form')
    if([...radio].some(x=>x.checked)){
    radio=[]
    if(index<questionT.length-1){
        form.remove()
        index++
        createquestion(...questionT[index])
    }else{
        form.innerHTML = `You have scored ${score}/${questionT.length} correctly
        
        `
        submitButton.innerHTML = 'Reload'
        submitButton.addEventListener('click',()=>{
            form.remove()
            index = 0
            createquestion(...questionT[index])
        })
    }
    }
  })

}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
 


 