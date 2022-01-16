const poke_container = document.getElementById('poke_container');
const pokemon_number = 151;

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_number; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/`+id.toString();
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
}

const createPokemonCard = (pokemon) => {


    const pokemontElement = document.createElement('div');
    pokemontElement.classList.add('pokemon');

    const pokeInnerHTML = `<div class="pokemon-info">
        <div class="img-container"><img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"></div>

        <div class="pokemon-main-data">
        <h3>
            Nombre: ${pokemon.name}
        </h3>
        <p> Type: ${pokemon.types[0].type.name}</p>
        </div>

        <div class="pokemon-stats">
        <p>
            Height: ${pokemon.height}
        </p>
        <p>
            Weight: ${pokemon.weight}
        </p>
        </div>

    </div>`;

    pokemontElement.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemontElement);

    //*SWITCH TIPO DE POKEMON
    pokemontElement.classList.add(pokemon.types[0].type.name);

}

fetchPokemons();





