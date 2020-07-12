import _ from 'lodash'

const mutations = {
  wxAuth (state, value) {
    state.wxAuthStatus = value
  },
  userInfo: function (state, value) {
    let obj = _.pick(value, _.keys(state.userInfo))
    Object.assign(state.userInfo, obj)
    sessionStorage.setItem('userInfo', JSON.stringify(state.userInfo))
  },
  userStatus: function (state, value) {
    let obj = _.pick(value, _.keys(state.userStatus))
    Object.assign(state.userStatus, obj)
    sessionStorage.setItem('userStatus', JSON.stringify(state.userStatus))
  },
  location: function (state, value) {
    let obj = _.pick(value, _.keys(state.location))
    if (obj.latitude && obj.longitude) {
      Object.assign(state.location, {
        ...obj,
        latitude: parseFloat(obj.latitude),
        longitude: parseFloat(obj.longitude)
      })
    } else {
      Object.assign(state.location, {
        ...obj
      })
    }
    sessionStorage.setItem('location', JSON.stringify(state.location))
  },
  getCar: function (state, value) {
    let obj = _.pick(value, _.keys(state.getCar))
    if (obj.latitude && obj.longitude) {
      Object.assign(state.getCar, {
        ...obj,
        latitude: parseFloat(obj.latitude),
        longitude: parseFloat(obj.longitude)
      })
    } else {
      Object.assign(state.getCar, {
        ...obj
      })
    }
    sessionStorage.setItem('getCar', JSON.stringify(state.getCar))
  },
  returnCar: function (state, value) {
    let obj = _.pick(value, _.keys(state.returnCar))
    Object.assign(state.returnCar, obj)
    sessionStorage.setItem('returnCar', JSON.stringify(state.returnCar))
  },
  systemInfo: function (state, value) {
    let obj = _.pick(value, _.keys(state.systemInfo))
    Object.assign(state.systemInfo, obj)
    sessionStorage.setItem('systemInfo', JSON.stringify(state.systemInfo))
  },
  punishDetail: function (state, value) {
    let obj = _.pick(value, _.keys(state.punishDetail))
    Object.assign(state.punishDetail, obj)
    sessionStorage.setItem('punishDetail', JSON.stringify(state.punishDetail))
  },
  currentOrder: function (state, value) {
    let obj = _.pick(value, _.keys(state.currentOrder))
    Object.assign(state.currentOrder, obj)
    sessionStorage.setItem('currentOrder', JSON.stringify(state.currentOrder))
  }
}

export default mutations
