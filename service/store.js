import axios from 'axios'

// isfrommock ? true ..
// SI datas viennent du mock => mock : api

/* A store that is used to get data from the API. */
const Store = {
  getUserId: async (id) => {
    const response = await axios.get(`http://localhost:3000/user/${id}`)
    return response.data
  },
  getUserActivity: async (id) => {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/activity`
    )
    return response.data
  },
  getUserAverageSession: async (id) => {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/average-sessions`
    )
    return response.data
  },
  getUserPerformance: async (id) => {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/performance`
    )
    return response.data
  },
}

export default Store
