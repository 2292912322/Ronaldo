import axios from 'axios'
import {
  AXIOS_DEFAULT_CONFIG,
  API_CONFIG_BASE
} from '~/config'
import MakeApiClass from './MakeApiClass'
import api from '~/service/api'

export default class HttpClass {
  requestSuccessFunc (requestObj) {
    return requestObj
  }

  requestFailFunc (requestError) {
    console.error(requestError)
    return Promise.reject(requestError)
  }

  responseSuccessFunc (res) {
    let {data, config: {url}} = res

    let {rspCode, rspMsg} = data
    Object.assign(data, {
      success: rspCode === 0,
      message: rspMsg,
      code: rspCode
    })

    // console.log(`%crequest data:${JSON.stringify(data)}`, 'font-size:20px;color:red;')
    if (data.success) {
      // console.log(`%crequest success`, 'font-size:20px;color:red;')
      return Promise.resolve(data)
    } else if (data.code.toString() === '1021') {
      // cookie.remove('session')
      let dels = []
      // 清除缓存
      for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i)
        if (key.includes('"url"')) {
          dels.push(key)
        }
      }
      for (let i = 0; i < dels.length; i++) {
        sessionStorage.removeItem(dels[i])
      }
      if (xyTools.browser().wx) {
        window.location.reload()
      } else {
        window.location.href = `${API_CONFIG_BASE.dir}/auth/login`
      }
    } else {
      // 特殊
      if (data.message === '特殊返回信息') {
        console.log(`%crequest other`, '特殊返回信息')
      } else {
        // that.$wc.toast(data.message)
      }
    }
    console.error({
      message: data.message,
      code: data.code
    })
    return Promise.resolve(data)
  }

  responseFailFunc (responseError) {
    console.error(responseError)
    let {response} = responseError
    let msg = response ? (response.data ? response.data : response.statusText) : responseError.message
    if (response) {
      response.message = msg
      response.code = response.status
    }
    if (responseError.code === 'ECONNABORTED' && responseError.request.readyState === 4) {
      console.error(new Error('网络异常！'))
    } else {
      console.error(new Error(`错误: ${JSON.stringify(responseError)}`))
    }
    return Promise.reject(responseError)
  }

  constructor () {
    let axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG)
    // 注入请求拦截
    axiosInstance
      .interceptors.request.use(this.requestSuccessFunc, this.requestFailFunc)
    // 注入失败拦截
    axiosInstance
      .interceptors.response.use(this.responseSuccessFunc, this.responseFailFunc)

    this.api = new MakeApiClass(api, axiosInstance).api
  }
}

