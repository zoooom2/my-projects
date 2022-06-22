let ulEl = document.querySelector('ul');
let searchEl = document.getElementById('search')


function result(firstName, lastName,state,country,picture){
    let list = document.createElement('li');
    // list.className ='hide'
    list.innerHTML =      `<div class="image" style='background-image: url(${picture})'></div>
                                <div class="details">
                                    <div class="name">${firstName} ${lastName}</div>
                                    <div class="location">${state},${country}</div>
                            </div>`
                
    ulEl.appendChild(list)
}


