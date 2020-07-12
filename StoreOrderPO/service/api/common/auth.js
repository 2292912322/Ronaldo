export default [
  {
    name: "get_authorize",
    desc: "获取微信授权",
    params: {
      method: "GetAuthUrl",
      state: "wx_redirect#wechat_redirect",
      scope: "snsapi_userinfo",
      notifyUrl: ""
    }
  },
  {
    name: "UpdateStoreCashierWeixinId",
    desc: "供应商更新OpenId",
    params: {
      method: "UpdateStoreCashierWeixinId",
      storeCashierId: "",
      openId: ""
    }
  },
  {
    // {
    //   "success": true,
    //   "message": null,
    //   "code": null,
    //   "attach": null,
    //   "data": {
    //     "appId": "",
    //     "timestamp": "",
    //     "nonceStr": "",
    //     "signature": ""
    //   }
    // }
    name: "jssdk",
    desc: "获取jssdk参数",
    // path: '/app/wx/signature',
    // mockPath: '/common/wx/jssdk',
    cache: false,
    params: {
      type: "WechatApiMdl",
      method: "JsApiConfig",
      etpCode: "",
      url: ""
    }
  }
];
