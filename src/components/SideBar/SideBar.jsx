import React from 'react'
import styles from './SideBar.module.css'
import LinkButton from '../LinkButton/LinkButton'
import uuid from 'react-uuid'

/**
 * It's a function that returns a nav element with a div element and a p element as children. The div
 * element has four LinkButton components as children.
 */

export function SideBar() {
  const images = [
    '/assets/meditation.png',
    '/assets/swim.png',
    '/assets/bike.png',
    '/assets/fitness.png',
  ]

  return (
    <nav className={styles.navcontainer}>
      <div className={styles.linkcontainer}>
        {images.map((image) => (
          <LinkButton key={uuid()} image={image} />
        ))}
      </div>

      <p className={styles.copiryght}>Copiryght, SportSee 2020</p>
    </nav>
  )
}

export default SideBar