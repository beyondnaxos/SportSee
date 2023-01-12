import React from 'react'
import styles from './LinkButton.module.css'

export default function LinkButton(props) {
  

  return (
      <div className={styles.navbutton}>
        <img src={props.image} className={styles.navbuttonimage}></img>
      </div>
  )
}
