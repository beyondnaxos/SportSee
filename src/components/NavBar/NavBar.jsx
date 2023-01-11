import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logocontainer}>
        <img src="/assets/LOGO.svg" className={styles.logo}></img>
        <h1>SportSee</h1>
      </div>
      <ul className={styles.navlinks}>
        <li className={styles.navlink}>
          <Link to="/">Accueil</Link>
        </li>
        <li className={styles.navlink}>
          <Link to="/">Profil</Link>
        </li>
        <li className={styles.navlink}>
          <Link to="/">Réglage</Link>
        </li>
        <li className={styles.navlink}>
          <Link to="/about">Communauté</Link>
        </li>
      </ul>
    </nav>
  )
}
