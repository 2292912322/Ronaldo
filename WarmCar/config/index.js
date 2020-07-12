let env = process.env.NODE_ENV ? process.env.NODE_ENV : 'production'

let local = 'http://localhost'

export const APP_NAME = XY_APP_NAME
export const WX_APPID = XY_WX_APPID
export const WC_KEY = XY_KEY
export const BD_KEY = 'EkXGzQKEDKNgkDvx50vGQTiExI35OIUH'
export const WX_ENABLE = XY_WX_ENABLE

let pro = XY_API

let dev = 'http://warmcar.com.cn:6995'

// API 配置
export const API_CONFIG_BASE = {
  baseUrl: env === 'production' ? pro : dev,
  mock: env === 'production' ? false : false,
  mockBaseURL: `${local}:3004`,
  debug: false,
  cache: true,
  session: env === 'production' ? '' : '',
  dir: '/#',
  location: env === 'production' ? null : {
    cityCode: '440400',
    cityName: '珠海',
    latitude: 22.376689,
    longitude: 113.577893
  }
}

// API 默认配置
export const API_CONFIG_DEFAULT = {
  method: 'POST',
  name: '',
  desc: '',
  path: '',
  params: {},
  // contentType: 'application/x-www-form-urlencoded',
  contentType: 'application/json',
  mock: true,
  mockPath: '',
  cache: true
}

export const LONG_WAIT_SEC = 500

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  // maxContentLength: 2000,
  // headers: {}
}

