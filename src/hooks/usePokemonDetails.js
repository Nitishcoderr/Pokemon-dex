import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";

function usePokemonDetails(id){

    console.log(id);
  
    const [pokemon, setPokemon] = useState([]);
  
    const downlodPokemon = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}
          `);
          const pokemonofSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name:''}`)

      setPokemon({
        name: response.data.name,
        image: response.data.sprites.other.dream_world.front_default,
        weight: response.data.weight,
        height: response.data.height,
        types: response.data.types.map((t) => t.type.name),
        similarPokemons:pokemonofSameTypes.data.pokemon.slice(0,5)
      });
      setPokemonListState({...pokemonListState,type:response.data.types ? response.data.types[0].type.name:''})
}

const [pokemonListState,setPokemonListState] =  usePokemonList();

useEffect(() => {
  downlodPokemon();
}, [])

return [ pokemon]



}

export default usePokemonDetails;