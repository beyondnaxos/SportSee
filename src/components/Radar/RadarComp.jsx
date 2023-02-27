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

export function RadarComp(props) {
 
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
          <PolarGrid
            gridType="polygon"
            radialLines={false}
            tick={{ fill: 'white' }}
          />
          <PolarAngleAxis
            dataKey="subject"
            fontSize={12}
            tick={{ fill: 'white', fontSize: '12px' }}
          />
          <Radar dataKey="key" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </div>
    </ResponsiveContainer>
  )
  return <div>{renderRadarChart}</div>
}

export default RadarComp

RadarComp.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.number,
    })
  ),
}
