import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'
import Footer from '../components/shared/Footer'

const Home = () => {
  return (
    <article className='pokedex'>
      <img className='pokedex__img' src="/images/home/pokedex.png" alt="" />
      <header className='pokedex__header-home'>
        <h2 className="pokedex__subtitle">Hi trainer!</h2>
        <p className='pokedex__text'>Give me your name to see the pokedex</p>
      </header>
      <FormHome />
      <Footer />
    </article>
  )
}

export default Home