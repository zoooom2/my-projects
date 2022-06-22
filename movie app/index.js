const api_url='https://api.themoviedb.org/3/discover/movie?api_key=9f06ba9c8fd3cf3e25ba8cec8f67bfdd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
const image_url= 'https://image.tmdb.org/t/p/w1280'
movieUrl='https://api.themoviedb.org/3/search/movie'
moviePane= document.querySelector('.movies-pane')
let search = document.querySelector('.search')
let timeoutId

let getMovies = async()=>{
    const response = await axios.get(api_url)
    const answer= response.data.results
    return answer
}

 
 search.addEventListener('keyup', (e)=>{
    if(timeoutId){
        clearTimeout(timeoutId)
    }

   timeoutId = setTimeout(() => {
    searchValue=search.value
    if(searchValue===''){
        renderPage(getMovies)
    }else{
    renderPage(searchMovie)
    }},500);  
     
 })
 
 let searchMovie = async()=>{ 
     response= await axios.get(movieUrl,{
         params: {
             api_key:'9f06ba9c8fd3cf3e25ba8cec8f67bfdd',
             query: searchValue,             
             include_adult:false,
             language: 'en-US'
         }
     })     
     if(response.data.results.length===0){
         return getMovies()
     }
    return response.data.results
    
 }

let renderPage=(choice)=>{
    choice().then(
        data=>{ 
            let display
            moviePane.innerHTML=""
            for(let i of data){
            imagePath= image_url + i.poster_path
            movieTitle= i.title
            ratings= parseFloat(i.vote_average).toFixed(1)
            overview=i.overview
            if(ratings>8){
                display= 'success'
            }else if(ratings>5 && ratings<8){
                display= 'warning'
            }else{
                display='danger'
            }
            if(i.poster_path){
            
            moviePane.innerHTML+=`<div class='container mx-0 my-2 bg-transparent'>
                                        <img src='${imagePath}' class='img-fluid' style="height:80%; width:100%">
                                        <div class='bg-dark text-white test' style="height:20%">
                                           <span class='col-9 title'>${movieTitle}</span>
                                           <span class="badge bg-${display} float-end">${ratings}</span>
                                        </div>
                                        <div class="overview p-absolute bg-light"><h5>Overview</h5>${overview}</div>
                                  </div>`
            
            }
        }
        let container = document.querySelectorAll('.container')
        
        container.forEach(x=>x.addEventListener('mouseover',function(){
            view =this.querySelector('.overview')
            view.classList.add('show')
        }))

        container.forEach(x=>x.addEventListener('mouseout',function(){
            view =this.querySelector('.overview')
            view.classList.remove('show')
        }))
    }
    )
}
window.addEventListener('DOMContentLoaded', renderPage(getMovies))