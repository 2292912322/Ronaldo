import _ from "lodash";

const mutations = {
  wxAuth (state, value) {
    state.wxAuthStatus = value
  },
  etpData: function (state, value) {
    let obj = _.pick(value, _.keys(state.etpData))
    Object.assign(state.etpData, obj)
    sessionStorage.setItem('etpData', JSON.stringify(state.etpData))
  },
  userInfo_pc: function(state, value) {
    let obj = _.pick(value, _.keys(state.userInfo_pc));
    Object.assign(state.userInfo_pc, obj);
    localStorage.setItem("userInfo_pc", JSON.stringify(state.userInfo_pc));
  },
  storeListInfo_pc: function (state, value) {
    let obj = _.pick(value, _.keys(state.storeListInfo_pc))
    Object.assign(state.storeListInfo_pc, obj)
    localStorage.setItem('storeListInfo_pc', JSON.stringify(state.storeListInfo_pc))
  },
  shoppingCar: function (state, value) {
    let obj = _.pick(value, _.keys(state.shoppingCar))
    Object.assign(state.shoppingCar, obj)
    sessionStorage.setItem('shoppingCar', JSON.stringify(state.shoppingCar))
  }
};

export default mutations;
