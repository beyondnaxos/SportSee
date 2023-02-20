import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Error.module.css'

export default function Error404() {
  return (
    <div className={styles.errorpage}>
      <h1 className={styles.bignumber}>404</h1>
      <h2 className={styles.bigquote}>
        Oups! La page que vous demandez n'existe pas.
      </h2>

      <Link className={styles.redirect} to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
