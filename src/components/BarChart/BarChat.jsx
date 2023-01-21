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
  console.log(props.datas)
  console.log(props.kind)

  const barMap = props.datas.map((item, index) => {
    console.log(item.value)
    return {
      name: index + 1,
      pv: item.kilogram,
      uv: item.calories,
    }
  })

  const renderBarChart = (
    <div className={styles.chartContainer}>
      <BarChart width={730} height={250} data={barMap}>
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <XAxis dataKey="name" />
        {/* <YAxis /> */}
        <Tooltip />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  )

  return <div>{renderBarChart}</div>
}

BarChartComp.propTypes = {
  barMap: PropTypes.shape({
    name: PropTypes.number,
    pv: PropTypes.number,
    uv: PropTypes.number,
  }),
}
