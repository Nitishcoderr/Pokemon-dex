import React from 'react';
import '../PokemonList/PokemonList.css';
import { Link } from 'react-router-dom';

const Pokemon = ({ name, image, id }) => {
  return (
    <div className="card">
      <Link to={`/pokemon/${id}`}>
        <div className="pokemon-card">
          <div className="poke-name">{name}</div>
          <img
            src={image}
            alt={id}
          />
        </div>
      </Link>
    </div>
  );
};

export default Pokemon;
