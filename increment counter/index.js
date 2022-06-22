const twitter= document.querySelector('.twitter-num')
const facebook= document.querySelector('.facebook-num')
const youtube= document.querySelector('.youtube-num')
const columns= document.querySelectorAll('.fa-brands')
const numbers= document.querySelectorAll('.fs-5')
const detail= document.querySelectorAll('.fs-1')

console.log(columns)
window.addEventListener('load', () =>{
    increment(2500,facebook,5)
    increment(1500,twitter,5)
    increment(10000,youtube,5)
   let x = columns.forEach(x=>{
       x.classList.add("show")
    })

    let y= numbers.forEach(y=>{
        y.classList.add("show")
     })

     let z= detail.forEach(y=>{
        y.classList.add("show")
     })

     return{
         x,y,z
     }

})
let increment = (followers,brand,time) =>{
    let initial = 0;
    let delay= 20
    let increase = Math.round((followers*delay)/(time*1000))

    let i = setInterval(() => {
        initial= initial+increase
        if(initial<=followers){
        return brand.innerHTML=initial}
    }, delay)
    
}

