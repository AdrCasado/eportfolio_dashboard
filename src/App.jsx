import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Roles from './componentes/Roles/Roles'
import Dashboard from './componentes/Dashboard/Dashboard'

function App() {
  
  const usuario = "Adri"
  const token = "Cod_token"
  const menu = "Apartados menu"

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 cabecera'>
            <Cabecera usuario={usuario}></Cabecera>
          </div>
        </div>
        <div className='row'>
          <div className='col-2 roles'>
            <Roles menu={menu}></Roles>
          </div>
          <div className='col-10 dashboard'>
            <Dashboard token={token}></Dashboard>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
