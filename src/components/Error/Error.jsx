import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Error.module.css'
import {whereAreWe} from '../../config'


/**
 * It's a function that returns an error page with a 404 error message and a link to the home page.
 * @returns A React component
 */

export function Error404() {
  return (
    <div className={styles.errorpage}>
      <h1 className={styles.bignumber}>500</h1>
      <h2 className={styles.bigquote}>
        {whereAreWe === 'Api' ? 'Oups! API Indisponible.' : 'Oups! Mock Indisponible.'}
      </h2>

      <Link className={styles.redirect} to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error404