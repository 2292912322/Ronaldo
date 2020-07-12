import _ from 'lodash'
import HttpClass from '../service/HttpClass'

const api = (new HttpClass()).api

const actions = {
  // // 更新用户信息
  // updateUserInfo: async function ({commit}, id) {
  //   let {success, bizContent} = await api.warmcar['query/customer_info']({})
  //   if (success && bizContent) {
  //     // 用户信息
  //     commit('userInfo', bizContent)
  //     // 用户状态
  //     commit('userStatus', bizContent)
  //     // 会话
  //     cookie.set('session', bizContent.session)
  //   }
  // },
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
    // cookie.remove('session')
  },
}

export default actions
