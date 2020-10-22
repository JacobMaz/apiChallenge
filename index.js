const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
pokemonList = document.querySelector('ul');

for(p = 1; p <= 9; p++){
    // console.log(p)
fetch(`${baseURL}${p}`)
.then(function(response){
    return response.json();
})
.then(function(json){
    // console.log(json);
    let pokeIdNum = json.id
    let pokeName = json.name;
    let pokeType = json.types[0].type.name;

    // let pokeRPSopt = json.name;

    let pokemonName = pokeName.charAt(0).toUpperCase()+pokeName.slice(1);

    let pokemon = document.createElement('li');
    let pokemonType = document.createElement('p');
    let pokemonIdNum = document.createElement('p');

    let pokemonRPS = document.getElementById('pokemonChoise')

    let pokemonRPSopt = document.createElement('option');

    pokemon.innerText = pokemonName;
    pokemonType.innerText = `Main Type: ${pokeType.toUpperCase()}`;
    pokemonIdNum.innerText = `ID: #${pokeIdNum}`;
    
    pokemonRPSopt.innerText = `${pokeName.toUpperCase()}!`;

    pokemonList.appendChild(pokemon);
    pokemon.appendChild(pokemonIdNum);
    pokemon.appendChild(pokemonType);

    pokemonRPS.appendChild(pokemonRPSopt);

})
}

const randomPokeBtn = document.getElementById('iChooseYou');
const randomPoke = document.getElementById('randomPokemon');

randomPokeBtn.addEventListener('click', randomPokemon);

function randomPokemon(e) {
    while (randomPoke.firstChild){
        randomPoke.removeChild(randomPoke.firstChild);
    }
    const randomNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let randomNumber = randomNumArr[Math.floor(Math.random()*randomNumArr.length)];
    // console.log(randomNumber);
    
    fetch(`${baseURL}${randomNumber}`)
    .then(function(randomResults){
        return randomResults.json();
    })
    .then(function(randomJson){
        console.log(randomJson.name)
        let randomName = document.createElement('h2')

        randomName.textContent = randomJson.name.toUpperCase();

        randomPoke.appendChild(randomName);
    })
}