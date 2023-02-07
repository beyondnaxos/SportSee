import PropTypes from 'prop-types'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts'
import styles from './RadarComp.module.css'



/**
 * It takes in an array of objects, and returns a radar chart.
 * @returns A React component.
 * @param {{datas : Array<{value : number, kind : number}>}} props datas refers to the perf types of the user
 */

export default function RadarComp(props) {

  console.log('radarComp', props);


  const radarMap = props.datas.map((item, index) => {
    return {
      subject: props.kind[index + 1],
      key: item.value,
      fullMark: 150,
      // amt: 4400,
    }
  })

  const renderRadarChart = (
    <div className={styles.chartContainer}>
      <RadarChart
        outerRadius={90}
        width={248}
        height={253}
        data={radarMap}
        innerRadius={30}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" fontSize={12} />
        <Radar dataKey="key" fill="#FF0000" fillOpacity={0.6} />
      </RadarChart>
    </div>
  )

  return <div>{renderRadarChart}</div>
}

RadarComp.propTypes = {
 datas : PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.number,
    })
  ),
}
