import React from 'react'
import './styles/Inicio.css'
import Nav from '../navbar/Nav'
import Articulo from '../components/Articulo'
import { NavLink } from 'react-router-dom'

const Inicio = () => {
  return (
    <>
    <Nav/>
    <section className="inicio">
      <div className="inicio-texto">
      <h1>Wikideas</h1>
      <p>Formamos una enciclopedia colaborativa y universal,  abierta a todos los que deseen aportar sus conocimientos. Nuestro objetivos es ofrecer contenido libre, gratuito y confiable a través de la internet.
¡Sumate a participar de esta gran comunidad!</p>
      <div className="btns-inicio">
        <h4>Comienza ahora!</h4>
        <NavLink to='/adicionar' className='btn'>Adiciona un contenido</NavLink>
        <NavLink to='/buscar' className='btn'>Comienza a explorar</NavLink>
      </div>
      </div>
      <div className='incio-right'>
      <div className="inicio-videos">
        <div className="video">
        <h3>Quiénes somos:</h3>
        <img src="public\img\video1.PNG" alt="video 1" />
        </div>
        <div className="video">
        <h3>Cómo puedes ayudarnos:</h3>
        <img src="public\img\video2.PNG" alt="video 2" />
        </div>
      </div>
      <div className="inicio-articulos-box">
        <h3>Artículos destacados:</h3>
        <div className="inicio-articulos">
        <Articulo/>
        <Articulo/>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Inicio