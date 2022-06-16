
// fetch(URL)
//     .then( res => res.json())
//     .then( res => console.log(res))
//     .catch(console.log('error'))

// async function fetchPokemon(url) {
//     try{
//         await fetch(url)
            
//     }
   
//     catch{
//         (console.log('error'))
//     }
// }

let indexNumber = 1
const fetchPokemon = async (index) => {
    const URL = (`https://pokeapi.co/api/v2/pokemon-species/${index}/`)
    const response = await fetch(URL)
    const pokemonData = await response.json()
    console.log(pokemonData)
    const title = document.getElementById('pokemonName')
    title.textContent = pokemonData.name
} 

fetchPokemon(indexNumber)

const button = document.querySelector('#nextPokemon')
button.addEventListener('click', () => {
    indexNumber++
    fetchPokemon(indexNumber)

})
