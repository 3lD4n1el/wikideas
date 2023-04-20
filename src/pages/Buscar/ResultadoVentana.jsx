import React, { useContext } from 'react'
import Context from '../../context/Context'
import { useParams } from 'react-router-dom'
import Nav from '../../navbar/Nav'

const ResultadoVentana = () => {
  const {datos}=useContext(Context)
  const dato = useParams()
  return (
    <>
    <Nav/>
    <div className='buscar'>
      <div className="res-container">
        <div className="res-text">
          <div className="res-name">
            <button><img src="icons/caret.png" alt="caret" /></button>
            <h1>{datos[dato.key].nombre}</h1>
            </div>
        <h3 className="categorias">Categorías: <span>{datos[dato.key].categorias}</span></h3>
        <p>{datos[dato.key].contenido}</p>
        </div>
        <div className="res-img">
          <img src={datos[dato.key].imagen} alt={datos[dato.key].nombre} />
          <div className="res-btns">
          <button className='btn'>EDITAR</button>
          <button className='btn'>CALIFICAR</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ResultadoVentana