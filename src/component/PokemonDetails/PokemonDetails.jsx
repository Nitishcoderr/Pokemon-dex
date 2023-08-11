import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [pokemon, setPokemon] = useState([]);

  const downlodPokemon = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}
        `);
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      weight: response.data.weight,
      height: response.data.height,
      types: response.data.types.map((t) => t.type.name)
    });
    console.log(response.data);
  };

  useEffect(() => {
    downlodPokemon();
  }, []);

  return (
    <div className="pokemonDetailswrapper">
      <img className='pokemon-details-image'
        src={pokemon.image}
        alt=""
      />
      <p className='pokemon-details-name' >{pokemon.name}</p>
      <p className='pokemon-details-weight' >Weight:{pokemon.weight}</p>
      <p className='pokemon-details-height' >Height:{pokemon.height}</p>
      <div className="pokemon-types">
        {pokemon.types && pokemon.types.map((t) => 
          <div key={t}>{t}</div>
        )}
      </div>
    </div>
  );
};

export default PokemonDetails;
