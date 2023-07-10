import React, { useContext } from 'react'
import './styles/Articulo.css'
import Context from '../context/Context'
import { useNavigate } from 'react-router-dom'

const Articulo = (props) => {

  const {datos}=useContext(Context)
  const navegacion = useNavigate()

  const showArticulo=()=>{
    navegacion(`/asunto/${props.valor}`)
  }

  return (
    <div className="articulo" onClick={showArticulo}>
      <div className="img">
        <img src={datos[props.valor].imagen} alt={datos[props.valor].nombre} />
        </div>
        <div className="articulo-texto">
        <h4>{datos[props.valor].nombre}</h4>
        <p>{datos[props.valor].contenido}</p>
        </div>
    </div>
  )
}

export default Articulo