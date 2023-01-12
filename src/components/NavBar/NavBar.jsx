import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlinks}>
      <li className={styles.logocontainer}>
        <img src="/assets/logo.png" className={styles.logo}></img>
        <h1 className={styles.logoname}>SportSee</h1>
      </li>
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
