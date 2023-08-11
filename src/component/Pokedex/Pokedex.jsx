import React from 'react'
import Search from '../Secarch/Search'
import './Pokedex.css'
import PokemonList from '../PokemonList/PokemonList'

const Pokedex = () => {
  return (
    <div className='pokedexWrapper'>
      <Search/>
      <PokemonList/>
    </div>
  )
}

export default Pokedex
