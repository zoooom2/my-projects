const fill= document.querySelector('.fill')
const empties = document.querySelectorAll('empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(let empty of empties) {
        empty.addEventListener('dragleave', dragLeave)
        empty.addEventListener('dragover', dragOver)
        empty.addEventListener('dragenter', dragEnter)
        empty.addEventListener('drop', dragDrop)
}

function dragStart(e){
    this.classList.add('hold')
    setTimeout(() => {
        this.className=''
    }, 0);
}
function dragLeave() {

}
function dragOver(e){
    e.preventDefault()
}
function dragEnter(e){
    e.preventDefault()
}

function dragDrop(e){
  
    this.className='empty'
    this.appendChild(fill)
}

function dragEnd(){
    this.className='fill'
}