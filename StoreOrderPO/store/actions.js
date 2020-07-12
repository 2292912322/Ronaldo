import _ from 'lodash'
import cookie from 'js-cookie'
// import HttpClass from '../service/HttpClass'

// const api = (new HttpClass()).api

const actions = {
 
  // 清空目标状态值
  clearState: function ({state}, target) {
    state[target] = _.cloneDeep(state.defaultState[target])
    sessionStorage.removeItem(target)
  },
  // 登出
  logOut: function ({state, dispatch}) {
    for (let p in state.defaultState) {
      dispatch('clearState', p)
    }
    localStorage.clear();
  },
}

export default actions
