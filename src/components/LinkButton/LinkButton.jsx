import React from 'react'
import PropTypes from 'prop-types'
import styles from './LinkButton.module.css'



/**
 * It's a function that returns a div with a class of navbutton and an image with a class of navbuttonimage.
 * @returns A React component with a div and an image.
 */
export function LinkButton(props) {


  return (

      <div className={styles.navbutton}>
        <img src={props.image} className={styles.navbuttonimage} alt='nav button'></img>
      </div>
  )
}

export default LinkButton

LinkButton.propTypes = {
  image: PropTypes.string,
}

