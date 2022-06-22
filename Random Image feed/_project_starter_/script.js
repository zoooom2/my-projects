let imageContainer = document.querySelector('.imageContainer')

let url = 'https://source.unsplash.com/random/'


function createImage(){
    for(let i=0;i<50;i++){

        let image = document.createElement('img')
        image.src =url + getRandomSize() + "x" + getRandomSize()
        imageContainer.appendChild(image)
    }
   
}

function getRandomSize(){
    rum = Math.floor(Math.random() *10)+300
    return rum
}



document.addEventListener('DOMContentLoaded', createImage)
