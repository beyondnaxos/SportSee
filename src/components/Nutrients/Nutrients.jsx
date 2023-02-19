import React from 'react'
import styles from './Nutrients.module.css'
import PropTypes from 'prop-types'

/**
 * It takes in a prop called name, and depending on the value of name, it returns a different value for
 * @param {{name : string , value : number }} props  name refers to the name of the nutrient, and value refers to the value of the nutrient
 */

export default function Nutrients(props) {
  console.log('nutrients', props)

  // let valueType = props.name === 'calorieCount' ? 'kCal' : 'g'

  // const cases = {
  //   calorieCount: {
  //     nutType: 'Calories',
  //     styling: styles.calorie,
  //   },
  //   proteinCount: {
  //     nutType: 'Protéines',
  //     styling: styles.protein,
  //   },
  //   carbohydrateCount: {
  //     nutType: 'Glucides',
  //     styling: styles.carbohydrate,
  //   },
  //   lipidCount: {
  //     nutType: 'Lipides',
  //     styling: styles.lipid,
  //   },
  // }

  return (
    <div className={styles.nutrientContainer}>
      <div className={`${styles.iconContainer} ${styles[props.value.styling]}`}>
        <img src={`/assets/nutrients/${props.name}.svg`} alt="" />
      </div>
      <div className={styles.nutrientInfo}>
        <p className={styles.nutrientValue}>
          {props.value.count.toLocaleString('en-US')}
          {props.value.unit}
        </p>
        <p className={styles.nutrientName}>{props.value.nutType}</p>
      </div>
    </div>
  )
}

Nutrients.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
}
