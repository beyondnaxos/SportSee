import PropTypes from 'prop-types'
// import pie
import { PieChart, Pie, ResponsiveContainer } from 'recharts'

import styles from './Pie.module.css'

/**
 * It takes a score as a prop and returns a pie chart with a percentage of the score.
 * </code>
 * @returns A React component.
 * @param {{score : number}} props score refers to the score of the user
 */

export default function PieComp(props) {

  const data = [
    {
      name: 'score',
      fill: '#fff',
      value: 100 - props.score * 100,
      pv: 10,
      full: 200,
    },
    {
      name: 'score',
      value: props.score * 100,
      pv: 10,
      fill: '#FF0101',
      full: 0,
    },
  ]


  const renderLabel = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <text x="106" y="125">
          <tspan className={styles.rateScoreText}>{props.score * 100}%</tspan>
        </text>
        <text x="100" y="150">
          <tspan className={styles.sub}>de votre</tspan>
        </text>
        <text x="101" y="175">
          <tspan className={styles.sub}>objectif</tspan>
        </text>
      </svg>
    )
  }

  const renderPieChart = (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={90}
            paddingAngle={0}
            cornerRadius={10}
            startAngle={-180}
            stroke="none"
          ></Pie>
          <Pie
            data={data}
            dataKey="full"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={80}
            paddingAngle={0}
            stroke="none"
            label={renderLabel}
          ></Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )

  return <div>{renderPieChart}</div>
}

PieComp.propTypes = {
  score: PropTypes.number,
}
