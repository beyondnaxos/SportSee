import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing/Routing';
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SideBar from './components/SideBar/SideBar';


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <section className="main">
        <SideBar />
        <Routing />
      </section>
    </BrowserRouter>
  );
}

export default App;
