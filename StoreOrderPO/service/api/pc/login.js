export default [
  {
    name: "get_imgValidCode",
    desc: "获取普通图片验证码",
    params: {
      method: "GetImgValidCode",
      codeLen: 5
    }
  },
  {
    name: "get_noteCode",
    desc: "获取手机短信验证码",
    params: {
      method: "GetSmsValidCode",
      phone: "",
      imgValidCode: "",
      tokenId: ""
    }
  },
  {
    name: "login_byOpenId",
    desc: "通过Id登陆",
    params: {
      method: "LoginByOpenId",
      openid: ""
    }
  },
  {
    name: "login_byPhone",
    desc: "通过手机号码登陆",
    params: {
      method: "LoginByPhone",
      phone: "",
      smsValidCode: ""
    }
  },
  {
    name: "LoginByStoreCashierId",
    desc: "通过收银员Id登陆",
    params: {
      method: "LoginByStoreCashierId",
      storeCashierId:''
    }
  }
];
