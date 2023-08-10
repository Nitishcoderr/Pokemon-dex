import React from 'react'

const Pokemon = ({name,image,id}) => {
  return (
    <div>
      <div>{name}</div>
      <div><img src={image} alt={id} /></div>
    </div>
  )
}

export default Pokemon
