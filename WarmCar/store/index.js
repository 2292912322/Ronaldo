import Vuex from 'vuex'
import _ from 'lodash'
import cookie from 'js-cookie'

//此对象名不可改
import mutations from './mutations'
import actions from './actions'

// 从缓存恢复状态
function getFromCache (state) {
  let copy = _.cloneDeep(state)
  for (let key in copy) {
    // if (key === 'userStatus') {
    //   debugger
    // }
    let cache = sessionStorage.getItem(key)
    let cacheFromLocal = localStorage.getItem(key)
    let cacheFromCookie = cookie.get(key) ? JSON.parse(cookie.get(key)) : null
    if (cache === null || cache === undefined) {
      cache = cacheFromLocal
    }
    if (cache === null || cache === undefined) {
      cache = cacheFromCookie
    }
    if (cache !== null && cache !== undefined) {
      if (typeof copy[key] === 'object') {
        let obj = _.pick(JSON.parse(cache), _.keys(copy[key]))
        Object.assign(copy[key], obj)
      } else {
        copy[key] = JSON.parse(cache)
      }
    }
  }
  return copy
}

const createStore = () => {
  let defaultState = {
    // 用户基本信息
    userInfo: {
      headImg: '',
      nickName: '',
      phone: '',
      sex: '',
      isEnterprise: -1,
      balance: 0,
      deposit: 0,
      couponNum: 0,
      enterpriseBalance: 0
    },
    // 用户账号状态
    userStatus: {
      certificationStatus: '',
      moneyStatus: ''
    },
    // 取车相关信息
    getCar: {
      cityCode: '',
      cityName: '',
      latitude: '',
      longitude: '',
      branchId: '',
      branchName: '',
      branchDetail: {},
      carDetail: {}
    },
    // 还车相关信息
    returnCar: {
      // carId: '',
      // branchId: '',
      // branchName: '',
      // detail: {}
      money: 0,
      returnTeamId: 0,
      returnTeamShowName: '',
      latitude: '',
      longitude: '',
      detail: {}
    },
    // 用户当前定位信息
    location: {
      cityCode: '',
      cityName: '',
      latitude: 0,
      longitude: 0,
      address: ''
    },
    // 系统信息
    systemInfo: {
      timePatch: 0,
      params: []
    },
    // 违章详情
    punishDetail: {
      trafficViolationId: 0,
      trafficViolationNo: '',
      carLpn: '',
      trafficViolationTime: 0,
      trafficViolationScore: 0,
      trafficViolationMny: 0,
      trafficViolationDesc: '',
      trafficViolationPlace: '',
      trafficVolationStatus: ''
    },
    // 当前订单
    currentOrder: {
      orderId: '',
      'appointmentBranchInfo': {
        'branchAddress': '',
        'branchId': 0,
        'branchName': '',
        'gps': '0,0',
        'isLock': '',
        'isOtherReturn': '',
        'pictures': []
      },
      'bluetoothInfo': {
        'blueBoxDeviceName': '',
        'findCarCMD': '',
        'lockDoorCMD': '',
        'lockOffDoorCMD': '',
        'statusCarCMD': '',
        'unlockDoorCMD': ''
      },
      'carInfo': {
        'carColor': '',
        'carId': 0,
        'carImg': '',
        'carLpn': '',
        'carModelName': '',
        'carSeatNum': '',
        'carTagName': '',
        'carTagNameTips': '',
        'chargeState': '',
        'direction': '',
        'enduranceMileage': 0,
        'gps': '0,0',
        'restBattery': 0
      },
      'costInfo': {
        'costName': '',
        'mileageMoney': 0,
        'mileageUnit': '',
        'switchCost': '',
        'timeMoney': 0,
        'timeUnit': 0
      },
      'orderInfo': {
        'appointmentTime': 0,
        'currentTimeStamp': 0,
        'isEvaluateWC': '',
        'isValidate': '',
        'orderId': 0,
        'orderMileage': 0,
        'orderStatus': '',
        'sysCancelTimeStamp': 0,
        'takeCarTime': 0
      },
      'returnBranchInfo': {
        'branchAddress': '',
        'branchId': 0,
        'branchName': '',
        'gps': '0,0'
      }
    },
    wxAuthStatus: false,
    authTipsVisible: ''
  }
  // 从缓存恢复状态
  let state = getFromCache(defaultState)
  // 用于clearState清空状态
  state.defaultState = defaultState
  return new Vuex.Store({
    state,
    mutations,
    actions
  })
}

export default createStore
