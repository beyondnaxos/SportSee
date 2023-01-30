import React, { useEffect, useState } from 'react'
import styles from './DashView.module.css'
import Store from '../../../service/store'

import AverageSession from '../AverageSession/AverageSession'
import RadarComp from '../Radar/RadarComp'
import BarChartComp from '../BarChart/BarChat'
import PieComp from '../Pie/Pie'
import Nutrients from '../Nutrients/Nutrients'

/**
 * component for showing the dashboard modules
 * @component
 * @example
 * const userScore = 12
 * return (
 *  <PieComp score={userScore} />
 * )
 * @description
 * @param {object} props comment
 * @returns {JSX.Element}
 * @constructor
 * @typedef {Object} State
 * @property {Array} average contains the average sessions of the user
 * @property {Object} userDatas contains the datas of the user (calories, etc)
 * @property {Array} userInfos contains the infos of the user (name, etc)
 * @property {Number} userScore contains the score of the user
 * @property {Array} userActivity contains the activity sessions of the user
 * @property {Object} kind contains the kind of perf (cardio, strength, etc)
 * @property {Array} userPerformance contains the performance of the user
 * @property {Number} id contains the id of the user
 *  */

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
              <Nutrients name={key} value={value} index={index} />
            ))}
        </section>
      </section>
    </div>
  )
}
