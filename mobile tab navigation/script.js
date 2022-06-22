let tabEl = document.querySelectorAll('.tab>*')
let imageCtn = document.querySelector('.image')

let bgImg = {
    home:'pexels-paul-loh-233698.jpg',
    work: 'pexels-yury-kim-585419.jpg',
    blog: 'pexels-jess-bailey-designs-839443.jpg',
    aboutUs: 'pexels-matheus-bertelli-2467506.jpg'
}

tabEl.forEach(x=>x.addEventListener('click', function(e){
    tabEl.forEach(x =>x.classList.remove('active'));
    name = x.className
    // console.log(name)
    // console.log(bgImg[name])
     imageCtn.style.backgroundImage =`url(${bgImg[name]})`
     imageCtn.style.backgroundSize= 'cover'
    
    this.classList.add('active');
    
}))

