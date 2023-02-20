import React from 'react'

const PokemonList = ( { pokemon } ) => {
  return (
    <div>
        {pokemon.map(p => (
            <div key={p}>
                <p>{p}</p>
            </div>
        ))}
    </div>
  )
}

export default PokemonList