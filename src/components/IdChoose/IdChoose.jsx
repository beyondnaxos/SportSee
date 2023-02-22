import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './IdChoose.module.css'
import {whereAreWe} from '../../config'


function IdChoose() {

  // const userContext = useContext(AuthContext)

  const [id, setId] = useState('')

  const navigate = useNavigate()

  const handleChange = (e) => {
    setId(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(id)
    navigate('/user/' +  id)
  }

  return (
    <div className={styles.container}>
      <p className={styles.where}> Datas actually came from : <span className={styles.value}>{whereAreWe.toUpperCase()}</span> </p>
      <h1 className={styles.title}>Choose your id</h1>
      <p className={styles.text}> Api : 12 & 18 , Mock : 17 , API Error : any other number</p>
      <input  className={styles.input} type="text" value={id} onChange={(e) => handleChange(e)} />
      <button  className={styles.getid} onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </div>
  )
}

export default IdChoose
