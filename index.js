let baseURl = 'https://pokeapi.co/api/v2/pokemon/';
pokemonList = document.querySelector('ul');

fetch('https://pokeapi.co/api/v2/pokemon')
.then(function(response){
    return response.json();
})
.then(function(json){
    for(p = 0; p <= 8; p++){
        // console.log(json.results[p]);
        let name = json.results[p].name;
        let pokeName = name.charAt(0).toUpperCase() + name.slice(1);
        // console.log(pokeName)
        let pokemon = document.createElement('li');
        let pokeIdNum = document.createElement('p');
        let pokeType = document.createElement('p');
        pokeType.className = 'pType';
        pokeIdNum.className = 'pId';
        pokemon.innerHTML = pokeName;
        pokemonList.appendChild(pokemon);
        pokemon.appendChild(pokeIdNum);
        pokemon.appendChild(pokeType);
        // for(t = 1; t <= 9; t++)
        // console.log
        // console.log(p)
        let i = p + 1;
        // console.log(t)
        if(i === p + 1){
            fetch(`${baseURl}${i}`)
            .then(function(pokeIndex){
                return pokeIndex.json()
            })
            .then(function(json){
                // console.log(json.id);
                let mainType = json.types[0].type.name;
                let pIdNum = json.id;
                pokeType.innerText = `Main Type: ${mainType.toUpperCase()}`;
                pokeIdNum.innerText = `ID: ${pIdNum}`;
            })
        } 
    }
    
})