import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Buscar from '../pages/Buscar'
import Adicionar from '../pages/Adicionar'
import Editar from '../pages/Editar'


const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/buscar' element={<Buscar/>}/>
        <Route path='/editar' element={<Editar/>}/>
        <Route path='/adicionar' element={<Adicionar/>}/>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/*' element={<Navigate to='/home'/>}/>
    </Routes>
    </>
  )
}

export default Router