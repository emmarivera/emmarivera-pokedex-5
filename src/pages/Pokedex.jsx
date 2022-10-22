import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import Header from '../components/shared/Header'
import './styles/pokedex.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')

  useEffect(() => {
    if (typeSelected !== 'All Pokemons') {
      //Si se seleccionó un tipo
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      //Si quiero todos los pokemons
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      axios.get(URL)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
    }
  }, [typeSelected])
  
  const userName = useSelector(state => state.userName)

  // Lógica de Paginación
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(16)
  const initialPoke = (page - 1) *  pokePerPage
    //initialPoke + pokePerPage +1
  const finalPoke = page * pokePerPage

  return (
    <div className='pokedex__poke'>
        <Header />
      <header className='pokedex__welcome-container'>
        <p className='pokedex__welcome'>Welcome <span className='pokedex__name-user'>{userName}</span>, here you can find your favorite pokemon.</p>
        </header>
      <aside className='pokedex__menus'>
        <InputSearch />
        <SelectByType setTypeSelected={setTypeSelected} setPage={setPage}/>
      </aside>
      <div className="pagination">
        <Pagination 
          page = {page}
          pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)} 
          setPage={setPage}
          />
      </div>
      <main className='card__pokemon'>
        <div className="card-container">
          {
            pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
              <CardPoke
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
      <Pagination 
          page = {page}
          pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)} 
          setPage={setPage}
        />
    </div>
  )
}

export default Pokedex