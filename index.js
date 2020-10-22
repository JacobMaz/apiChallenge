const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
pokemonList = document.querySelector('ul');

for(p = 1; p <= 9; p++){
    // console.log(p)
fetch(`${baseURL}${p}`)
.then(function(response){
    return response.json();
})
.then(function(json){
    // console.log(json.sprites.front_default);
    let pokeIdNum = json.id
    let pokeName = json.name;
    let pokeType = json.types[0].type.name;
    let pokeIcon = json.sprites.front_default;

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

    pokemon.style.listStyleImage = `url(${pokeIcon})`;
    
    if(pokeType === 'grass'){
        pokemon.style.color = 'green';
    } else if (pokeType === 'fire'){
        pokemon.style.color = 'red';
    } else if (pokeType === 'water'){
        pokemon.style.color = 'blue';
    } else {
        pokemon.style.cololr = 'black';
    }

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
        
        let randomIcon = document.createElement('img');
        let randomName = document.createElement('h2');
        let randomType = document.createElement('p');
        let myChoise = document.getElementById('myChoise');
        let pokemonChoise = document.getElementById('pokemonChoise');

        let rType = randomJson.types[0].type.name;

        randomIcon.src = randomJson.sprites.front_default;
        randomName.textContent = randomJson.name.toUpperCase();
        randomType.textContent = randomJson.types[0].type.name;

        myChoise.innerHTML = pokemonChoise.options[pokemonChoise.selectedIndex].text;
        randomPoke.appendChild(randomIcon)
        randomPoke.appendChild(randomName);
        randomPoke.appendChild(randomType);

        if(rType === 'grass'){
            randomPoke.style.color = 'green';
        } else if (rType === 'fire'){
            randomPoke.style.color = 'red';
        } else if (rType === 'water'){
            randomPoke.style.color = 'blue';
        } else {
            randomPoke.style.cololr = 'black';
        }
    })
}