import React from 'react'
import '../PokemonList/PokemonList.css'

const Pokemon = ({name,image,id}) => {
  return (
    <div className="card">
    <div className='pokemon-card'>
      <div className='poke-name'>{name}</div>
        <img src={image} alt={id} />
    </div>
    </div>
  )
}

export default Pokemon
