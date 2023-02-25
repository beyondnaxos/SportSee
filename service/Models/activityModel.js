export default class ActivityModel {
  constructor(data) {
    // this.data = data
    console.log('clg de mes datas ', this.data)
    this.mappedData = data.sessions.map((item, index) => {
      return {
        name: index + 1,
        kilogrammes: item.kilogram,
        calories: item.calories,
      }
    })
  }
}
