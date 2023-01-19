import PropTypes from 'prop-types'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import styles from './RadarComp.module.css'

export default function RadarComp(props) {

  console.log(props.datas)
  console.log(props.kind)
 

  const radarMap = props.datas.map((item, index) => {
    console.log(item.value);
    return {
      subject: props.kind[index + 1],
      dataKey: item.value,
      // amt: 4400,
    }
  })

  const renderRadarChart = (
    <div className={styles.chartContainer}>
      <RadarChart outerRadius={90} width={258} height={263} data={radarMap}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        {/* <PolarRadiusAxis angle={90} domain={[0, 200]} /> */}
        <Radar
        //   name="Mike"
          dataKey="dataKey"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  )

  return <div>{renderRadarChart}</div>
}

Radar.propTypes = {
  days: PropTypes.array,
  averageMap: PropTypes.shape({
    subject: PropTypes.string,
    dataKey: PropTypes.number,
    amt: PropTypes.number,
  }),
}
