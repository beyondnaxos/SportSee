import { Routes, Route } from 'react-router-dom'
import React from 'react'
// import Home from './components/Home/Home'




export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<DashView />} />
    </Routes>
  )
}
