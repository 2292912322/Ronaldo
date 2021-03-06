import Vue from 'vue'

import wcComponents from './components'

// 假装app定义的对象
// window.jsToNative = {
//   getLocation (value) {
//     debugger
//     console.log('假装app收到调用请求:getLocation(android)')
//   }
// }

// 假装app定义的对象
// window.webkit = {
//   messageHandlers: {
//     getLocation () {
//       console.log('假装app收到调用请求:getLocation(ios)')
//     }
//   }
// }

// 由于ios的对象被定义禁止遍历属性, 只能手动定义原定的方法名列表
let apis = ['getLocation']

// 提供给app回调的对象
window.nativeToJs = {}

const bridge = {
  functions: {},
  call: async function (name, param) {
    if (apis.includes(name)) {
      let res = await this.functions[name](param)
      let {success, data, message} = res
      if (!success) {
        console.error(message)
      }
      return res
    }
    console.error(`没有找到方法${name}`)
    return {
      success: false,
      data: null,
      message: `没有找到方法${name}`
    }
  }
}

function dispatchBridgeEvent (name) {
  return function (value) {
    let event = document.createEvent('HTMLEvents')
    event.initEvent(`nativeToJsEvent.${name}`, false, false)
    try {
      if (typeof value === 'string') {
        event.data = JSON.parse(value)
      } else {
        event.data = value
      }
    } catch (e) {
      wcComponents.toast(e.message)
    }
    window.dispatchEvent(event)
  }
}

function callBridgeFunction (name) {
  return function (value) {
    return new Promise(function (resolve) {
      window.addEventListener(`nativeToJsEvent.${name}`, function (event) {
        // wcComponents.toast(`回调:${JSON.stringify(event.data)}`)
        resolve(event.data)
      })

      let timer = setTimeout(function () {
        console.error(`请求${name}超时`)
        resolve({
          success: false,
          data: null,
          message: `请求${name}超时`
        })
      }, 3000)

      // 调用
      try {
        if (typeof window.jsToNative !== 'undefined') {
          window.jsToNative[name](value)
        } else if (typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers !== 'undefined') {
          window.webkit.messageHandlers[name].postMessage(value)
        }
      } catch (e) {
        // wcComponents.alert(e.message)
        resolve({
          success: false,
          data: null,
          message: e.message
        })
      }
    })
  }
}

for (let f of apis) {
  window.nativeToJs[f] = dispatchBridgeEvent(f)
  bridge.functions[f] = callBridgeFunction(f)
}

Vue.prototype.$bridge = bridge