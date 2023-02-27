import React from 'react'
import styles from './Location.module.css'
import {whereAreWe} from '../../config'


function Location() {
  return (
    <div className={styles.location}>Datas from {whereAreWe}</div>
  )
}

export default Location