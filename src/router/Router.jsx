import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Buscar from '../pages/Buscar/Buscar'
import Adicionar from '../pages/Adicionar/Adicionar'
import Inicio from '../pages/Inicio'
import Mensaje from '../pages/Adicionar/Mensaje'
import Resultados from '../pages/Buscar/Resultados'
import ResultadoVentana from '../pages/Buscar/ResultadoVentana'


const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/buscar' element={<Buscar/>}/>
        <Route path='/resultados' element={<Resultados/>}/>
        <Route path='/asunto/:key' element={<ResultadoVentana/>}/>
        <Route path='/adicionar' element={<Adicionar/>}/>
        <Route path='/adicionar-mensaje' element={<Mensaje/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
    </Routes>
    </>
  )
}

export default Router