import React from 'react'
import './styles/header.css'

const Header = () => {


    
  return (
   <header className="header">
     <div className="header__red">
        <div className="header__black"></div>
        
        <div className="header__circle">
            <div className="header__circle-int"></div>
        </div>
    </div>
        <div className="pokedex__container-header">
            <img className='pokedex__header-img' src="/images/home/pokedex.png" alt="" />
        </div>
  </header>
  )
}

export default Header