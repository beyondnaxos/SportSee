import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar } from 'recharts'

import styles from './Pie.module.css'

/**
 * It takes a score as a prop and returns a pie chart with a percentage of the score.
 * </code>
 * @returns A React component.
 * @param {{score : number}} props score refers to the score of the user
 */

export default function PieComp(props) {
  console.log('pie', props)

  const data = [
    {
      name: 'score',
      fill: '#fff',
      value: 100 - props.score * 100,
    },
    {
      name: 'score',
      value: props.score * 100,
      pv: 10,
      fill: '#FF0101',
    },
  ]

  
  

  const renderPieChart = (
    <div className={styles.chartContainer}>
      <RadialBarChart
        width={258}
        height={258}
        data={data}
        startAngle={0}
        endAngle={360}
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={80}
        paddingAngle={0}
        cornerRadius={10}
        stroke="none"
      >
        <RadialBar
          minAngle={15}
          clockWise={true}
          dataKey="value"
        />
        {/* <Tooltip /> */}
      </RadialBarChart>
      <p className={styles.objectif}>
        <span className={styles.objectifValue}>{props.score * 100}%</span>
        <br />
        de votre
        <br />
        objectif
      </p>
    </div>
  )

  return <div>{renderPieChart}</div>
}

PieComp.propTypes = {
  score: PropTypes.number,
}
