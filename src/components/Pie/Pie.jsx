import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar } from 'recharts'
import styles from './Pie.module.css'

export default function PieComp(props) {

  console.log('pie', props)

  const data = [
    {
      name: 'score',
      fill: '#fff',
      uv: 100-props.score * 100,
    
    },
    {
      name: 'score',
      uv: props.score * 100,
      pv: 10,
      fill: '#FF0101',
    },
  ]

  const renderPieChart = (
    <div className={styles.chartContainer}>
      <RadialBarChart
        width={258}
        height={258}
        innerRadius="40%"
        outerRadius="60%"
        data={data}
        startAngle={0}
        endAngle={360}
        // startAngle={-180}
        // endAngle={-300}
      >
        <RadialBar
          minAngle={15}
        //   label={{ fill: '#666', position: 'insideStart' }}
        //   background
          clockWise={true}
          dataKey="uv"
        />
        {/* <Tooltip /> */}
      </RadialBarChart>
      <p className={styles.objectif}><span className={styles.objectifValue}>{props.score * 100}%</span><br/>de votre<br/>objectif</p>
    </div>
  )

  return <div>{renderPieChart}</div>
}

PieComp.propTypes = {

}
