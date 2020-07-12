import Vuex from "vuex";
import _ from "lodash";
import cookie from "js-cookie";

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
    let cacheFromCookie = cookie.get(key) ? JSON.parse(cookie.get(key)) : null;
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
        // copy[key] = cache;
      }
    }
  }
  return copy;
}

// const createStore = () => {
let defaultState = {
  // 用户基本信息
  userInfo_pc: {
    // city: "广州",
    // country: "",
    // headimgurl:
    //   "http://thirdwx.qlogo.cn/mmopen/vi_32/nWb5BnXqWlxl7NibsmicY3P1RLfxMMRob8GUBuMciarWrdzPtm7FemtEDhXDTll6iavQuE4jPtsQnTBnOl01m7Yib5A/132",
    // nickname: "Ronaldo",
    // openid: "oIeE50xglbH56WDnhaj3xrd9VNtM",
    // province: "广东",
    // sex: 1
    city: "",
    country: "",
    headimgurl: "",
    nickname: "",
    openid: "",
    province: "",
    sex: ""
  },
  // 用户账号状态
  userStatus: {
    wxAuthStatus: false,
    moneyStatus: ""
  },

  storeListInfo_pc: {
    storeList: [],
    storeInfo: {}
  },
  shoppingCar:{
    list:[]
  },
  wxAuthStatus: false,
};

// 从缓存恢复状态
let _state = getFromCache(defaultState);
// 用于clearState清空状态
_state.defaultState = defaultState;

const state = () => _state;

export default { namespaced: true, state, mutations, actions,strict:false };
