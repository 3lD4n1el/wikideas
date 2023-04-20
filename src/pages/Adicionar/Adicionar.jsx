import React, { useContext, useState } from 'react'
import Nav from '../../navbar/Nav'
import '../styles/Adicionar.css'
import { adicionarData } from '../assets/adicionar'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Context from '../../context/Context'

const Adicionar = () => {

  const navegacion = useNavigate()
  const {handleSubmit,register} = useForm()
  const {datos,setDatos}=useContext(Context)

  const obtener = (data)=>{
    setDatos(currentDatos=>[...currentDatos,data])
    console.log(data)
    navegacion('/adicionar-mensaje')
  }

  return (
    <>
    <Nav/>
    <section className="adicionar">
      <div className="box-adicionar">
        <div className="adicionar-text">
          <h2>Adicionar nuevo tema:</h2>
          <h6>Los campos indicados con * son obligatorios</h6>
        </div>
        <div className="fields">
          <form onSubmit={handleSubmit(obtener)}>
          
          {adicionarData.map((field,i)=>{
            if(field.type==='textarea'){
              return (
                <div className="field" key={i}>
                <label htmlFor={field.name}>{field.title}: {field.obligatorio && '*'}</label>
                <textarea id={field.name} placeholder={`${field.placeHolder}...`}
                {...register(`${field.name}`,{})}/>
                </div>
              )
            }else{
              return(
                <div className="field" key={i}>
              <label htmlFor={field.name}>{field.title}: {field.obligatorio && '*'}</label>
              <input type={field.type} id={field.name} placeholder={`${field.placeHolder}...`} 
              {...register(`${field.name}`,{})}/>
            </div>
              )
            }
          })}
          <div className="submit-box">
            <input className='btn' type='submit' value='ADICIONAR TEMA'/>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Adicionar