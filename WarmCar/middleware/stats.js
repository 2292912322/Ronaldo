import cookie from 'js-cookie'

export default function (context) {
  if (cookie.get('session')) {
    // context.store.commit('login')
  } else {
    // context.store.commit('logout')
  }
}
