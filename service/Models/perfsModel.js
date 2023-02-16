export default class PerfsModel {
  constructor(data) {
    this.mappedData = data.data.map((item, index) => {
      return {
        // subject: data.kind[index + 1],
        subject: this.translate(data.kind[index + 1]),
        key: item.value,
        fullMark: 150,
      }
    })
  }

  

  translate = (kind) => {
    switch (kind) {
      case 'cardio':
        return 'cardio'
      case 'energy':
        return 'énergie'
      case 'endurance':
        return 'endurance'
      case 'strength':
        return 'force'
      case 'speed':
        return 'vitesse'
      case 'intensity':
        return 'intensité'
      default:
        return 'Vitesse'
    }
  }
}
