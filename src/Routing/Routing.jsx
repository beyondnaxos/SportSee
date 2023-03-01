import { Routes, Route } from 'react-router-dom'
import React from 'react'
import DashView from '../components/DashView/DashView'
import IdChoose from '../components/IdChoose/IdChoose'
import Error404 from '../components/Error/ErrorRoute'


/**
 * If the user is not logged in, show the login page, otherwise show the dashboard.
 */

export function Routing(props) {

  return (
    <Routes>
      <Route path="/" element={<IdChoose setCurrentUser={props.setCurrentUser} />} />
      <Route path="/user/:id"  element={<DashView />} />
      <Route path="*" element={< Error404 /> } />
    </Routes>
  )
}

export default Routing
