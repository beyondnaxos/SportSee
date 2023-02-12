import axios from 'axios';

/* A store that is used to get data from the API. */
const Store = {
  getUserId: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}`);
    console.log(data);
    return data.data;
  },
  getUserActivity: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}/activity`);
    console.log(data);
    return data.data;
  },
  getUserAverageSession: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
    console.log(data);
    return data.data;
  },
  getUserPerformance: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}/performance`);
    console.log(data);
    return data.data;
  },
};

export default Store;
