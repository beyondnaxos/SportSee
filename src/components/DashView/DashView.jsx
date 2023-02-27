import React, { useEffect, useState } from 'react'
import styles from './DashView.module.css'
import AverageSession from '../AverageSession/AverageSession'
import RadarComp from '../Radar/RadarComp'
import BarChartComp from '../BarChart/BarChat'
import PieComp from '../Pie/Pie'
import Nutrients from '../Nutrients/Nutrients'
import uuid from 'react-uuid'
import { useParams } from 'react-router-dom'
import { store } from '../../config'
import Error from '../Error/Error'

/* A function that returns a JSX element with a view of each charts components */

export default function DashView() {
  const { id } = useParams()

  const [average, setAverage] = useState([])
  const [userDatas, setUserDatas] = useState([])
  const [userInfos, setUserInfos] = useState([])
  const [userScore, setUserScore] = useState()
  const [userActivity, setUserActivity] = useState([])
  const [kind, setKind] = useState([])
  const [userPerformance, setUserPerformance] = useState([])
  const [wait , setWait] = useState(false)

  useEffect(() => {
    promiseAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const promiseAll = async () => {

    setWait(true)
    try {
      const [userDatas, averageSession, userActivity, userPerformance] =
        await Promise.all([
          store.getUserId(id),
          store.getUserAverageSession(id),
          store.getUserActivity(id),
          store.getUserPerformance(id),
        ])

      setUserDatas(userDatas.nutType)
      setUserInfos(userDatas.userInfos)
      setUserScore(userDatas.todayScore)
      setAverage(averageSession)
      setUserActivity(userActivity)
      setUserPerformance(userPerformance)
      setKind(userPerformance.kind)
    } catch (error) {
      console.log(error)
    } finally {
      setWait(false)
    }
  }

  if ( wait ) {
    return null
  }

  return (
    <div className={styles.container}>
      {userActivity.length > 0 ? (
        <>
          <h1 className={styles.title}>
            Bonjour{' '}
            <span className={styles.name}>
              {userInfos && userInfos.firstName}
            </span>
          </h1>

          <h3 className={styles.subtitle}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </h3>

          <section className={styles.chartsContainerGroup}>
            <section className={styles.allCharts}>
              {userActivity.length > 0 && <BarChartComp datas={userActivity} />}
              <div className={styles.chartsContainer}>
                {average !== undefined && <AverageSession average={average} />}
                {userPerformance.length > 0 && (
                  <RadarComp datas={userPerformance} kind={kind} />
                )}
                {userScore !== undefined && <PieComp score={userScore} />}
              </div>
            </section>

            <section className={styles.nutrients}>
              {userDatas &&
                Object.entries(userDatas).map(([key, value], index) => (
                  <Nutrients
                    key={uuid()}
                    name={key}
                    value={value}
                    index={index}
                  />
                ))}
            </section>
          </section>
        </>
      ) : (
        <Error />
      )}
    </div>
  )
}
