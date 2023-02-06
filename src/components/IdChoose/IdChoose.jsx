import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../service/context.js";

function IdChoose(props) {

  const userContext = useContext(AuthContext);

  const [id, setId] = useState('')

  const navigate = useNavigate();

  const handleChange = (e) => {
    setId(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(id)
    props.setCurrentUser({ id: id })
    navigate('/user/' + id)
  }


  return (
    <div>
      <h1>Choose your id</h1>
      <input type="text" value={id} onChange={(e) => handleChange(e)} />
      <button className='getid' onClick={(e) => handleSubmit(e)}>Submit</button>

    </div>
  )
}

export default IdChoose