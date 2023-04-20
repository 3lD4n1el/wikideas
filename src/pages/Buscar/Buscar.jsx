import React from 'react'
import Nav from '../../navbar/Nav'
import '../styles/Buscar.css'
import { useNavigate } from 'react-router-dom'

const Buscar = () => {
  const navegacion = useNavigate()
  const onSearch=()=>{
    navegacion('/resultados')
  }
  return (
    <>
    <Nav/>
    <section className="buscar">
    <h1 className='buscar-title'>Wikideas</h1>
    <div className="search-bar">
    <input type="text" placeholder='Escribe un tema...' />
    <button><img src="icons/lupa.png" alt="" /></button>
    </div>
    <button className='btn' onClick={onSearch}>BUSCAR</button>
    </section>
    </>
  )
}

export default Buscar