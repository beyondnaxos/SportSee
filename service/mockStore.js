import mockData from "./mock.json";

const MockStore = {
  getUserId: async () => {
    return Promise.resolve(mockData.data);
  },
  getUserActivity: async () => {
    return Promise.resolve(mockData.activity);
  },
  getUserAverageSession: async () => {
    return Promise.resolve(mockData.averageSessions);
  },
  getUserPerformance: async () => {
    return Promise.resolve(mockData.performance);
  },
};

export default MockStore;