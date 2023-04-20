import React from 'react'
import './styles/Resultado.css'
import { useNavigate } from 'react-router-dom'

const Resultado = (props) => {
  const navegacion = useNavigate()
  const showResultado=()=>{
    navegacion(`/asunto/${props.valor}`)
  }
  return (
    <>
    <div className="resultado" onClick={showResultado}>
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