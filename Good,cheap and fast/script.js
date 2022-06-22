checkBox = document.querySelectorAll('.check')
checkBtn = document.querySelectorAll('button')
let btnArr =[...checkBtn]
let goodBtn = document.getElementById('good-btn')
let cheapBtn = document.getElementById('cheap-btn')
let fastBtn = document.getElementById('fast-btn')

checkBox.forEach(x=>x.addEventListener('click',function(){
    
    let el = this.childNodes[0]
    if(el.classList.contains('clicked')){
        el.classList.remove('clicked')
    }else{
        el.classList.add('clicked')
    } 

    if(btnArr.every(x=>x.classList.contains('clicked'))){
        if(el['id'] =='fast-btn'){
            cheapBtn.classList.remove('clicked')
        }else if(el['id'] =='cheap-btn'){
            goodBtn.classList.remove('clicked')
        }else{
            fastBtn.classList.remove('clicked')
        }
    }

    checkBtn.forEach(x=>{
        if(x.classList.contains('clicked')){
            x.parentNode.style.backgroundColor='steelBlue'
        }else{
            x.parentNode.style.backgroundColor='gray'
        }
    })
}))