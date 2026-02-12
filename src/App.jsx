import React from 'react'
import Landingpage from './Components/Landingpage'
import { Route, Routes } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landingpage />} />
    </Routes>
  )
}

export default App
