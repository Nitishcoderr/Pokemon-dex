import React from 'react';
import { useParams } from 'react-router-dom';
import usePokemonDetails from '../../hooks/usePokemonDetails';


const PokemonDetails = ({pokemonName}) => {
  const { id } = useParams();
  const [pokemon] = usePokemonDetails(id,pokemonName)




  return (
    <div className="pokemonDetailswrapper">
      <img
        className="pokemon-details-image"
        src={pokemon.image}
        alt=""
      />
      <p className="pokemon-details-name">{pokemon.name}</p>
      <p className="pokemon-details-weight">Weight:{pokemon.weight}</p>
      <p className="pokemon-details-height">Height:{pokemon.height}</p>
      <div className="pokemon-types">
        {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
      </div>
      {
        pokemon.types && pokemon.similarPokemons && 
        <div>
          More {pokemon.types[0]} type pokemons
          <ul>{
            pokemon.similarPokemons.map((p)=> <li key={p.pokemon.url} >
              {p.pokemon.name}
            </li> )
            
            }
          </ul>
        </div>
      }
    </div>
  );
};

export default PokemonDetails;
