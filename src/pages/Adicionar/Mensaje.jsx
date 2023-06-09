import React, { useContext } from 'react'
import Nav from '../../navbar/Nav'
import Context from '../../context/Context'
import Resultado from '../../components/Resultado'
import { useNavigate } from 'react-router-dom'

const Mensaje = () => {
  const {datos} = useContext(Context)
  const navegacion=useNavigate()

  const adicionarNuevoTema=()=>{
    navegacion('/adicionar')
  }
  return (
    <>
    <Nav/>
    <section className="adicionar adicionar-mensaje">
      <div className="box-adicionar box-mensaje">
      <div className="mensaje-texto">
      <h2>¡El tema <strong><em>{datos[datos.length-1].nombre}</em></strong> fue añadido existosamente!</h2>
      <p>Nuestro equipo estará revisando el contenido. Te llegará un correo a {datos[datos.length-1].email} con la confirmación de la aprobación. Para estar al tanto de los artículos más interesantes, suscríbete al newsletter.</p>
      <h3>Tema añadido:</h3>
      </div>
      <Resultado imagen={datos[datos.length-1].imagen} nombre={datos[datos.length-1].nombre} contenido={datos[datos.length-1].contenido} valor={datos.length-1}/>
      <button className="btn" onClick={adicionarNuevoTema}>ADICIONAR OTRO TEMA</button>
      </div>
    </section>
    </>
  )
}

export default Mensaje