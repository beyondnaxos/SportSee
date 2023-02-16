import axios from 'axios';
import UserDataModel from './Models/userModel';
// import AverageModel from './Models/averageModel';
import ActivityModel from './Models/activityModel';

/* A store that is used to get data from the API. */
const Store = {
  getUserId: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}`);
    const userData = new UserDataModel(data.data)
    console.log('clg de mes datas ' ,  userData);
    return userData;
  },
  getUserActivity: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}/activity`);
    const activityData = new ActivityModel(data.data)
    console.log(data.data)
    console.log(activityData);
    return activityData.mappedData;
  },
  getUserAverageSession: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
    // const averageData = new AverageModel(data.data)
    // console.log(averageData);
    return data.data;
  },
  getUserPerformance: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}/performance`);
    console.log(data);
    return data.data;
  },
};

export default Store;
