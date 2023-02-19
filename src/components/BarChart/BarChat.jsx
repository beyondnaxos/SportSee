import PropTypes from 'prop-types'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import styles from './BarChart.module.css'

/**
 * It takes an array of objects as a prop, maps over the array, and returns a new array of objects with
 * the same keys but different values.
 * @param {{datas : Array<{day : string, kilogram : number, calories : number}>}} props datas refers to the weight and colories of the user and day of activity
 * @returns An array of objects.
 */

export default function BarChartComp(props) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className={styles.activityTooltip}>
          <p className={styles.weightLabel}>{payload[0].value}kg</p>
          <p className={styles.caloriesLabel}>{payload[1].value}Kcal</p>
        </div>
      )
    }
    return null
  }

  const renderBarChart = (
    <div className={styles.chartContainer}>
      <div>Activité quotidienne</div>
      <ResponsiveContainer width={'99%'} height={250}>
        <BarChart width={853} height={320} data={props.datas}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#DEDEDE"
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ left: -10, top: -25 }}
            formatter={(value) => (
              <span className={styles.textColorLegend}>{value}</span>
            )}
           
          />
          <XAxis dataKey="name" />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            tickCount={3}
            stroke="#9B9EAC"
          />
          <Tooltip
            content={<CustomTooltip />}
            animationEasing="ease-out"
            wrapperStyle={{ outline: 'none', left: 30, top: -21 }}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogrammes"
            fill="#282D30"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
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
