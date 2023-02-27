import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/**
 * @fileoverview This file is the entry point of the application. It renders the App component to the DOM.
 * @module src/main
 * @requires react
 * @requires react-dom/client
 * @requires App
 * @requires index.css
 * @see {@link https://reactjs.org/docs/react-dom.html#render|React DOM}
 * @see {@link https://reactjs.org/docs/react-dom.html#createroot|React DOM}
 *  */


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
