import React, { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing/Routing'
import NavBar from './components/NavBar/NavBar'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import SideBar from './components/SideBar/SideBar'
import { AuthContext } from '../service/context.js';

function App() {

  const [currentUser, setCurrentUser] = useState({ id: 18 });
  const [ isFromApi ] = useState(false);

  console.log(currentUser)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <section className="main">
        <SideBar />
        <AuthContext.Provider value={currentUser}>
        <Routing setCurrentUser={setCurrentUser} isFromApi={isFromApi}/>
        </AuthContext.Provider>
      </section>
    </BrowserRouter>
  )
}

export default App
