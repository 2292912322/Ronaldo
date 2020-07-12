export default {
  name: "wx-auth",
  data() {
    return {};
  },
  methods: {
    async isLogin() {
      let that = this;
      if (localStorage.storeListInfo_pc && localStorage.userInfo_pc) {
        let { data, message, success } = await that.$api.common[
          "auth/UpdateStoreCashierWeixinId"
        ]({
          storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
          openId: that.$store.state.userInfo_pc.openid
        });
      }
      if (localStorage.storeListInfo_pc) {
        let { data, message, success } = await that.$api.pc[
          "login/LoginByStoreCashierId"
        ]({
          storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id
        });
        if (success) {
          let storeListInfo_pc = {
            storeList: data
          };
          that.$store.commit("storeListInfo_pc", storeListInfo_pc);
          if (!data[0].OpenId) {
            that.getWxAuthData();
          }
          // await CheckStoreFinanceCreditStatus();
          // that.$pc.toast(message);
        }
        that.$store.commit("wxAuth", true);
      }
    },
    //https://nr-doc-01.objectretail.com:8890
    //https://test01.posbit.cn:9008
    getWxAuthData() {
      let that = this;
      let notifyUrl = window.location.origin + "/StoreOrderPO/callback.html";
      let env = process.env.MY_ENV;
      let pro = "https://nr-doc-01.objectretail.com:8890";
      let dev = "https://test01.posbit.cn:9008";
      let baseUrl = env === "production" ? pro : dev;
      window.location.href =
        baseUrl +
        "/WebApi.ashx?method=GetAuthUrl&state=wx_redirect%23wechat_redirect&scope=snsapi_userinfo&notifyUrl=" +
        notifyUrl +
        "&etpCode=" +
        that.$store.state.storeListInfo_pc.storeInfo.EnterpriseCode +
        "&type=WechatApiMdl";
    },
    async CheckStoreFinanceCreditStatus() {
      let that = this;
      let { data, message, success } = await that.$api.pc[
        "pay/CheckStoreFinanceCreditStatus"
      ]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId
      });
      if (success && data.AuthUrl) {
        window.location.href = data.AuthUrl;
      }
      if (!success) {
        let that = this;
        that.$store.dispatch("logOut");
        that.$router.replace("/auth/login");
      }
    }
  },
  async created() {
    let that = this;
    await that.isLogin();
    if (!that.$store.state.wxAuthStatus) {
      that.$router.push("/auth/login");
    }
  }
};
