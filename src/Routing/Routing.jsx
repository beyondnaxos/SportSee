import { Routes, Route } from 'react-router-dom'
import React, { useContext } from 'react'
import DashView from '../components/DashView/DashView'
import IdChoose from '../components/IdChoose/IdChoose'
import { AuthContext } from '../../service/context.js';
// import Home from './components/Home/Home'

export default function Routing() {

  const userContext = useContext(AuthContext);
  
  return (
    <Routes>
      {/* default route for choosing id */}
      <Route path="/" element={<IdChoose />} />
      <Route path={"/user/" + userContext.id }  element={<DashView />} />
    </Routes>
  )
}
