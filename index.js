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

const pokeBattleBtn = document.getElementById('iChooseYou');
const randomPoke = document.getElementById('randomPokemon');
const choisePoke = document.getElementById('choisePokemon')

pokeBattleBtn.addEventListener('click', pokemonBattle);

function pokemonBattle(e) {
    while (choisePoke.firstChild){
        choisePoke.removeChild(choisePoke.firstChild);
    } while (randomPoke.firstChild){
        randomPoke.removeChild(randomPoke.firstChild);
    }

    let pokemonChoise = document.getElementById('pokemonChoise');
    let pChoise = pokemonChoise.options[pokemonChoise.selectedIndex].text;

    let c;
       
    if(pChoise === 'BULBASAUR!'){
        c = 1;
        // console.log(c);
    } else if(pChoise === 'IVYSAUR!'){
        c = 2;
        // console.log(c);
    } else if(pChoise === 'VENUSAUR!'){
        c = 3;
        // console.log(c);
    } else if(pChoise === 'CHARMANDER!'){
        c = 4;
        // console.log(c);
    } else if(pChoise === 'CHARMELEON!'){
        c = 5;
        // console.log(c);
    } else if(pChoise === 'CHARIZARD!'){
        c = 6;
        // console.log(c);
    } else if(pChoise === 'SQUIRTLE!'){
        c = 7;
        // console.log(c);
    } else if(pChoise === 'WARTORTLE!'){
        c = 8;
        // console.log(c);
    } else if(pChoise === 'BLASTOISE!'){
        c = 9;
        // console.log(c);
    } else {
        console.log('RUN AWAY!!!');
    }
    // console.log(c)

    fetch(`${baseURL}${c}`)
    .then(function(choiseResults){
        return choiseResults.json();
    })
    .then(function(choiseJson){
        // console.log(choiseJson.sprites.back_default);
        
        let choiseIcon = document.createElement('img');
        let choiseName = document.createElement('h2');
        let choiseType = document.createElement('p');

        let cType = choiseJson.types[0].type.name;
        console.log(cType);


        choiseIcon.src = choiseJson.sprites.back_default;
        choiseName.textContent = `${choiseJson.name.toUpperCase()}!`;
        choiseType.textContent = choiseJson.types[0].type.name;

        choisePokemon.appendChild(choiseIcon);
        choisePokemon.appendChild(choiseName);
        choisePokemon.appendChild(choiseType);

        if(cType === 'grass'){
            choisePoke.style.color = 'green';
        } else if (cType === 'fire'){
            choisePoke.style.color = 'red';
        } else if (cType === 'water'){
            choisePoke.style.color = 'blue';
        } else {
            choisePoke.style.cololr = 'black';
        }
    })

    const randomNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let randomNumber = randomNumArr[Math.floor(Math.random()*randomNumArr.length)];
    // console.log(randomNumber);

    fetch(`${baseURL}${randomNumber}`)
    .then(function(randomResults){
        return randomResults.json();
    })
    .then(function(randomJson){
        // console.log(randomJson);

        let randomIcon = document.createElement('img');
        let randomName = document.createElement('h2');
        let randomType = document.createElement('p');
        
        let rType = randomJson.types[0].type.name;
        
        randomIcon.src = randomJson.sprites.front_default;
        randomName.textContent = `${randomJson.name.toUpperCase()}!`;
        randomType.textContent = randomJson.types[0].type.name;

        randomPokemon.appendChild(randomIcon)
        randomPokemon.appendChild(randomName)
        randomPokemon.appendChild(randomType)

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