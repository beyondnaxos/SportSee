export default class UserDataModel {
  constructor(data) {
    this.userId = data.id
    this.userInfos = data.userInfos
    if (data.score) {
      this.todayScore = data.score
    } else if (data.todayScore) {
      this.todayScore = data.todayScore
    }
    this.keyData = data.keyData
    this.nutType = this.cases([this.keyData.name].nutType)
  }

  cases() {
    return {
      calorieCount: {
        nutType: 'Calories',
        styling: 'calorie',
        count: this.keyData.calorieCount,
        unit: 'kCal',
      },
      proteinCount: {
        nutType: 'Protéines',
        styling: 'protein',
        count: this.keyData.proteinCount,
        unit: 'g',
      },
      carbohydrateCount: {
        nutType: 'Glucides',
        styling: 'carbohydrate',
        count: this.keyData.carbohydrateCount,
        unit: 'g',
      },
      lipidCount: {
        nutType: 'Lipides',
        styling: 'lipid',
        count: this.keyData.lipidCount,
        unit: 'g',
      },
    }
  }
}
