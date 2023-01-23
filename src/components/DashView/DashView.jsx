import React, { useEffect, useState } from 'react'
import styles from './DashView.module.css'
import Store from '../../../service/store'

import AverageSession from '../AverageSession/AverageSession'
import RadarComp from '../Radar/RadarComp'
import BarChartComp from '../BarChart/BarChat'
import PieComp from '../Pie/Pie'
import Nutrients from '../Nutrients/Nutrients'


/*
  * @param {object} props
  * @param {object} props.userDatas
  * @param {object} props.average
  * @param {object} props.userInfos
*/


export default function DashView() {
  const [average, setAverage] = useState([])
  const [userDatas, setUserDatas] = useState([])
  const [userInfos, setUserInfos] = useState([])
  const [userScore, setUserScore] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [kind, setKind] = useState([])
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

    setUserDatas(userDatas.data.keyData)
    setAverage(averageSession.data.sessions)
    setUserInfos(userDatas.data.userInfos)
    setUserActivity(userActivity.data.sessions)
    setUserPerformance(userPerformance.data.data)
    setKind(userPerformance.data.kind)
    setUserScore(
      userDatas.data.score ? userDatas.data.score : userDatas.data.todayScore
    )
  }

  // console.log(average)
  // console.log(userDatas)
  // console.log(userActivity)
  console.log(userPerformance)
  console.log(userInfos.firstName)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Bonjour{' '}
        <span className={styles.name}>{userInfos && userInfos.firstName}</span>
      </h1>

      <h3 className={styles.subtitle}>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h3>

      <section className={styles.chartsContainer}>
        <section className={styles.allCharts}>
          {userActivity.length > 0 && <BarChartComp datas={userActivity} />}
          <div className={styles.chartsContainer}>
            {average.length > 0 && <AverageSession average={average} />}
            {userPerformance.length > 0 && (
              <RadarComp datas={userPerformance} kind={kind} />
            )}
            {userDatas && <PieComp score={userScore} />}
          </div>
        </section>

        <section className={styles.nutrients}>
          {userDatas &&
            Object.entries(userDatas).map(([key, value, index]) => (
              <Nutrients name={key} value={value} index={index}/>
            ))}
        </section>
      </section>
    </div>
  )
}
