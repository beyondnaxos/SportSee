import { Routes, Route } from 'react-router-dom'
import React from 'react'
import DashView from '../components/DashView/DashView'
import IdChoose from '../components/IdChoose/IdChoose'


/**
 * If the user is not logged in, show the login page, otherwise show the dashboard.
 */

export function Routing(props) {

  // const userContext = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<IdChoose setCurrentUser={props.setCurrentUser} />} />
      <Route path="/user/:id"  element={<DashView />} />
    </Routes>
  )
}

export default Routing
