import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Buscar from '../pages/Buscar'
import Adicionar from '../pages/Adicionar'
import Editar from '../pages/Editar'
import Inicio from '../pages/Inicio'


const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/buscar' element={<Buscar/>}/>
        <Route path='/editar' element={<Editar/>}/>
        <Route path='/adicionar' element={<Adicionar/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
    </Routes>
    </>
  )
}

export default Router