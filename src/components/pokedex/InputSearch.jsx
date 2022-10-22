import React from 'react'
import { useNavigate } from 'react-router-dom'

const InputSearch = () => {

    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        e.target.search.value
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
    }


  return (
    <form onSubmit={submit}>
        <input className='pokemon__input' id='search' type="text" placeholder='Search a pokemon.' />
        <button className='pokemon__btn'>Search</button>
    </form>
  )
}

export default InputSearch