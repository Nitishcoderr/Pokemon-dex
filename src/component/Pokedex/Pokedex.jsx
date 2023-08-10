import React from 'react'
import Search from '../Secarch/Search'
import './Pokedex.css'
import PokemonList from '../PokemonList/PokemonList'

const Pokedex = () => {
  return (
    <div className='pokedexWrapper'>
      <h1 className='pokedex-heading' >Pokedex</h1> 
      <Search/>
      <PokemonList/>
    </div>
  )
}

export default Pokedex
