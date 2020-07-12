import Vuex from "vuex";
import _ from "lodash";
// import cookie from 'js-cookie'

//此对象名不可改
import mutations from "./mutations";
import actions from "./actions";

// 从缓存恢复状态
function getFromCache(state) {
  let copy = _.cloneDeep(state);
  for (let key in copy) {
    // if (key === 'userStatus') {
    //   debugger
    // }
    let cache = sessionStorage.getItem(key);
    let cacheFromLocal = localStorage.getItem(key);
    // let cacheFromCookie = cookie.get(key) ? JSON.parse(cookie.get(key)) : null
    let cacheFromCookie = null;
    if (cache === null || cache === undefined) {
      cache = cacheFromLocal;
    }
    if (cache === null || cache === undefined) {
      cache = cacheFromCookie;
    }
    if (cache !== null && cache !== undefined) {
      if (typeof copy[key] === "object") {
        let obj = _.pick(JSON.parse(cache), _.keys(copy[key]));
        Object.assign(copy[key], obj);
      } else {
        copy[key] = JSON.parse(cache);
      }
    }
  }
  return copy;
}

// const createStore = () => {
let defaultState = {
  // 用户基本信息
  userInfo: {
    headImg: "",
    nickName: "",
    phone: "",
    sex: "",
    isEnterprise: -1,
    balance: 0,
    deposit: 0,
    couponNum: 0,
    enterpriseBalance: 0
  },
  wxAuthStatus: false
};
// 从缓存恢复状态
let _state = getFromCache(defaultState);
// 用于clearState清空状态
_state.defaultState = defaultState;

const state = () => _state;

export default { namespaced: true, state, mutations, actions, strict: false };
