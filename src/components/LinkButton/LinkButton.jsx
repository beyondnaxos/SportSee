import React from 'react'
import PropTypes from 'prop-types'
import styles from './LinkButton.module.css'

export default function LinkButton(props) {


  return (

      <div className={styles.navbutton}>
        <img src={props.image} className={styles.navbuttonimage} alt='nav button'></img>
      </div>
  )
}

LinkButton.propTypes = {
  image: PropTypes.string,
}

