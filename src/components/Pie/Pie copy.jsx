import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar, Label } from 'recharts'

import styles from './Pie.module.css'

/**
 * It takes a score as a prop and returns a pie chart with a percentage of the score.
 * </code>
 * @returns A React component.
 * @param {{score : number}} props score refers to the score of the user
 */

export default function PieComp(props) {
  console.log('pie', props)

  const data = [
    {
      name: 'score',
      fill: '#fff',
      value: 100 - props.score * 100,
    },
    {
      name: 'score',
      value: props.score * 100,
      pv: 10,
      fill: '#FF0101',
    },
  ]

  const renderLabel = () => {
    return (
      <p className={styles.objectif}>
        <span className={styles.objectifValue}>{props.score * 100}%</span>
        <br />
        de votre
        <br />
        objectif
      </p>
    )
  }

  {
    /* {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))} */
  }

  const renderPieChart = (
    <div className={styles.chartContainer}>
      <RadialBarChart
        width={258}
        height={258}
        data={data}
        startAngle={0}
        endAngle={360}
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={80}
        paddingAngle={0}
        cornerRadius={10}
        stroke="none"
        label={renderLabel}
      >
        <RadialBar minAngle={15} clockWise={true} dataKey="value" />
        {/* <Tooltip /> */}
      </RadialBarChart>
      {/* <Label content={<CustomizedLabel  />} /> */}
      {/* <Label content={renderLabel} position="center" /> */}
      <p className={styles.objectif}>
        <span className={styles.objectifValue}>{props.score * 100}%</span>
        <br />
        de votre
        <br />
        objectif
      </p>
    </div>
  )

  return <div>{renderPieChart}</div>
}

PieComp.propTypes = {
  score: PropTypes.number,
}
