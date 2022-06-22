let searchBox= document.getElementById('searchBox')
let searchBtn= document.querySelector('button')
searchBtn.addEventListener('click',()=>{
  searchBox.classList.toggle('tap')
  searchBox.focus()
})
