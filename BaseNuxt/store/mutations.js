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
}

export default mutations
