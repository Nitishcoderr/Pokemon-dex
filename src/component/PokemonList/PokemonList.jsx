import React, { useEffect, useState } from 'react';
import './PokemonList.css';
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [nexturl, setnextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')

  const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')
// This downlod list of 20 pokemon

  const downlodLoadPokemon = async () => {
    setIsLoading(true)
    const response = await axios.get(pokedexUrl);
    const pokemonResults = response.data.results; // we get the array of pokemon from results

    console.log(response.data);
    setnextUrl(response.data.next);
    setPrevUrl(response.data.previous);

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
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.front_shiny,
        types: pokemon.types,
      };
    });
    console.log(res);
    setPokemonList(res);
    setIsLoading(false);
  };

  useEffect(() => {
    downlodLoadPokemon();
  }, [pokedexUrl]);

  return (
    <div className="pokemon-list-wrapper">
      <div className="pokemon-wrapper">
        {isLoading
          ? 'Loading...'
          : pokemonList.map((p) => (
              <Pokemon
                name={p.name}
                image={p.image}
                key={p.id}
              />
            ))}
      </div>
      <div className='controls'>
        <button disabled={prevUrl == null} onClick={()=> setPokedexUrl(prevUrl)} >Previous</button>
        <button disabled={nexturl == null} onClick={()=> setPokedexUrl(nexturl)} >Next</button>
      </div>
    </div>
  );
};

export default PokemonList;
