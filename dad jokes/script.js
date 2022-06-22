let theJoke = document.querySelector('p')

let  jokeBtn = document.querySelector('button')
console.log(jokeBtn)


jokeBtn.addEventListener('click',jokes)

function jokes(){
    const config = {headers: {'Accept': 'application/json'}}
        
    fetch('https://icanhazdadjoke.com/',config)
    .then(response => {
        if(!response.ok){
        throw new Error('we out')
    }
        return response.json()
    
}
            )
    .then(data =>{ 
    theJoke.innerHTML=data.joke
        })
    .catch(err => console.log('sorry'))

  
}