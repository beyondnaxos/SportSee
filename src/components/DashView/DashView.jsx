import React, { useEffect, useState } from 'react'
import styles from './DashView.module.css'
import Store from '../../../service/store'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

export default function DashView() {
  const [average, setAverage] = useState([])

  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  useEffect(() => {
    promiseAll()
  }, [])

  const promiseAll = async () => {
    const [userDatas, averageSession, userActivity, userPerformance] =
      await Promise.all([
        Store.getUserId(12),
        Store.getUserAverageSession(12),
        Store.getUserActivity(12),
        Store.getUserPerformance(12),
      ])
    console.log(averageSession)
    const averageMap = averageSession.data.sessions.map((item, index) => {
      return {
        name: days[index],
        uv: item.sessionLength,
        amt: 2400,
      }
    })

    setAverage(averageMap)
  }

  console.log(average)

  const renderLineChart = (
    <LineChart width={250} height={250} data={average}>
      <CartesianGrid horizontal={false} vertical={false} stroke="#ccc" fill='#FF0101'/>
      <Line type="monotone" dataKey="uv" strokeWidth="2" stroke="#fff" />
      <XAxis dataKey="name" />
     
      {/* <Line type="monotone" dataKey="pv" strokeWidth="2" stroke="#8884d8" /> */}
    </LineChart>
  )
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Bonjour <span className={styles.name}>Thomas</span>
      </h1>
      <h3 className={styles.subtitle}>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h3>
      {renderLineChart}
    </div>
  )
}
