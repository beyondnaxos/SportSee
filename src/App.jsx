import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing/Routing';
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SideBar from './components/SideBar/SideBar';




/**
 * The App function returns a BrowserRouter component that contains a ScrollToTop component, a NavBar
 * component, a section component with a className of "main" that contains a SideBar component and a
 * Routing component
 * @returns The return statement is returning the JSX code that is being rendered to the DOM.
 */

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
