import PropTypes from 'prop-types'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import styles from './BarChart.module.css'

/**
 * It takes an array of objects as a prop, maps over the array, and returns a new array of objects with
 * the same keys but different values.
 * @param {{datas : Array<{day : string, kilogram : number, calories : number}>}} props datas refers to the weight and colories of the user and day of activity
 * @returns An array of objects.
 */

export default function BarChartComp(props) {
  const barMap = props.datas.map((item, index) => {
    return {
      name: index + 1,
      pv: item.kilogram,
      uv: item.calories,
    }
  })

  const renderBarChart = (
    <div className={styles.chartContainer}>
      <BarChart width={853} height={320} data={barMap}>
        <CartesianGrid strokeDasharray="3 3" />
        <Legend verticalAlign="top" height={36} align="right" />
        <XAxis dataKey="name" />
        <YAxis orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  )

  return <div>{renderBarChart}</div>
}

BarChartComp.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
}
