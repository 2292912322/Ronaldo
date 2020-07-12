import _ from 'lodash'
import parseData from './parseData'
import axios from "axios";
import { API_CONFIG_BASE ,API_CONFIG_DEFAULT} from "~/config";
let url =  API_CONFIG_BASE.baseUrl+ "/WebApi.ashx?type=ServerModel&method=GetUrl&key=SmtBCC_StoreOrderPO";
let baseUrl;
function ajax(url){
  var Xhr = new XMLHttpRequest();
  Xhr.open('GET',url,false);
  Xhr.onreadystatechange = function(){
    if(Xhr.readyState == 4&&Xhr.status == 200){
      baseUrl = JSON.parse(Xhr.responseText).data;
      Xhr = null;
    }
  };
  Xhr.send();
}
async function getBaseUrl() {
  return new Promise(function(resolve, reject) {
    axios.get(url).then(res => {
      resolve(res.data.data);
    });
  });
}


class MakeApiClass {
  constructor(api, axiosInstance) {
    this.api = {}
    this.axiosInstance = axiosInstance
    this.apiBuilder(api)
  }

async apiBuilder(api) {
    let that = this
    ajax(url);
    // let baseUrl = await getBaseUrl();
    let bs = Object.keys(api).map(business => {
      that.api[business] = {}
      Object.keys(api[business]).map(namespace => {
        this._apiSingleBuilder(business, namespace, api[business][namespace],baseUrl)
        return null
      })
      // }
      return null
    })

  }

  _apiSingleBuilder(business, namespace, configs,baseUrl) {
    configs.forEach(config => {
      //为了迎合接口名字method和项目名字type都在params里面
      config.params.type = config.params.type? config.params.type :API_CONFIG_DEFAULT.params.type
      let configCombine = {
        ...API_CONFIG_DEFAULT,
        ...config
      }
      let url = configCombine.path
      let baseURL = baseUrl || 'https://test01.posbit.cn:9008/WebApi.ashx'
      
      
      let that = this
      Object.defineProperty(this.api[business], `${namespace}/${configCombine.name}`, {
        value(outerParams, outerOptions, patch) {
          let tempCombine = Object.assign({
            ...configCombine.params
          }, outerParams)
          // 校验参数
          let dataCombine = _.pick(tempCombine, _.keys(configCombine.params))
          if (Object.prototype.toString.call(configCombine.params)
            .includes('Array')) {
            dataCombine = [...outerParams]
          }
          let key = {
            url,
            ...dataCombine
          }
          _.unset(key, 'cache')
          key = JSON.stringify(key)
          if (API_CONFIG_BASE.cache && outerParams && outerParams.cache) {
            console.log(`%cfrom cache '${business}/${namespace}/${configCombine.name}'`, 'font-size:20px;color:purple;')
            let cacheRes = sessionStorage.getItem(key)
            if (cacheRes !== null) {
              // console.log(JSON.parse(cacheRes))
              return new Promise(function (resolve, reject) {
                resolve(JSON.parse(cacheRes))
              })
            }
          }

          // 根据文档特殊处理, 均处理为单文件
          let file = null
          // 把'multipart/form-data', 当作文件上传的标识
          if (configCombine.contentType === 'multipart/form-data') {
            // 取出文件
            file = dataCombine.file[0]
            // 处理参数前, 去除文件
            _.unset(dataCombine, 'file')
          }
          // dataCombine = parseData(dataCombine)

          let transformRequest = []
          if (['application/x-www-form-urlencoded', 'multipart/form-data'].includes(configCombine.contentType)) {
            transformRequest.push(function (data, headers) {
              // 把'multipart/form-data', 当作文件上传的标识
              if (configCombine.contentType === 'multipart/form-data') {
                var fd = new FormData()
                for (let it in data) {
                  if (Object.prototype.toString.call(data[it])
                            .includes('FileList')) {
                    for (let f of data[it]) {
                      fd.append(it, f)
                    }
                  } else {
                    fd.append(it, data[it])
                  }
                }
                fd.append('file', file)
                return fd
              }
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret.replace(/&$/, '')
            })
          }
          // 安卓低版本的webview 不能识别 response的josn字符串
          let transformResponse = []
          // transformResponse.push(function (data) {
          //   if (typeof data === 'string') {
          //     return JSON.parse(data)
          //   }
          //   return data
          // })
          return new Promise(function (resolve, reject) {
            that.axiosInstance(_normoalize(_.assign({
                url: patch !== undefined ? (url + patch) : url,
                desc: configCombine.desc,
                baseURL: baseURL,
                method: configCombine.method,
                transformRequest: transformRequest,
                transformResponse: transformResponse,
                headers: {
                  // 'X-Requested-With': 'XMLHttpRequest',
                  'Content-Type': configCombine.contentType
                },
                responseType: 'text'
              }, outerOptions), dataCombine))
              .then(function (res) {
                if (API_CONFIG_BASE.cache && configCombine.cache) {
                  console.log(`%csave cache '${business}/${namespace}/${configCombine.name}'`, 'font-size:20px;color:green;')
                  sessionStorage.setItem(key, JSON.stringify(res))
                }
                resolve(res)
              })
              .catch(function (e) {
                resolve(e)
              })
          })
        }
      })
    })
  }
}

function _normoalize(options, data) {
  if (options.method === 'POST') {
    options.data = data
  } else if (options.method === 'GET') {
    options.params = data
  }
  return options
}

export default MakeApiClass
