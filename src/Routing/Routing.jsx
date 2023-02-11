import { Routes, Route } from 'react-router-dom'
import React from 'react'
import DashView from '../components/DashView/DashView'
import IdChoose from '../components/IdChoose/IdChoose'
// import { AuthContext } from '../../service/context.js';
// import Home from './components/Home/Home'

export default function Routing(props) {

  // const userContext = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<IdChoose setCurrentUser={props.setCurrentUser} />} />
      {/* <Route path={"/user/" + userContext.id }  element={<DashView />} /> */}
      <Route path="/user/:id"  element={<DashView />} />
    </Routes>
  )
}
