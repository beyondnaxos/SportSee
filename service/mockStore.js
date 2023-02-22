import mockData from "./mock.json";
import UserDataModel from './Models/userModel';
import AverageModel from './Models/averageModel';
import ActivityModel from './Models/activityModel';
import PerformanceModel from './Models/perfsModel';

const MockStore = {
  getUserId: async () => {
    const userData = new UserDataModel(mockData.data)
    return Promise.resolve(userData);
  },
  getUserActivity: async () => {
    const activityData = new ActivityModel(mockData.activity)
    console.log(activityData)
    return Promise.resolve(activityData.mappedData);
  },
  getUserAverageSession: async () => {
    const averageData = new AverageModel(mockData.averageSessions)
    console.log(averageData);
    return Promise.resolve(averageData.mappedData);
  },
  getUserPerformance: async () => {
    const performanceData = new PerformanceModel(mockData.performance)
    return Promise.resolve(performanceData.mappedData);
  },
};

export default MockStore;