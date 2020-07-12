import axios from 'axios'
import cookie from 'js-cookie'
import {
  AXIOS_DEFAULT_CONFIG,
  API_CONFIG_BASE
} from '~/config'
import MakeApiClass from './MakeApiClass'
import api from '~/service/api'

export default class HttpClass {
  requestSuccessFunc (requestObj) {
    // console.log(requestObj)
    addLoading(LoadingIndex)
    requestObj.loadingIndex = LoadingIndex++

    return requestObj
  }

  requestFailFunc (requestError) {
    clearLoadingTimer(requestError.config.loadingIndex)

    console.error(`requestFailFunc:${requestError}`)

    that.$pc.toast(requestError)
    return Promise.reject(requestError)
  }

  responseSuccessFunc (res) {
    clearLoadingTimer(res.config.loadingIndex)
    let {data, config: {url}} = res


    return Promise.resolve(data)
  }

  responseFailFunc (responseError) {
    clearLoadingTimer(responseError.config.loadingIndex)

  
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