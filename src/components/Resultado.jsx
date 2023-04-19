import React from 'react'
import './styles/Resultado.css'

const Resultado = (props) => {
  return (
    <>
    <div className="resultado">
        <img src={props.imagen} alt={props.nombre} />
        <div className="resultado-texto">
            <h3>{props.nombre}</h3>
            <p>{props.contenido}</p>
        </div>
    </div>
    </>
  )
}

export default Resultado