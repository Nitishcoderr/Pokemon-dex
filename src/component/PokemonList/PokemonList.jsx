import React, { useEffect, useState } from 'react';
import './PokemonList.css';
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon' // This downlod list of 20 pokemon

  const downlodLoadPokemon = async () => {
    const response = await axios.get(POKEDEX_URL);
    const pokemonResults = response.data.results; // we get the array of pokemon from results

    // iterating over the array of pokemon,and using their url,to create an array of promises 
    // that will downlod those 20 pokemon
    const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

    // Passing that promise array to aios.all
    const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokemon detailed data
    console.log(pokemonData);
    // now iterate on the data of each pokemon ,and extract id,name,image,type
    const res = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;

      return {
        id:pokemon.id,
        name: pokemon.name,
        image: (pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
        types: pokemon.types,
      };
    });
    console.log(res);
    setPokemonList(res)
    setIsLoading(false);
  };

  useEffect(() => {
    downlodLoadPokemon();
  }, []);

  return (
    <div className="pokemon-list-wrapper">
      <div>Pokemon List </div>
      {isLoading ? 'Loading...' :
      pokemonList.map((p)=>
      <Pokemon name={p.name} image={p.image} key={p.id} />
      )
      
      
      }
    </div>
  );
};

export default PokemonList;
