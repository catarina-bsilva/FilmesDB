import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Outlet /* Permite ver o conteudo dos componentes ao clicar no link */ />
    </div>
  )
}

export default App
