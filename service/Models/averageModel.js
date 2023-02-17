export default class AverageModel {
  constructor(data) {
    this.days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    this.mappedData = data.sessions.map((item, index) => {
        return {
          name: this.days[index],
          duration: item.sessionLength,
          amt: 4400,
        }
      })
  }
}
