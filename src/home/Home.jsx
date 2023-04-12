import React from 'react'
import Nav from '../navbar/Nav'
import { Navigate, NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <>
    <Nav/>
    <section className="home">
      <h1 className='home-title'>Wikideas</h1>
      <h2 className='home-description'>Ven a descubrir la nueva forma de adquirir conociemiento</h2>
      <p>¡Comienza ahora!</p>
      <NavLink to='/inicio' className='btn'>INICIAR</NavLink>
    </section>
    </>
  )
}

export default Home