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

export default function BarChartComp(props) {
  console.log('lalala', props)

  const barMap = props.datas.map((item, index) => {
    console.log(item.value)
    return {
      /**
       * @typedef {Object} State
       * @property {number} name contains the day
       * @property {number} pv contains the weight of the user
       * @property {number} uv contains the calories of the user
       */

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
