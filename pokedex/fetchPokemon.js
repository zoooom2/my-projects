let url = `https://pokeapi.co/api/v2/pokemon/`

let getPokemon = async(number) =>{
    let response = await axios.get(url+number)
    return response.data
}


