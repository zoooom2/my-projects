let formContainer = document.querySelector('.form-container');

let theDivs = formContainer.querySelectorAll('div')


theDivs.forEach(x=>x.addEventListener('click',wave))

function wave() {

    let label = this.querySelector('label')
    let innerSpans = label.querySelectorAll('span')
    let arraySpans = [...innerSpans]
    let delay = -0.2
    for(let i=0; i<arraySpans.length; i++) {
        timing=0.3
        delay+=timing/arraySpans.length
        
        arraySpans[i].style.transition = `top ${timing}s ease ${delay}s`
        
    }
    
    arraySpans.forEach(x=>x.classList.add('up'))
    
}




