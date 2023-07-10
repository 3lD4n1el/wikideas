import React, {useState} from 'react'
import Context from './Context'

const Provider = ({children}) => {
  const datosIniciales=[
    {
      nombre: 'Velociraptor',
      categorias: 'depredador, dinosaurio',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Velociraptor_mongoliensis.jpg',
      contenido: 'Velociraptor (em português, Velociraptor ou Velocirraptor),[1] é um gênero de dinossauros terópodes que viveram aproximadamente a 84 e 85 milhões de anos atrás, durante a última parte do período Cretáceo.[2] Duas espécies são reconhecidas atualmente, embora outras tenham sido atribuídas no passado. A espécie-tipo é V. Mongoliensis; fósseis desta espécie foram descobertos na Mongólia. A segunda espécie, V. Osmolskae, foi nomeada em 2008 a partir do crânio encontrado na Mongólia Interior, China.'
    },
    {
      nombre: 'Tiranosaurio Rex',
      categorias: 'dinosaurio',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Tyrannosaurus_Rex_Holotype.jpg/1024px-Tyrannosaurus_Rex_Holotype.jpg',
      contenido: 'Tyrannosaurus (em português Tiranossauro)[1] é um gênero de dinossauros terópodes celurossauros que viveram durante o final do período cretáceo, há aproximadamente 66 milhões de anos, em toda a região que hoje é a América do Norte. O único representante do gênero é Tyrannosaurus rex, que ganhou o epíteto específico de rex, por ser o maior dinossauro carnívoro conhecido quando foi descoberto.'
    },
  ]

  const [datos,setDatos]=useState(datosIniciales)
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