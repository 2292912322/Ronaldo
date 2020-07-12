import axios from "axios";
let env = process.env.NODE_ENV ? process.env.NODE_ENV : "production";
let pro = "https://test01.posbit.cn:9000";
let dev = "https://test01.posbit.cn:9000";

let _baseUrl = env === "production" ? pro : dev;
let url = _baseUrl + "/WebApi.ashx?type=ServerModel&method=GetUrl&key=SmtBCC";
async function getBaseUrl() {
  return new Promise(function(resolve, reject) {
    axios.get(url).then(res => {
      resolve(res.data);
    });
  });
}

export async function getUrl() {
    let baseurl = await getBaseUrl();
    return baseurl;
}
