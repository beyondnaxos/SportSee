import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, useParams } from 'react-router-dom'
import Routing from './Routing/Routing'
import NavBar from './components/NavBar/NavBar'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import SideBar from './components/SideBar/SideBar'
import { AuthContext, MockContext } from '../service/context.js'

function App() {
  let { id } = useParams()

  const [currentUser, setCurrentUser] = useState({ id })
  const [isFromMock] = useState(true)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <section className="main">
        <SideBar />
        <MockContext.Provider value={isFromMock}>
          <AuthContext.Provider value={currentUser}>
            <Routing setCurrentUser={setCurrentUser} />
          </AuthContext.Provider>
        </MockContext.Provider>
      </section>
    </BrowserRouter>
  )
}

export default App
