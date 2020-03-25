import data from './data/pokemon/pokemon.js';
import {
  filterByType,
  searchPokemonByName,
} from './data.js';

const goPokedex = document.getElementById('btnStart');
goPokedex.addEventListener('click', () => {
  document.getElementById('view1').classList.add('hide');
  document.getElementById('view2').classList.remove('hide');
});

const returnHome = document.getElementById('home');
returnHome.addEventListener('click', () => {
  document.getElementById('view2').classList.add('hide');
  document.getElementById('view1').classList.remove('hide');
});

const pokemonList = data.pokemon;
const containerPokemons = document.getElementById('container-card');
const elementTypeFilter = document.getElementById('element-type-filter');


const showPokemon = (list) => {
  const containerPokemon = document.getElementById('container-card');
  list.forEach((pokem) => {
    const card = `
    <div class="pokemon-group">
      <div class="poke-img">
        <img src="${pokem.img}">
      </div>
      <div class="container-info">
        <p class="poke-name bold">${pokem.name}</p>
        <p class="poke-num"> N° ${pokem.num}</p>
        <p class="poke-info bold"> CP Máx: ${pokem.stats['max-cp']}</p>
        <p class="poke-info bold"> HP Máx: ${pokem.stats['max-hp']}</p>
      </div>
    </div>`;
    containerPokemon.innerHTML += card;
  });
  return containerPokemon;
};

window.addEventListener('load', () => {
  showPokemon(pokemonList);
});


elementTypeFilter.addEventListener('change', () => {
  if (elementTypeFilter.value === 'all') {
    containerPokemons.innerHTML = '';
    showPokemon(pokemonList);
  } else {
    const catchFilter = filterByType(pokemonList, elementTypeFilter.value);
    containerPokemons.innerHTML = '';
    showPokemon(catchFilter);
  }
});

/* const typeFilter = pokemonList.filter(
  pokemon => pokemon.type[0] === elementTypeFilter || pokemon.type[1] === elementTypeFilter); */


const btnSearch = document.getElementById('btn');
const inputSearch = document.getElementById('search');

btnSearch.addEventListener('click', () => {
  containerPokemons.innerHTML = '';
  showPokemon(searchPokemonByName(pokemonList, inputSearch.value));
});


/* pokemonList.forEach((obj) => {
  const requiredData = [];
  console.log(obj.img);
  console.log(obj.name);
  console.log(obj.num);
  console.log(obj.img);
  console.log(obj.stats['max-cp']);
  console.log(obj.stats['max-hp']);
}); */

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector('.container-btn-top').classList.add('show');
  } else {
    document.querySelector('.container-btn-top').classList.remove('show');
  }
};

document.querySelector('.container-btn-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});