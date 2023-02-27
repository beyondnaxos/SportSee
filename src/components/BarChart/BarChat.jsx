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
 * @param {{datas : Array<{name : number, kilogrammes : number, calories : number}>}} props datas refers to the weight and colories of the user and day of activity
 * @returns An array of objects.
 */

export function BarChartComp(props) {
  console.log(props)

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
          <XAxis dataKey="name" tickLine={false} />

          <YAxis
            tickLine={false}
            axisLine={false}
            tickCount={3}
            orientation="right"
            stroke="#9B9EAC"
            domain={["dataMin - 100", "dataMax + 100"]}
            hide={true}
            yAxisId="calories"
            />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickCount={3}
            orientation="right"
            stroke="#9B9EAC"
            yAxisId="kilogrammes"
            domain={["dataMin - 2", "dataMax + 2"]}
            
            />
          <Tooltip
            content={<CustomTooltip />}
            animationEasing="ease-out"
            wrapperStyle={{ outline: 'none', left: 30, top: -21 }}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogrammes"
            yAxisId="kilogrammes"
            fill="#282D30"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            yAxisId="calories"
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

export default BarChartComp

BarChartComp.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.number.isRequired,
      kilogrammes: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}
