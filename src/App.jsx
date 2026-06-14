import React from 'react'
import { useState } from 'react'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Roles from './componentes/Roles/Roles'
import Dashboard from './componentes/Dashboard/Dashboard'
import TokenContext from './contextos/TokenContext'
import UserContext from './contextos/UserContext'

function App() {
  
  const usuario = "Adri"
  const token = "eiyuf445nrtv7"
  const menu = "Apartados menu"

  const [user, setUser] = useState(usuario)

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 cabecera'>
            <Cabecera usuario={user}></Cabecera>
          </div>
        </div>
        <UserContext.Provider value={user}>
          <div className='row'>
            <div className='col-2 roles'>
              <Roles menu={menu}></Roles>
            </div>
            <div className='col-10 dashboard'>
              <TokenContext.Provider value={token}>
                <Dashboard></Dashboard>
              </TokenContext.Provider>
            </div>
          </div>
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App
