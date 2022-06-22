imageArray=['pexels-aleksandar-pasaric-325185.jpg','pexels-artem-saranin-1496373.jpg','pexels-pixabay-210186.jpg','pexels-roberto-nickson-2559941.jpg','pexels-sam-kolder-2387873.jpg','pexels-tiff-ng-3700245.jpg']
const body=document.querySelector('body')
let index = 0
body.style.backgroundImage=`url(${imageArray[index]})`
const button =document.querySelectorAll('button')

button.forEach(x=>x.addEventListener('click',(e)=>{
  if(e.target['id']=='previous'){
      index>0?index-=1:index=5
  }else{
      index<5?index=index+1:index=0
      
  }
  body.style.backgroundImage=`url(${imageArray[index]})`
}))




