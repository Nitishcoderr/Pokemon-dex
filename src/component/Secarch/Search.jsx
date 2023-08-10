import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='searchWrapper'>
      <input autoFocus id='pokemon-name-search' type="text" placeholder='pokemon name...' />
    </div>
  )
}

export default Search
