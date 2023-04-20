import React, {useState} from 'react'
import Context from './Context'

const Provider = ({children}) => {
  const [datos,setDatos]=useState([])
  return (
    <Context.Provider value={{
        datos,
        setDatos
    }}>
        {children}
    </Context.Provider>
  )
}

export default Provider