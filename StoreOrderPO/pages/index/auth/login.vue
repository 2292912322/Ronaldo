<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-login {
  background: url("~assets/imgs/bg.png") no-repeat;
  background-size: 100% 100%;
  .pc-login__header {
    margin: 0 auto;
    width: 100vw;
    height: rsh(340);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
    & > i {
      margin-top: rsh(70);
    }
    & > h2 {
      color: #fff;
    }
  }
  .pc-login__card {
    width: rsh(690);
    height: rsh(560);
    margin-left: rsh(30);
    border-radius: rsh(10);
    position: absolute;
    bottom: rsh(20);
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 rsh(5) rsh(5) rgba(#d6d6d6, 1);
    .pc-login__card__item {
      width: rsh(630);
      height: rsh(110);
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      & > input {
        width: 9em;
        height: rsh(100);
        line-height: rsh(100);
        border: none;
        margin-left: rsh(30);
        font-size: rsh(24);
        &:focus {
          outline: none;
          //   border: 1px solid rgba(0,0,0,1);
        }
      }
      & > img {
        width: rsh(120);
        height: rsh(60);
      }
      & > span {
        color: $mainColor;
        font-size: rsh(25);
        margin-left: rsh(50);
        position: relative;
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: -1em;
          width: 1px;
          height: 100%;
          background-color: $inputLineColor;
        }
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: $inputLineColor;
        transform: scale(1, 0.5);
      }
      &:first-child {
        margin-top: rsh(30);
      }
    }
    .pc-login__card__btn {
      margin-top: rsh(60);
    }
  }
  .pc-login__box {
    width: rsh(680);
    height: rsh(800);
    background: #fff;
    margin: rsh(120) auto;
    border-radius: rsh(14);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .pc-login__box__title {
      font-size: rsh(44);
      width: 100%;
      height: rsh(100);
      text-align: center;
      line-height: rsh(100);
      color: #000;
    }
    .pc-login__box__list {
      width: 90%;
      height: rsh(600);
      overflow-y: auto;
      .pc-login__box__list__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: rsh(100);
        position: relative;
        & > i {
          margin: 0 rsh(10);
        }
        & > span {
          margin-bottom: rsh(10);
        }
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          width: rsh(600);
          height: 1px;
          transform: scale(1, 0.5);
          background-color: #e2e2e2;
        }
        &.pc-login__box__list__item--active {
          color: $mainColor;
        }
      }
    }
    .pc-login__box__btn {
      width: rsh(600);
      height: rsh(100);
      line-height: rsh(100);
      text-align: center;
      color: $mainColor;
      font-size: rsh(40);
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: rsh(600);
        height: 1px;
        transform: scale(1, 0.5);
        background-color: #e2e2e2;
      }
    }
    & > i {
      position: absolute;
      top: rsh(10);
      right: rsh(10);
    }
  }
}
</style>
<template>
  <div class="pc-login">
    <div class="pc-login__header">
      <i class="icons-common-logo-outer">
        <div class="icons-common icons-common-logo-inner"></div>
      </i>
      <h2>店铺综合采购平台</h2>
    </div>
    <div class="pc-login__card">
      <div class="pc-login__card__item">
        <i class="icons-common-phone-outer">
          <div class="icons-common icons-common-phone-inner"></div>
        </i>
        <input placeholder="请输入手机号" v-model.trim="phone" pattern="\d*">
        <!-- <img :src alt=""> -->
      </div>
      <div class="pc-login__card__item">
        <i class="icons-common-code-outer">
          <div class="icons-common icons-common-code-inner"></div>
        </i>
        <input type="text" placeholder="请输入验证码" v-model.trim="imgValidCode">
        <img :src="imgValid" alt="" @click="getCode()">
        <span @click="getNoteCode()">{{isCountDown? '重新获取('+countDownNum+'s)' : '获取短信验证码'}}</span>
      </div>
      <div class="pc-login__card__item">
        <i class="icons-common-note-code-outer">
          <div class="icons-common icons-common-note-code-inner"></div>
        </i>
        <input pattern="\d*" placeholder="请输入短信验证码" v-model.trim="smsValidCode">
      </div>
      <div class="pc-login__card__btn pc-btn" @click="onLogin()">登录</div>
    </div>
    <div class="mask" v-if="isStore">
      <div class="pc-login__box">
        <div class="pc-login__box__title">选择店铺</div>
        <div class="pc-login__box__list" @click="onStoreItem($event)">
          <div
            class="pc-login__box__list__item"
            :class="{'pc-login__box__list__item--active':chooseStore==index}"
            v-for="(item,index) in storeList"
            :key="item.StoreName"
            :data-index="index"
          >
            <i :class="`icons-common-store${chooseStore==index ? '-active':''}-outer`">
              <div
                :class="`icons-common icons-common-store${chooseStore==index ? '-active':''}-inner`"
                :data-index="index"
              ></div>
            </i>
            <span :data-index="index">{{item.StoreName}}</span>
          </div>
        </div>
        <!-- <div class="pc-login__box__btn" @click="isStore=false">确认</div> -->
        <i class="icons-common-close-outer" @click="isStore=false">
          <div class="icons-common icons-common-close-inner"></div>
        </i>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      chooseItem: 0,
      imgValid: "",
      imgValidCode: "",
      smsValidCode: "",
      tokenId: "",
      phone: "",
      countDownNum: 0,
      isCountDown: false,
      isStore: false,
      storeList: [],
      chooseStore: 0,
    };
  },
  methods: {
    async getCode() {
      let that = this;
      let { data } = await that.$api.pc["login/get_imgValidCode"]({});
      that.imgValid = "data:image/png;base64," + data.imageData;
      that.tokenId = data.tockenId;
    },
    async getNoteCode() {
      let that = this;
      if (that.imgValidCode) {
        let { data, message, success } = await that.$api.pc["login/get_noteCode"]({
          phone: that.phone,
          imgValidCode: that.imgValidCode,
          tokenId: that.tokenId,
        });
        if (success) {
          that.isCountDown = true;
          that.countDown(60);
          that.$pc.toast(message);
        }
      } else {
        that.$pc.toast("验证码不能为空！");
      }
    },
    async onLogin() {
      let that = this;
      if (that.phone && that.smsValidCode) {
        let { data, message, success } = await that.$api.pc["login/login_byPhone"]({
          phone: that.phone,
          smsValidCode: that.smsValidCode,
        });
        if (success) {
          that.storeList = data;
          if (that.storeList.length == 1) {
            let storeListInfo_pc = {
              storeList: that.storeList,
              storeInfo: that.storeList[0],
            };
            that.$store.commit("storeListInfo_pc", storeListInfo_pc);
            let flat = await that.CheckStoreFinanceCreditStatus();
            if (!flat) return;
            if (!that.storeList[0].OpenId) {
              await that.getWxAuthData();
            }
            if (flat && that.storeList[that.chooseStore].OpenId) {
              that.$store.commit("wxAuth", true);
              that.$router.replace("/home");
            }
          } else {
            that.isStore = true;
          }
          that.$pc.toast(message);
        }
      } else {
        that.$pc.toast("手机号码和验证码不能为空！");
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
    async onStoreItem(e) {
      let that = this;
      that.chooseStore = e.target.dataset.index - 0;
      let storeListInfo_pc = {
        storeList: that.storeList,
        storeInfo: that.storeList[that.chooseStore],
      };
      that.$store.commit("storeListInfo_pc", storeListInfo_pc);
      let flat = await that.CheckStoreFinanceCreditStatus();
      if (!flat) return;
      if (!that.storeList[that.chooseStore].OpenId) {
        await that.getWxAuthData();
      }

      if (flat && that.storeList[that.chooseStore].OpenId) {
        that.$store.commit("wxAuth", true);
        that.$router.replace("/home");
      }
    },
    countDown(num) {
      let that = this;
      that.countDownNum = num;
      let timeClock = setInterval(function() {
        that.countDownNum--;
        if (that.countDownNum == 0) {
          that.isCountDown = false;
          clearInterval(timeClock);
        }
      }, 1000);
    },
    async CheckStoreFinanceCreditStatus() {
      let that = this;
      let { data, message, success } = await that.$api.pc["pay/CheckStoreFinanceCreditStatus"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
      });
      if (success) {
        if (data && data.AuthUrl) {
          that.$store.dispatch("logOut");
          window.location.href = data.AuthUrl;
          return false;
        }
        return true;
      } else {
        that.$store.dispatch("logOut");
        that.isStore = false;
        return false;
      }
    },
    async loadAll() {
      let that = this;
      let loginStatus = that.$route.query.loginStatus - 0;
      if (loginStatus) {
        that.$pc.toast("登陆失败");
      }
      that.getCode();
    },
  },
  async created() {
    let that = this;
    // let { data, message, success } = await that.$api.common["auth/UpdateStoreCashierWeixinId"]({
    //   storeCashierId: '57dc2f49-ec60-4cb8-852d-22d206deffd7',
    //   openId: "oIeE50xglbH56WDnhaj3xrd9VNtM",
    // });
    // let env = process.env.NODE_ENV ? process.env.NODE_ENV : "production";
    await that.loadAll();
  },
};
</script>


