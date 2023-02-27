import PropTypes from 'prop-types'
// import pie
import { PieChart, Pie, ResponsiveContainer } from 'recharts'

import styles from './Pie.module.css'

/**
This component takes a user's score as a prop and displays it as a percentage in a pie chart.
@param {Object} props - The props object for this component.
@param {number} props.score - The score of the user to be displayed in the pie chart.
@returns {ReactNode} A React component that displays the user's score as a percentage in a pie chart.
*/

export function PieComp(props) {
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
            startAngle={90}
            endAngle={450}
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

export default PieComp

PieComp.propTypes = {
  score: PropTypes.number,
}
