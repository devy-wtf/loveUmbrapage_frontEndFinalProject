import { useState } from 'react'
import './styles/App.css'
import RegisterPage from './pages/RegisterPage'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import MerchPage from './pages/MerchPage'
import { Routes, Route } from 'react-router-dom'




function App() {


  return (
    <Routes>
      <Route path="Main" element={<MainPage />} />
      <Route path='/Login' element={<LoginPage />} />
      <Route path='/Register' element={<RegisterPage />} />
      <Route path='/Merch' element={<MerchPage />} />


    </Routes>
  )
}

export default App
