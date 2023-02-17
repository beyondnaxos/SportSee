import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts'
import styles from './AverageSession.module.css'

/**
 * It takes an array of objects as a prop, maps over the array, and returns a new array of objects with
 * the same keys but different values. 
 * @param {{average : Array<{sessionLength : number}>}} props average refers to the average session length of the user
 * @returns An array of objects.
 */

export default function AverageSession(props) {

  const renderLineChart = (
    <div className={styles.chartContainer}>
      <LineChart
        width={258}
        height={263}
        data={props.average}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 10, //Increase or Decrease This
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
            <stop offset="10%" stopColor="#FFFFFF" stopOpacity={0.8} />
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={1} />
            <stop offset="30%" stopColor="#FFFFFF" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <CartesianGrid horizontal={false} vertical={false} />
        {/* <YAxis  domain={[0, 'dataMax + 1000']} allowDataOverflow={true} tickLine={false}
          axisLine={false} values='none'/> */}
        <XAxis
          dataKey="name"
          stroke="white"
          tickLine={false}
          axisLine={false}
          domain={['dataMin - 50', 'dataMax - 50']}
        />
        <Tooltip stroke="black" color="black" />
        <Line
          dot={false}
          type="monotone"
          dataKey="duration"
          strokeWidth="2"
          stroke="url(#colorUv)"
        />
      </LineChart>
    </div>
  )

  return <div>{renderLineChart}</div>
}

AverageSession.propTypes = {
  // days: PropTypes.arrayOf(PropTypes.string),
  average: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      duration: PropTypes.number,
      amt : PropTypes.number
    })
  ),
}
