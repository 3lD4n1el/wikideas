import React, { useContext } from 'react'
import Context from '../../context/Context'
import Nav from '../../navbar/Nav'
import Resultado from '../../components/Resultado'
import { useNavigate } from 'react-router-dom'

const Resultados = () => {
    const {datos} = useContext(Context)
    const navegacion = useNavigate()

    const showResultado=()=>{
      navegacion('/')
    }
  return (
    <>
    <Nav/>
    <div className="buscar">
    <div className="search-bar res-search-bar">
    <input type="text" placeholder='Escribe un tema...' />
    <button><img src="icons/lupa.png" alt="" /></button>
    </div>
    <div className="res-cat">
        <div className="cat-box">
          <h3>Buscar por categorías:</h3>
          <div className="search-bar cat-search-bar">
          <input type="text" placeholder='Categoría...' />
          <button><img src="icons/lupa.png" alt="" /></button>
          </div>
        {datos.map((dato,i)=>(
          <p>{dato.categorias}</p>
        ))}
        </div>
        <div className="res-box">
            {datos.map((dato,i)=>(
                <Resultado key={i} imagen={dato.imagen} nombre={dato.nombre} contenido={dato.contenido} valor={i}/>
            ))}
        </div>
        </div>
    </div>
    </>
  )
}

export default Resultados