let  placeholders= document.querySelectorAll('.placeholder')
let container= document.querySelector('.container')

for(let placeholder of placeholders){
placeholder.style.animation='loading 1.5s ease 0s infinite forwards'
}

setTimeout(() => {
    container.innerHTML =`<div class="topImageContainer placeholder"><img src="https://picsum.photos/200/300" width='100%' height='100%'></div>
    <div class="bottomContainer">
        <div class="placeholder"><h2>Lorem Ipsum Dolor<h2></div>
        <div class="placeholder"></div>
        <div class="placeholder"></div>
        <div class="placeholder"></div>
        <div class="bottomDetails">
            <div class="imagePlaceholder placeholder"></div>
            <div class="imagedescription">
                <div class="placeholder"></div>
                <div class="placeholder"></div>
            </div>
            
        </div>
    </div>`
}, 2500);