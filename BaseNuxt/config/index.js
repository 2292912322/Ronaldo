
let env = process.env.MY_ENV 

let local = 'http://localhost'

export const BD_KEY = 'EkXGzQKEDKNgkDvx50vGQTiExI35OIUH'

let pro = DD_API

let dev = ''

// API 配置
export const API_CONFIG_BASE = {
  baseUrl: env === 'production' ? pro : dev,
  debug: false,
  cache: true,
  session: env === 'production' ? '' : '',
  dir: '/#',
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
}

export const LONG_WAIT_SEC = 500

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  // maxContentLength: 2000,
  // headers: {}
}

