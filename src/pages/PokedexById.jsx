import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import Header from '../components/shared/Header'
import './styles/pokedexById.css'

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
    <article className='pokemon_id'>
        <Header />
        <div className='container__pokeId'>
        <div className="imgid-container">
        <img  className='pokemon_id-img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
        <div className='titleid__pokemon'>
        <h3 className=''>{pokemon?.id}</h3>
        <h3 className='pokeid__name'>{pokemon?.name}</h3>
        </div>
        <ul className='height-weight'>
        <li className='weight'>Weight <span>{pokemon?.weight}</span></li>
        <li className='height'>Height <span>{pokemon?.height}</span></li>
        </ul>
    
       
    <article className="type-abilities">
        <header className='type'>
        <div className="label__type">Type </div>
        <div className="poke__type">
            {
                pokemon?.types.map(type => (
                    <li key={type.slot}>{type.type.name}</li>
                    ))
                }
        </div>
        </header>

        <header className='abilities'>
        <div className="label__abilities">Abilities </div>
        <div className="poke__abilities">
            {
                pokemon?.abilities.map(ability => (
                    <li key={ability.slot}>{ability.ability.name}</li>
                    ))
            }
        </div>
        </header>
    </article>
    <section>
    <div className="stats"> 
     <div className="stats__title">Stats</div>
     
            {
                pokemon?.stats.map(stat => (
                    <div className='stats__poke'  key={stat.stat.name}>
                        <div className='stats__name'>{stat.stat.name}</div>
                            <div className='stats__number'>{`${stat.base_stat}/150`}
                            <div className='stat__bar'>
                                <div className='stat__base-stat' style={{width:`${(100 * stat.base_stat)/150}%`}}></div>
                            </div>
                        </div>
                    </div>                
                ))
            }

        
    </div>
        </section>
        
            {/* <span className='stat__number'>{stat.base_stat}/150</span>
    <div className='stat__bar'>
    <span className='stat__base-stat' style={{width:`${(800 * stat.base_stat)/150}px`}}></span>
</div> */}
    <article className="moves">
        <div className='moves__title'>Movements</div>
        <div className='moves__poke'>
            {
                pokemon?.moves.map(move => (
                    <li className='move__poke' key={move}>{move.move.name}</li>
                ))
            }
        </div>
        </article>
    </div>
        </article>
  )
}

export default PokedexById