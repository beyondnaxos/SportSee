export default class ActivityModel {
  constructor(data) {
    // this.data = data
    console.log('clg de mes datas ' ,  this.data);
    this.mappedData = data.sessions.map((item, index ) => {
        return {
          name: index + 1,
          pv: item.kilogram,
          uv: item.calories,
        }
      })
  }
}
