let image = document.querySelector('.image')
const times = document.querySelector('.liked')
let liked=0
console.log(image)

image.addEventListener('dblclick', function(e) {
    let x = e.clientX-e.target.offsetLeft
    let y = e.clientY-e.target.offsetTop
    
    icon = document.createElement('i')
    icon.setAttribute('class',"fa-solid fa-heart bigheart")
    icon.style.top = y + "px"
    icon.style.left = x + "px"
    image.appendChild(icon)
    liked++
    times.textContent = liked
    let hearts = document.querySelectorAll('.bigheart')

    hearts.forEach(
        x=> setTimeout(() => {
            x.remove()
        }, 2000)
    )
   
})
