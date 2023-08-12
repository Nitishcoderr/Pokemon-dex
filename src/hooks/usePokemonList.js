import { useEffect, useState } from "react";
import axios from 'axios';


function usePokemonList() {
    // Advance method to use usestate
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        nexturl: '',
        prevUrl: '',
        pokedexUrl: 'https://pokeapi.co/api/v2/pokemon',
        type:''
    });

    const downlodLoadPokemon = async () => {

        // iterating over the array of pokemon,and using their url,to create an array of promises
        // that will downlod those 20 pokemon
            setPokemonListState((state) => ({ ...state, isLoading: true }));
            const response = await axios.get(pokemonListState.pokedexUrl);
            const pokemonResults = response.data.results; // we get the array of pokemon from results
    
            setPokemonListState((state) => ({
                ...state,
                nexturl: response.data.next,
                prevUrl: response.data.previous,
            }));
            const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

            // Passing that promise array to aios.all
            const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokemon detailed data
            console.log(pokemonData);
            // now iterate on the data of each pokemon ,and extract id,name,image,type
            const pokeListResult = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;

                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.sprites.other
                        ? pokemon.sprites.other.dream_world.front_default
                        : pokemon.sprites.front_shiny,
                };
            });

            setPokemonListState((state) => ({ ...state, pokemonList: pokeListResult, isLoading: false }));
        
    };


    useEffect(() => {
        downlodLoadPokemon()
    }, [pokemonListState.pokedexUrl])

    return [ pokemonListState, setPokemonListState ]
}

export default usePokemonList;