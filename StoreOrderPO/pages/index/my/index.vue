<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-my {
  background: $backgroundColor;
  .pc-my__info {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > i {
      margin: rsh(20) 0;
    }
    & > span {
      margin-bottom: rsh(20);
    }
  }
  .pc-my__item {
    width: 100vw;
    height: rsh(90);
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: rsh(30);
    & > i {
      margin: rsh(30);
    }
    & > span {
      flex-grow: 1;
    }
  }
  .pc-my__btn {
    margin-top: rsh(40);
  }
  .pc-my__box {
    width: rsh(680);
    height: rsh(800);
    background: #fff;
    margin: rsh(120) auto;
    border-radius: rsh(14);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .pc-my__box__title {
      font-size: rsh(44);
      width: 100%;
      height: rsh(100);
      text-align: center;
      line-height: rsh(100);
      color: #000;
    }
    .pc-my__box__list {
      width: 90%;
      height: rsh(600);
      overflow-y: auto;
      .pc-my__box__list__item {
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
        &.pc-my__box__list__item--active {
          color: $mainColor;
        }
      }
    }
    .pc-my__box__btn {
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
  .pc-version {
    position: fixed;
    bottom: rsh(130);
    bottom: calc(env(safe-area-inset-bottom) + #{rsh(130)});
    width: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 12px;
    line-height: 14px;
    transform: scale(0.8);
    opacity: 0.8;
    & > span {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 7px;
      padding: 0 4px;
    }
  }
}
</style>
<template>
  <div class="pc-my">
    <div class="pc-my__info">
      <i class="icons-common-headimgurl-outer">
        <div class="icons-common icons-common-headimgurl-inner"></div>
      </i>
      <span>{{$store.state.storeListInfo_pc.storeInfo.CashierName}}</span>
    </div>
    <div class="pc-my__item" @click="$router.push('/order')">
      <i class="icons-common-order-outer">
        <div class="icons-common icons-common-order-inner"></div>
      </i>
      <span>我的订单</span>
      <i class="icons-common-arrow-right-outer">
        <div class="icons-common icons-common-arrow-right-inner"></div>
      </i>
    </div>
    <div class="pc-my__item" @click="onStore()">
      <i class="icons-common-store-outer">
        <div class="icons-common icons-common-store-inner"></div>
      </i>
      <span>店铺管理</span>
      <i class="icons-common-arrow-right-outer">
        <div class="icons-common icons-common-arrow-right-inner"></div>
      </i>
    </div>
    <div class="pc-my__item" @click="onPhone()">
      <i class="icons-common-index-outer">
        <div class="icons-common icons-common-index-inner"></div>
      </i>
      <span>联系客服</span>
      <i class="icons-common-arrow-right-outer">
        <div class="icons-common icons-common-arrow-right-inner"></div>
      </i>
    </div>
    <div class="pc-my__item" @click="$router.push('/my/limit')">
      <i class="icons-common-limit-outer">
        <div class="icons-common icons-common-limit-inner"></div>
      </i>
      <span>我的额度</span>
      <i class="icons-common-arrow-right-outer">
        <div class="icons-common icons-common-arrow-right-inner"></div>
      </i>
    </div>
    <button
      class="pc-btn pc-my__btn--pay"
      @click="onPay()"
      v-xy-moving-btn
    >去还款</button>
    <button class="pc-btn pc-my__btn" @click="onLogout()" v-xy-moving-btn>退出登陆</button>
    <div class="mask" v-if="isStore">
      <div class="pc-my__box">
        <div class="pc-my__box__title">选择店铺</div>
        <div class="pc-my__box__list" @click="onStoreItem($event)">
          <div
            class="pc-my__box__list__item"
            :class="{'pc-my__box__list__item--active':chooseStore==index}"
            v-for="(item,index) in storeList"
            :key="item.Id"
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
        <!-- <div class="pc-my__box__btn" @click="isStore=false">确认</div> -->
        <i class="icons-common-close-outer" @click="isStore=false">
          <div class="icons-common icons-common-close-inner"></div>
        </i>
      </div>
    </div>
    <div class="pc-version">
      <span>{{$moment().format("YYYY-MM-DD HH:mm:ss")}}</span>
    </div>
  </div>
</template>


<script>
import auth from "~/mixins/auth";
export default {
  mixins: [auth],
  data() {
    return {
      isStore: false,
      chooseStore: 0,
      storeList: [],
      amount: 0,
    };
  },
  watch: {
    "$store.state.wxAuthStatus": async function(v) {
      let that = this;
      // 需要授权才可以加载的数据(授权比页面装载慢)

      if (v && !that.startLoad) {
        that.startLoad = true;
        await that.loadAll();
      }
    },
  },
  methods: {
    async loadAll() {
      let that = this;
      await that.getAccountInfo();
    },
    async onStoreItem(e) {
      let that = this;
      let index = e.target.dataset.index - 0;
      that.$store.commit("storeListInfo_pc", {
        storeInfo: that.storeList[index],
      });
      let { data, message, success } = await that.$api.pc["pay/CheckStoreFinanceCreditStatus"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
      });
      if (success && data && data.AuthUrl) {
        window.location.href = data.AuthUrl;
      }
      if (!success) {
        that.onLogout();
      }
      await that.getAccountInfo();
      that.isStore = false;
    },
    async onStore() {
      let that = this;
      that.isStore = true;
      that.storeList = that.$store.state.storeListInfo_pc.storeList;
      that.storeList.forEach((o, index) => {
        if (o.Id == that.$store.state.storeListInfo_pc.storeInfo.Id) {
          that.chooseStore = index;
        }
      });
    },
    onPhone() {
      let that = this;
      that.$pc.confirm("400-5225-412", {
        title: "提示",
        confirmButtonText: "立即拨打",
        cancelButtonText: "取消",
        onConfirm() {
          window.location.href = "tel://400-5225-412";
        },
      });
    },
    async onPay() {
      let that = this;
      if (that.$store.state.storeListInfo_pc.storeInfo.FinanceCode == "1010") {
        let { data, message, success } = await that.$api.pc["pay/GoRepayment"]({
          storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        });
        if (success && data && data.AuthUrl) {
          window.location.href = data.AuthUrl;
        }
      } else if (that.$store.state.storeListInfo_pc.storeInfo.FinanceCode == "1020") {
        if (that.$xyTools.browser().wx) {
          wx.miniProgram.getEnv(function(res) {
            if (res.miniprogram) {
              // 走在小程序的逻辑
              wx.miniProgram.navigateTo({
                url:
                  "/pages/recharge/recharge?storeCashierId=" +
                  that.$store.state.storeListInfo_pc.storeInfo.Id +
                  "&storeId=" +
                  that.$store.state.storeListInfo_pc.storeInfo.StoreId +
                  "&path=/home" +
                  "&amount=" +
                  that.amount,
              });
            }
          });
        }
      }
    },
    async getAccountInfo() {
      let that = this;
      let { data, message, success } = await that.$api.pc["pay/FindAccountInfo"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
      });
      if (success) {
        that.amount = data.creditLimit - data.availLimit;
      }
    },
    onLogout() {
      let that = this;
      that.$store.dispatch("logOut");
      that.$router.replace("/auth/login");
    },
  },
  async created() {
    let that = this;
    // 需要授权才可以加载的数据(授权比页面装载慢)
    if (that.$store.state.wxAuthStatus && !that.startLoad) {
      that.startLoad = true;
      await that.loadAll();
    }
  },
};
</script>


