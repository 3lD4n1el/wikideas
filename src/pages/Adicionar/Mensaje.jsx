import React, { useContext } from 'react'
import Nav from '../../navbar/Nav'
import Context from '../../context/Context'
import Resultado from '../../components/Resultado'

const Mensaje = () => {
  const {datos} = useContext(Context)
  return (
    <>
    <Nav/>
    <section className="adicionar adicionar-mensaje">
      <div className="box-adicionar box-mensaje">
      <div className="mensaje-texto">
      <h2>¡El tema <strong><em>{datos.nombre}</em></strong> fue añadido existosamente!</h2>
      <p>Nuestro equipo estará revisando el contenido. Te llegará un correo a {datos.email} con la confirmación de la aprobación. Para estar al tanto de los artículos más interesantes, suscríbete al newsletter.</p>
      <h3>Tema añadido:</h3>
      </div>
      <Resultado imagen={datos.imagen} nombre={datos.nombre} contenido={datos.contenido}/>
      </div>
    </section>
    </>
  )
}

export default Mensaje