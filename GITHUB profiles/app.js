const github = new Github()
let profile= document.querySelector('.profile')
let search = document.querySelector('#search')
let i
search.addEventListener('keyup', (e)=>{
    if (i){
        clearTimeout(i)
    }

     i = setTimeout(() => {
        let username = e.target.value
        if(username){
     renderSearch(username)}else{
        profile.innerHTML = ''
        profile.style.visibility='hidden'
    }
    }, 1000)

     
})

function renderSearch(username){
    profile.innerHTML = ''
    profile.style.visibility = 'hidden'
    github.getUser(username).then((user)=>{
        if(user){
        
        profile.style.visibility = 'visible'
        profile.innerHTML=`
        <img src="${user.profile.avatar_url}" alt="" class="profile-image">
        <div class="profileDetails">
            <h3>${user.profile.name}</h3>
            <p>${user.profile.bio}</p>
            <div class="fans">
                <div class="followers">${user.profile.followers} followers</div>
                <div class="following">${user.profile.following} following</div>
                <div class="repos">${user.profile.public_repos} repos</div>
            </div>
            <div class="repos-topics">
                
            </div>
        </div>`
        
        for(let i=0; i<5; i++){
            if(user.repos[i]){
        let topics = document.querySelector('.repos-topics')
        
       topics.innerHTML +=`<div class="topics">${user.repos[i].name}</div>`
       
}}

 }  }).catch(()=>{
     
     profile.innerHTML = '<h1>No Profile found</h1>'
     profile.style.visibility = 'visible'
     setTimeout(()=>{    
         profile.style.visibility = 'hidden'
    },2000)
 })
}