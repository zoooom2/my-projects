let url = 'https://randomuser.me/api/?results=5000'

let findPerson = async()=>{
    let response = await axios.get(url)
    return response.data
}

    findPerson().then(
        x=> {
            for(let resultArray of x.results){       
                let firstname = resultArray.name.first
                let lastname = resultArray.name.last
                let state = resultArray.location.state
                let country = resultArray.location.country
                let picture = resultArray.picture.thumbnail
                result(firstname, lastname,state,country,picture)
            } 
            let lists = document.querySelectorAll('li')
            let search = document.getElementById('search')
            
            
            search.addEventListener('keyup', function(){
                
                lists.forEach(x=>{
                    if(this.value==''){
                       x.classList.remove('hide')
                    }
                    else{
                        x.classList.add('hide')
                        nameValue = x.querySelector('.name').textContent.toLowerCase()
                        place = x.querySelector('.location').textContent.toLowerCase()
                        
                       if(nameValue.match(this.value.toLowerCase()) || place.match(this.value.toLowerCase())){
                          x.classList.remove('hide')
                       }
                    }
                })
            })
            
        }
    )
  