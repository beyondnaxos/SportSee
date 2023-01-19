import React, { useEffect, useState } from 'react'
import styles from './DashView.module.css'
import Store from '../../../service/store'

import AverageSession from '../AverageSession/AverageSession'
import RadarComp from '../Radar/RadarComp'


export default function DashView() {
  const [average, setAverage] = useState([])
  const [userDatas, setUserDatas] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [kind , setKind] = useState([])
  const [userPerformance, setUserPerformance] = useState([])

  const id = 12

  useEffect(() => {
    promiseAll()
  }, [])

  const promiseAll = async () => {
    const [userDatas, averageSession, userActivity, userPerformance] =
      await Promise.all([
        Store.getUserId(id),
        Store.getUserAverageSession(id),
        Store.getUserActivity(id),
        Store.getUserPerformance(id),

      ])

    setUserDatas(userDatas.data)
    setAverage(averageSession.data.sessions)
    setUserActivity(userActivity.data)
    setUserPerformance(userPerformance.data.data)
    setKind(userPerformance.data.kind)
  }

  // console.log(average)
  // console.log(userDatas)
  // console.log(userActivity)
  console.log(userPerformance)
  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Bonjour <span className={styles.name}>Thomas</span>
      </h1>
      <h3 className={styles.subtitle}>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h3>
      {average.length > 0 && <AverageSession average={average} />}
      {userPerformance.length > 0  && <RadarComp datas={userPerformance} kind={kind}/> }
    </div>
  )
}
