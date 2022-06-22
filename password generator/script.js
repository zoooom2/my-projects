const result= document.querySelector('.result')
const clipboard= document.querySelector('.clipboard')
const uppercase= document.querySelector('#upperCase')
const lowercase= document.querySelector('#lowerCase')
const number= document.querySelector('#number')
const symbol= document.querySelector('#symbol')
const generateButton = document.querySelector('#generatorButton')
const length = document.querySelector('#length')

let passwordLength = parseInt(length.value)

length.addEventListener('change', ()=>{
    passwordLength = parseInt(length.value)
})

function generatePassword(){
    let password = []
    let displayPassword = ''
    
    if (uppercase.checked){
        password.push(generateRandomUppercase)
    }
    if(lowercase.checked){
        password.push(generateRandomLowercase)
    }
    
    if(number.checked){
        password.push(generateRandomNumber)
    }
    if(symbol.checked){
        password.push(generateRandomSymbol)
    }

    for(let i = 0; i<passwordLength;i++){
        displayPassword += password[Math.floor(Math.random() * password.length)]();
    }
    result.innerHTML = displayPassword
}

generateButton.addEventListener('click',generatePassword)

function generateRandomSymbol() {
    const randomSymbolArray=[randomIntFromInterval(33,47),randomIntFromInterval(58,64),randomIntFromInterval(91,96),randomIntFromInterval(123,126)]
    let result= randomSymbolArray[Math.floor(Math.random() * randomSymbolArray.length)]
    symbolresult=String.fromCharCode(result)
    return symbolresult
}

function generateRandomNumber(){
   let result = randomIntFromInterval(48,57)
   numberresult = String.fromCharCode(result)
   return numberresult
}

function generateRandomUppercase(){
    let result = randomIntFromInterval(65,90)
    uppercaseresult = String.fromCharCode(result)
   return uppercaseresult
}

function generateRandomLowercase(){
    let result = randomIntFromInterval(97,122)
    lowercaseresult = String.fromCharCode(result)
    return lowercaseresult
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
 clipboard.addEventListener('click',()=>{
     let textarea= document.createElement('textarea')
     passkey= result.innerHTML

     if(!passkey){return;}

     textarea.value = passkey
     document.body.appendChild(textarea)
     textarea.select()
     document.execCommand('copy')
     textarea.remove()
     alert('password copied successfully')
 })