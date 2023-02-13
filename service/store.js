import axios from 'axios';
import userDataModel from './Models/userModel';
import averageModel from './Models/averageModel';

/* A store that is used to get data from the API. */
const Store = {
  getUserId: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}`);
    const userData = new userDataModel(data.data)
    console.log('clg de mes datas ' ,  userData);
    return userData;
  },
  getUserActivity: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}/activity`);

    console.log(data);
    return data.data;
  },
  getUserAverageSession: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
    // const averageData = new averageModel(data.data)
    // console.log(data);
    return data.data;
  },
  getUserPerformance: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}/performance`);
    console.log(data);
    return data.data;
  },
};

export default Store;
