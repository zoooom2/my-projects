let pokemonCardContainer = document.querySelector('.pokemonCardContainer');
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

let createPokemonCard = (image,number,pokemonName,type,index) =>{
    let pokemonCard = document.createElement('div');
    pokemonCard.className = 'pokemonCard'
    pokemonCard.innerHTML = `<div class="spriteContainer"><img src=${image} alt=""></div>
                             <div class="value">${number}</div>
                             <div class="name">${pokemonName}</div>
                             <div class="type">Type:${type}</div>`
    pokemonCardContainer.appendChild(pokemonCard)
    pokemonCard.style.order = index
    pokemonCard.style.backgroundColor = colors[type]
}

document.addEventListener('DOMContentLoaded',()=>{

    for(let i=1; i<=150; i++){
        getPokemon(i).then(data=>{
            image = data.sprites.front_shiny
            index = data.id
            data.id<10? number = '#00'+data.id: data.id<100? number = '#0' + data.id : number = '#'+data.id
            pokemonName = data.name
            type = data.types[0].type.name
            createPokemonCard(image,number,pokemonName,type,index)         
        })
    }
})




