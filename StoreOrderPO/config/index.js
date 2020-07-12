
let env = process.env.MY_ENV;

let pro = "https://nr-doc-01.objectretail.com:8800";
let dev = "https://test01.posbit.cn:9000";

// API 配置
export const API_CONFIG_BASE = {
  baseUrl: env === 'production' ? pro : dev,
  debug: false,
  cache: false,
  dir: "/#"
};

// API 默认配置
export const API_CONFIG_DEFAULT = {
  method: "POST",
  path: "",
  params: {
    type: "WebApiStorePoMdl" //项目名称
  },
  contentType: "application/x-www-form-urlencoded",
  // contentType: 'application/json',
  cache: false
};

export const LONG_WAIT_SEC = 500;

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000
  // maxContentLength: 2000,
  // headers: {}
};
