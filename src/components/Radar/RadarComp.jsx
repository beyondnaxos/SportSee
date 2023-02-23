import PropTypes from 'prop-types'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'
import styles from './RadarComp.module.css'

/**
 * It takes in an array of objects, and returns a radar chart.
 * @returns A React component.
 * @param {{datas : Array<{value : number, kind : number}>}} props datas refers to the perf types of the user
 */

export default function RadarComp(props) {
  // if view is mobile, change the size of the chart
  const isSmallDesktop = window.innerWidth <= 1024

  console.log('radarComp', props)

  const renderRadarChart = (
    <ResponsiveContainer width={'100%'} height={250}>
      <div className={styles.chartContainer}>
        <RadarChart
          outerRadius={90}
          width={248}
          height={253}
          data={props.datas}
          innerRadius={30}
        >
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis dataKey="subject" fontSize={12} />
          <Radar dataKey="key" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </div>
    </ResponsiveContainer>
  )
  return <div>{renderRadarChart}</div>
}

RadarComp.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.number,
    })
  ),
}
