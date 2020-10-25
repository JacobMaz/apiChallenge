const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
pokemonList = document.querySelector('ul');

const pokedex = [];

const pokemonIcon = document.createElement('img');
const pokemon = document.createElement('li');
const pokemonType = document.createElement('p');
const pokemonIdNum = document.createElement('p');
const pokemonRPS = document.getElementById('pokemonChoise');
const pokemonRPSopt = document.createElement('option');

pokemon.classList.add('list-group-item');
pokemon.setAttribute('id', 'pokeListItem');

for(p = 1; p <= 9; p++){
    // console.log(p)
fetch(`${baseURL}${p}`)
.then(function(response){
    // console.log(response.json())
    return response.json();
})
.then(function(json){
    // console.log(json);

    let pokemonSpecies = {};

    let pokeIdNum = json.id;
    let pokeName = json.name;
    let pType = json.types[0].type.name;
    let pokeIcon = json.sprites.front_default;

    let pokemonName = pokeName.charAt(0).toUpperCase()+pokeName.slice(1);
    let pokeType = pType.toUpperCase();

    pokemonSpecies['pokeIdNum'] = pokeIdNum;
    pokemonSpecies['pokemonName'] = pokemonName;
    pokemonSpecies['pokemonType'] = pokeType;
    pokemonSpecies['pokeIcon'] = pokeIcon;

    pokedex.push(pokemonSpecies);
})
}


console.log(pokedex);
// console.log(`2: ${Object.keys(pokedex)}`);
// console.log(`3: ${pokedex[0]}`);
// console.log(`4: ${pokedex.pokeIdNum}`);

// for(poke = 0; poke <= 8; poke++){
//     pokemonIcon.src = pokedex;
//     pokemon.innerText = pokedex.pokemonSpecies[1];
//     pokemonType.innerText = pokedex.pokemonSpecies[2];
//     pokemonIdNum.innerText = `ID: #${pokedex.pokemonSpecies[3]}`;

//     pokemonRPSopt.innerText = `${pokedex.pokemonSpecies[1].toUpperCase()}!`;

//     pokemonList.appendChild(pokemon);
//     pokemon.appendChild(pokemonIcon);
//     pokemon.appendChild(pokemonIdNum);
//     pokemon.appendChild(pokemonType);

//     pokemonRPS.appendChild(pokemonRPSopt);
    
//     if(pokeType === 'grass'){
//         pokemon.style.color = 'green';
//     } else if (pokeType === 'fire'){
//         pokemon.style.color = 'red';
//     } else if (pokeType === 'water'){
//         pokemon.style.color = 'blue';
//     } else {
//         pokemon.style.cololr = 'black';
//     }
// }

const pokeBattleBtn = document.getElementById('iChooseYou');
const randomPoke = document.getElementById('randomPokemon');
const choicePoke = document.getElementById('choicePokemon');

pokeBattleBtn.addEventListener('click', pokemonBattle);

function pokemonBattle(e) {
    while (choicePoke.firstChild){
        choicePoke.removeChild(choicePoke.firstChild);
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
    .then(function(choiceResults){
        return choiceResults.json();
    })
    .then(function(choiceJson){
        // console.log(choiceJson.sprites.back_default);
        
        let choiceIcon = document.createElement('img');
        let choiceName = document.createElement('h2');
        let choiceType = document.createElement('p');

        let cType = choiceJson.types[0].type.name;
        // console.log(cType);

        choiceIcon.setAttribute('id', 'choicePokemonID');
        choiceName.setAttribute('id', 'choiceNameTitle');
        choiceType.setAttribute('id', 'rpsChoiceType');


        choiceIcon.src = choiceJson.sprites.back_default;
        choiceName.textContent = `${choiceJson.name.toUpperCase()}!`;
        choiceType.textContent = choiceJson.types[0].type.name;
        RPSchoiceType = choiceJson.types[0].type.name;
        choiceType.textContent = RPSchoiceType.charAt().toUpperCase()+RPSchoiceType.slice(1);

        choicePokemon.appendChild(choiceIcon);
        choicePokemon.appendChild(choiceName);
        choicePokemon.appendChild(choiceType);

        if(cType === 'grass'){
            choicePoke.style.color = 'green';
        } else if (cType === 'fire'){
            choicePoke.style.color = 'red';
        } else if (cType === 'water'){
            choicePoke.style.color = 'blue';
        } else {
            choicePoke.style.cololr = 'black';
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

        randomIcon.setAttribute('id', 'randomPokemonID');
        randomName.setAttribute('id', 'randomNameTitle');
        randomType.setAttribute('id','rpsRandoType');
        
        randomIcon.src = randomJson.sprites.front_default;
        randomName.textContent = `${randomJson.name.toUpperCase()}!`;
        RPSrandomType = randomJson.types[0].type.name;
        randomType.textContent = RPSrandomType.charAt().toUpperCase()+RPSrandomType.slice(1);

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