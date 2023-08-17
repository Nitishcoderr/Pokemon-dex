import React from 'react'
import './Search.css'
import useDebounce from '../../hooks/useDebounce'

const Search = ({updateSearchTerm}) => {
  const debounceCallback = useDebounce((e)=>updateSearchTerm(e.target.value))

  return (
    <div className='searchWrapper'>
      <input onChange={debounceCallback} autoFocus id='pokemon-name-search' type="text" placeholder='pokemon name...' />
    </div>
  )
}

export default Search
