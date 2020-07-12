import {
  BD_KEY
} from '~/config'
import jsonp from 'jsonp'
import axios from 'axios'

import Vue from 'vue'
import _ from 'lodash'
import { xyTools } from 'vue-xy-ui'

// 自定义插件
import ConfirmComponent from '~/components/pop/confirm.vue'
import AlertComponent from '~/components/pop/alert.vue'
import ToastComponent from '~/components/pop/toast.vue'

let ConfirmConstructor = Vue.extend(ConfirmComponent)
let AlertConstructor = Vue.extend(AlertComponent)
let ToastConstructor = Vue.extend(ToastComponent)

let ConfirmInstance = new ConfirmConstructor({
  el: document.createElement('div')
})
let AlertInstance = new AlertConstructor({
  el: document.createElement('div')
})

document.body.appendChild(ConfirmInstance.$el)
document.body.appendChild(AlertInstance.$el)

let index = 0

// 同步
const Confirm = function (content, opts = {}) {
  opts.index = index++
  return new Promise(function (resolve) {
    ConfirmInstance.show(content, opts, (result) => {
      resolve(result)
    })
  })
}

// 同步
const Alert = function (content, opts = {}) {
  opts.index = index++
  return new Promise(function (resolve) {
    AlertInstance.show(content, opts, () => {
      resolve()
    })
  })
}

// 多实例
const Toast = _.throttle(function (content, opts = {}) {
  opts.index = index++
  let ToastInstance = new ToastConstructor({
    el: document.createElement('div')
  })
  document.body.appendChild(ToastInstance.$el)
  ToastInstance.show(content, opts)
}, 1500, {
  leading: true,
  trailing: false
})


function goToWebMap (key, lat, lon, title = '', address = '', sourceApp = '') {
  let url = ''
  switch (key) {
    case 'baidu':
      url = `http://api.map.baidu.com/marker?location=${lat},${lon}&title=${title}&content=${address}&output=html&src=${sourceApp}`
      break
    case 'gaode':
      url = `https://uri.amap.com/marker?position=${lon},${lat}&name=${title}&src=${sourceApp}&coordinate=gaode&callnative=0`
      break
    case 'tengxu':
      url = `https://apis.map.qq.com/uri/v1/marker?marker=coord:${lat},${lon};title:${title};addr:${address}&referer=${sourceApp}`
      break
    //            case 'apple':
    //              url = ''
    //              break
    default:
      break
  }
  if (url) {
    window.location.href = url
  }
}

async function goToMap (key, lat, lon, title = '', address = '') {
  let url = ''
  let browser = xyTools.browser()
  let sourceApp = ''
  if (!browser.wx) {
    if (browser.type === 'android' || /BLKANDROID/.test(navigator.userAgent)) {
      sourceApp = 'com.blk.community'
      switch (key) {
        case 'baidu':
          url = `bdapp://map/marker?location=${lat},${lon}&title=${title}&content=${address}&traffic=on&src=${sourceApp}`
          break
        case 'gaode':
          url = `androidamap://viewMap?sourceApplication=${sourceApp}&poiname=${title}&lat=${lat}&lon=${lon}&dev=0`
          break
        case 'tengxu':
          url = `qqmap://map/marker?marker=coord:${lat},${lon};title:${title};addr:${address}`
          break
        default:
          break
      }
    } else if (browser.type === 'ios' || /BLKIOS/.test(navigator.userAgent)) {
      sourceApp = 'ios.blk.community'
      switch (key) {
        case 'baidu':
          url = `baidumap://map/marker?location=${lat},${lon}&title=${title}&content=${address}&src=${sourceApp}`
          break
        case 'gaode':
          url = `iosamap://viewMap?sourceApplication=${sourceApp}&poiname=${title}&lat=${lat}&lon=${lon}&dev=0`
          break
        case 'tengxu':
          url = `qqmap://map/marker?marker=coord:${lat},${lon};title:${title};addr:${address}`
          break
        //              case 'apple':
        //                url = `http://maps.apple.com/?ll=${lat},${lon}&q=${title}&address=${address}`
        //                break
        default:
          break
      }
    }
    if (url) {
      window.location.href = url
    }

    let result = await hasMapWait()
    if (!result) {
      goToWebMap(key, lat, lon, title, address, sourceApp)
    }
  }
}
 function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  guid:guid
}