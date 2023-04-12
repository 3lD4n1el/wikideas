import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <>
    <nav>
    <h1>Wikideas</h1>
    <ul className='nav-links'>
        <li><NavLink to='/inicio'>Inicio</NavLink></li>
        <li><NavLink to='/adicionar'>Adicionar</NavLink></li>
        <li><NavLink to='/editar'>Editar</NavLink></li>
        <li className='link-buscar'><NavLink to='/buscar'>Buscar
        &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
        </NavLink></li>
        <img src='public\icons\lupa.png' className='lupa'/>
    </ul>
    </nav>
    </>
  )
}

export default Nav