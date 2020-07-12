import _ from 'lodash'
import HttpClass from '../service/HttpClass'

import Vue from 'vue'
import cookie from 'js-cookie'
import {
  WX_APPID,
  LONG_WAIT_SEC,
  API_CONFIG_BASE
} from '~/config'

import { xyTools } from 'vue-xy-ui'

/*++++++++++ some component insert ++++++++++*/
import poComponents from './components'
import LoadingComponent from '~/node_modules/vux/src/components/loading/index.vue'

let that = {
  $po: poComponents
}

let LoadingConstructor = Vue.extend(LoadingComponent)
let LoadingInstance = new LoadingConstructor({
  el: document.createElement('div')
})
document.body.appendChild(LoadingInstance.$el)
/*---------- some component insert ----------*/

// show	boolean	false	显示状态，在 v2.5.7 前使用v-model绑定，后面直接使用 :show 绑定	--
// text	string	加载中	提示文字，值为空字符时隐藏提示文字	--
// position	string	fixed	定位方式，默认为fixed，在100%的布局下用absolute可以避免抖动	--
let Loading = {
 show: _.throttle((text = "数据加载中") => {
    LoadingInstance.text = text;
    LoadingInstance.show = true;
  }, LONG_WAIT_SEC,{'trailing':false}),
  hide () {
    LoadingInstance.show = false
  }
}

let LoadingTimer = new Map()
let LoadingIndex = 0

// 加载慢的效果队列处理
function addLoading (index) {
  LoadingTimer.set(index, setTimeout(function () {
    Loading.show()
  }, LONG_WAIT_SEC))
}

function clearLoadingTimer (index) {
  let target = LoadingTimer.get(index)
  if (target) {
    clearTimeout(target)
    target = null
    LoadingTimer.delete(index)
  }
  Loading.hide()
}
/*++++++++++ axios interceptors ++++++++++*/
class HttpWithUIClass extends HttpClass {
  requestSuccessFunc(requestObj) {
    // console.log(requestObj)
    addLoading(LoadingIndex);
    requestObj.loadingIndex = LoadingIndex++;
    
    return requestObj;
  }

  requestFailFunc(requestError) {
    clearLoadingTimer(requestError.config.loadingIndex);
    console.error(`requestFailFunc:${requestError}`);
    that.$pc.toast(requestError);
    return Promise.reject(requestError);
  }

  responseSuccessFunc(res) {
    clearLoadingTimer(res.config.loadingIndex);
    let { data, success, message } = res.data;
    
    if (!success) {
      that.$po.alert(message, {
        title: "提示",
        confirmButtonText: "确定",
        onConfirm() {
          console.log(`wc-confirm onConfirm callback 1`);
        }
      });
    }
    return Promise.resolve(res.data);
  }

  responseFailFunc(responseError) {
    clearLoadingTimer(responseError.config.loadingIndex);

    return Promise.reject(responseError);
  }

  constructor() {
    super();
  }
}

/*---------- axios interceptors ----------*/

/*---------- some component control ----------*/

function init ({next, base, app}) {

  // let {router} = app

  /*++++++++++ api create ++++++++++*/

  let httpInstance = new HttpWithUIClass()

  // app.$api = httpInstance.api

  Vue.prototype.$api = httpInstance.api

  /*---------- api create ----------*/
}

export default init