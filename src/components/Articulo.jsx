import React, { useContext } from 'react'
import './styles/Articulo.css'
import Context from '../context/Context'

const Articulo = (props) => {
  const {datos}=useContext(Context)
  return (
    <div className="articulo">
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