import React, { useContext, useEffect, useState } from 'react'
import styles from './DashView.module.css'
import Store from '../../../service/store'
import mock from '../../../service/mock'
import AverageSession from '../AverageSession/AverageSession'
import RadarComp from '../Radar/RadarComp'
import BarChartComp from '../BarChart/BarChat'
import PieComp from '../Pie/Pie'
import Nutrients from '../Nutrients/Nutrients'
import uuid from 'react-uuid'
import { AuthContext } from '../../../service/context.js';

/* A function that returns a JSX element with a view of each charts components */

export default function DashView() {

  console.log(mock)

  // const currentUser = useContext(AuthContext);
  const [average, setAverage] = useState([])
  const [userDatas, setUserDatas] = useState([])
  const [userInfos, setUserInfos] = useState([])
  const [userScore, setUserScore] = useState()
  const [userActivity, setUserActivity] = useState([])
  const [kind, setKind] = useState([])
  const [userPerformance, setUserPerformance] = useState([])

  const userContext = useContext(AuthContext);

  console.log(userContext.id)

  useEffect(() => {
    promiseAll()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  

  const promiseAll = async () => {
    const [userDatas, averageSession, userActivity, userPerformance] =
      await Promise.all([
        Store.getUserId(userContext.id),
        Store.getUserAverageSession(userContext.id),
        Store.getUserActivity(userContext.id),
        Store.getUserPerformance(userContext.id),
      ])

    setUserDatas(userDatas.data.keyData)
    setAverage(averageSession.data.sessions)
    setUserInfos(userDatas.data.userInfos)
    setUserActivity(userActivity.data.sessions)
    setUserPerformance(userPerformance.data.data)
    setKind(userPerformance.data.kind)
    setUserScore( userDatas.data.score ? userDatas.data.score : userDatas.data.todayScore )
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
            {userPerformance.length > 0 && ( <RadarComp datas={userPerformance} kind={kind} /> )}
            {userScore !== undefined && <PieComp score={userScore} />}
          </div>
        </section>

        <section className={styles.nutrients}>
          {userDatas &&
            Object.entries(userDatas).map(([key, value, index]) => (
              <Nutrients key={uuid()} name={key} value={value} index={index} />
            ))}
        </section>
      </section>
    </div>
  )
}
