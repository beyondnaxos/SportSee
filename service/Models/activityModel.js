export default class ActivityModel {
  constructor(data) {
    this.mappedData = data.sessions.map((item, index) => {
      return {
        name: index + 1,
        kilogrammes: item.kilogram,
        calories: item.calories,
      }
    })
  }
}
