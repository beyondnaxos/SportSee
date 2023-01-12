import { Routes, Route } from 'react-router-dom'
import React from 'react'
import DashView from '../components/DashView/DashView'
// import Home from './components/Home/Home'




export default function Routing() {

  


  return (
    <Routes>
      <Route path="/" element={<DashView />} />
    </Routes>
  )
}
