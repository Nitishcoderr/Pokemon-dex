import React, { useState } from 'react'
import Search from '../Secarch/Search'
import './Pokedex.css'
import PokemonList from '../PokemonList/PokemonList'
import PokemonDetails from '../PokemonDetails/PokemonDetails'

const Pokedex = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='pokedexWrapper'>
      <Search updateSearchTerm={setSearchTerm} />
      { (!searchTerm) ? <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />}
    </div>
  )
}

export default Pokedex
