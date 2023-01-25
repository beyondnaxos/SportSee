import React from 'react'
import styles from './Nutrients.module.css'
import PropTypes from 'prop-types'

export default function Nutrients(props) {
  let nutType
  let styling

  let valueType = props.name === 'calorieCount' ? 'kCal' : 'g'

  if (props.name === 'calorieCount') {
    nutType = 'Calories'
    styling = styles.calorie
  } else if (props.name === 'proteinCount') {
    nutType = 'Protéines'
    styling = styles.protein
  } else if (props.name === 'carbohydrateCount') {
    nutType = 'Glucides'
    styling = styles.carbohydrate
  } else if (props.name === 'lipidCount') {
    nutType = 'Lipides'
    styling = styles.lipid
  }

  return (
    <div className={styles.nutrientContainer}>
      <div className={`${styles.iconContainer} ${styling}`}>
        <img src={`/assets/nutrients/${props.name}.svg`} alt="" />
      </div>

      <div className={styles.nutrientInfo}>
        <p className={styles.nutrientValue}>
          {props.value.toLocaleString('en-US')}
          {valueType}
        </p>
        <p className={styles.nutrientName}>{nutType}</p>
      </div>
    </div>
  )
}

Nutrients.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
}
