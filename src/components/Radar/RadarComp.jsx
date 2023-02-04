import PropTypes from 'prop-types'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts'
import styles from './RadarComp.module.css'

/**
 * @param {Object} props
 * @param {Array} datas contains the datas of the user (calories, etc)
 * @property {Array} kind contains the kind of perf (cardio, strength, etc)
 * @property {Array} radarMap contains the datas of the user (calories, etc)
 * @property {Array} renderRadarChart contains the datas of the user (calories, etc)
 * */

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
