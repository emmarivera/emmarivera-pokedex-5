import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexId/Pokemon404'

const PokedexById = () => {

  const  {id} = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
   axios.get(URL)
    .then(res => setPokemon(res.data))
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
  }, [])
  
  if(hasError){
    return <Pokemon404 />
  }
    
  return (
    <article>
    <header>
        <img  src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
    </header>
    <section>
        <h3>{pokemon?.name}</h3>
        <h3>{pokemon?.id}</h3>
        <h3>{pokemon?.weight}</h3>
        <h3>{pokemon?.height}</h3>
       
       <p>Abilities</p>
        <ul>
            {
                pokemon?.abilities.map(ability => (
                    <li key={ability.slot}>{ability.ability.name}</li>
                ))
            }
        </ul>
       
        <p>Type</p>
        <ul>
            {
                pokemon?.types.map(type => (
                    <li key={type.slot}>{type.type.name}</li>
                ))
            }
        </ul>
    </section>
    <p>Stats</p>
        <ul>
            {
                pokemon?.stats.map(stat => (
                    <li  key={stat.stat.name}>
                        <span>{stat.stat.name}</span>
                        <span>{stat.base_stat}</span>
                    </li>
                ))
            }
        </ul>
        
        <p>Movements</p>
        <ul>
            {
                pokemon?.moves.map(move => (
                    <li key={move}>{move.move.name}</li>
                ))
            }
        </ul>
        </article>
  )
}

export default PokedexById