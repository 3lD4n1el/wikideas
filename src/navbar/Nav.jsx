import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <>
    <nav>
    <h1>Wikideas</h1>
    <ul className='nav-links'>
        <li><NavLink to='/home'>Inicio</NavLink></li>
        <li><NavLink to='/adicionar'>Adicionar</NavLink></li>
        <li><NavLink to='/editar'>Editar</NavLink></li>
        <li><NavLink to='/buscar'>Buscar</NavLink></li>
    </ul>
    </nav>
    </>
  )
}

export default Nav