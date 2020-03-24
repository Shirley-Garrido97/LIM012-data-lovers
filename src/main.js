import data from './data/pokemon/pokemon.js';

const pokemonList = data.pokemon;
const showPokemon = (list) => {
  const containerPokemon = document.getElementById('container-pokemon');
  list.forEach((pokem) => {
    const card = `          
      <div class="pokemon-group">
        <div class="pokemon-img"> 
          <img src="${pokem.img}">
        </div>
        <div class="pokemon-info">
          <p class="poke-name">${pokem.name}</p>
          <p class="poke-num"> N° ${pokem.num}</p>
          <p class="poke-info"> CP Máx: ${pokem.stats['max-cp']}</p>
          <p class="poke-info"> HP Máx: ${pokem.stats['max-hp']}</p>
        </div>
      </div> `;
    containerPokemon.innerHTML += card;
  });
};
showPokemon(pokemonList);


/*const x = document.getElementById('selectType');
x.addEventListener('change', () => {
  const selectedValue = document.getElementById('selectType').value;
  const containerPokemon = document.getElementById('container-pokemon');
  console.log(selectedValue);
  if (selectedValue === 'all') {
    containerPokemon.innerHTML = '';
    showPokemon(pokemonList);
  } else {
    const typeFilter = pokemonList.filter(
      pokemon => pokemon.type[0] === selectedValue || pokemon.type[1] === selectedValue);
    containerPokemon.innerHTML = '';
    showPokemon(typeFilter);
  }
});*/
