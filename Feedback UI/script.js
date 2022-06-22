let reviewBtn = document.getElementById('review')
let container = document.querySelector('.container')
let ratings = document.querySelectorAll('.rating>*')

ratings.forEach(x=>x.addEventListener('click', function(){
    ratings.forEach(x=>x.classList.remove('shade'))
    this.classList.add('shade')
}))

reviewBtn.addEventListener('click', function(feedback){
    ratings.forEach(x=>{if(x.classList.contains('shade')){
            feedback=x.querySelector('p').textContent
            container.innerHTML =`
                            <i class="fa-solid fa-heart" style="font-size: 25px;color:red"></i>
                            <p>Thank You</p>
                            <p>Feedback: ${feedback}</p>
                            <p>We'll use your feedback to improve our customer support</p>`

            container.style.width = '300px'
            container.style.padding='5px 15px'
      }
    })
    
})