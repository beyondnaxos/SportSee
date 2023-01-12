import React from 'react'
import styles from './DashView.module.css'

export default function DashView() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Bonjour <span className={styles.name}>Thomas</span></h1>
        <h3 className={styles.subtitle}>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
    </div>
  )
}
