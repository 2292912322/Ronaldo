<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-order {
  background: $backgroundColor;
  .pc-order__title {
    width: 100vw;
    height: rsh(80);
    line-height: rsh(80);
    color: #fff;
    font-size: rsh(28);
    background: $mainColor;
    text-align: center;
  }
  .pc-order__topBar {
    width: 100vw;
    height: rsh(100);
    line-height: rsh(100);
    display: flex;
    flex-direction: row;
    align-items: center;
    & > div {
      width: rsh(110);
      height: rsh(30);
      background: #fff;
      border-radius: rsh(10);
      line-height: rsh(30);
      font-size: rsh(24);
      margin: 0 rsh(30);
      & > span {
        margin-left: rsh(20);
        position: relative;
        &::after {
          content: "";
          position: absolute;
          right: -1em;
          top: 40%;
          width: 0;
          height: 0;
          border-width: rsh(10);
          border-style: solid;
          border-color: #333333 transparent transparent transparent;
        }
      }
    }
  }
  .pc-order__list {
    height: calc(100vh - #{rsh(230)});
    overflow-y: auto;
    position: relative;
    & > span {
      font-size: rsh(38);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .pc-order__list--active {
      background: #e2e2e2 !important;
    }
    .pc-order__list__item {
      width: 100vw;
      min-height: rsh(240);
      background: #fff;
      position: relative;
      display: flex;
      flex-direction: column;
      margin: rsh(10) 0;
      & > span {
        margin: rsh(20) 0 0 rsh(25);
        &:last-of-type {
          position: relative;
          & > span {
            width: 5em;
            height: 1.5em;
            line-height: 1.5em;
            text-align: center;
            border: 1px solid $mainColor;
            color: $mainColor;
          }
          & > label {
            color: red;
          }
          .pc-order__list__item__icon {
            position: absolute;
            display: flex;
            flex-direction: row;
            right: rsh(20);
            top: 0;
            align-items: center;
            font-size: rsh(20);
            color: $mainColor;
          }
        }
      }
      .pc-order__list__item__list {
        .pc-order__list__item__list__item {
          display: flex;
          flex-direction: column;
          background: #fff;
          margin-top: rsh(10);
          & > div {
            margin: rsh(10) 0 0 rsh(25);
          }
          .pc-order__list__item__list__item--last {
            padding-bottom: rsh(20);
            position: relative;
            &::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 1px;
              transform: scale(1, 0.5);
              background: $backgroundColor;
            }
            & > span {
              &:last-of-type {
                display: inline-block;
                width: 3em;
                height: 1.5em;
                font-size: rsh(20);
                background: red;
                text-align: center;
                color: #fff;
                border-radius: rsh(10);
                line-height: 1.5em;
              }
            }
            & > label {
              color: $mainColor;
            }
          }
          .pc-order__list__item__list__item__icon {
            position: absolute;
            display: flex;
            flex-direction: row;
            bottom: rsh(26);
            right: rsh(24);
            align-items: center;
            font-size: rsh(20);
            color: $mainColor;
          }
          .pc-order__list__item__list__item__list {
            margin: 0;
            .pc-order__list__item__list__item__list__item {
              width: 100vw;
              background: #fff;
              height: rsh(160);
              display: flex;
              flex-direction: row;
              position: relative;
              & > i {
                margin: rsh(10) rsh(20);
                height: rsh(140);
                width: rsh(140);
              }
              .pc-order__list__item__list__item__list__item__detail {
                display: flex;
                flex-direction: column;
                width: rsh(300);
                height: rsh(140);
                justify-content: space-around;
                margin-top: rsh(10);
              }
              & > span {
                position: absolute;
                top: rsh(20);
                right: rsh(40);
              }
            }
          }
        }
      }
    }
  }
  .pc-order__box {
    width: rsh(690);
    height: rsh(600);
    background: #fff;
    border-radius: rsh(10);
    margin: rsh(270) rsh(30);
    position: relative;
    & > h2 {
      text-align: center;
      line-height: rsh(100);
    }
    .pc-order__box__main {
      height: rsh(400);
      display: flex;
      flex-direction: column;
      font-size: rsh(30);
      & > span {
        margin: rsh(20) 0 0 rsh(40);
      }
    }
    .pc-order__box__item {
      width: rsh(630);
      height: rsh(110);
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 auto;
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
    .pc-order__box__btn {
      width: 100%;
      height: rsh(100);
      display: flex;
      color: #fff;
      position: absolute;
      bottom: 0;
      & > span {
        width: 50%;
        height: rsh(102);
        text-align: center;
        line-height: rsh(100);
        background: $mainColor;
        &:last-of-type {
          background: $batteryRed;
          position: relative;
          & > form {
            opacity: 0;
          }
        }
      }
    }
  }
  .pc-order__box--200 {
    height: rsh(400);
  }
}
.pc-order__box__btn--input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: $batteryGreen;
}
.popup__title {
  height: rsh(100);
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & > div {
    color: $mainColor;
    margin-right: rsh(20);
  }
}
</style>
<template>
  <div class="pc-order">
    <!-- <div class="pc-order__title">
      <span>更多分类</span>
    </div>-->
    <div class="pc-order__topBar">
      <div @click="isPopup=true">
        <span>本月</span>
      </div>
      <span>选择查看月订单</span>
    </div>
    <div class="pc-order__list">
      <div
        class="pc-order__list__item"
        :class="{'pc-order__list--active':item.isDetail}"
        v-for="(item,index) in list"
        :key="item.Id"
      >
        <span>订单单号：{{item.PONumber}}</span>
        <span>订单时间：{{item.CreateDate.split('T')[0]}}</span>
        <span>联 系 人：{{item.Phone?item.Phone:'无联系人信息'}}</span>
        <span>
          状&nbsp;&nbsp;&nbsp;&nbsp;态：
          <label>{{item.Status==-1?'已经取消':item.IsCredited==0 ? '待确认' : '已经确认' }}</label>
          <span @click="onCredited(item.Id)" v-if="item.IsCredited==0&&item.Status!=-1">重新确认</span>
          <span @click="onCanCel(item.Id)" v-if="item.IsCredited==0&&item.Status!=-1">取消订单</span>
          <div class="pc-order__list__item__icon" @click="onDetail(item.Id,index)">
            <span>明细</span>
            <i :class="`icons-common-arrow-${item.isDetail||item.isCreditedDetail ? 'up':'down'}-outer`">
              <div :class="`icons-common icons-common-arrow-${item.isDetail||item.isCreditedDetail ? 'up':'down'}-inner`"></div>
            </i>
          </div>
        </span>
        <div class="pc-order__list__item__list" v-if="item.isDetail">
          <div
            class="pc-order__list__item__list__item"
            :class="{'pc-order__list--active':isMore}"
            v-for="(p) in item.orderList"
            :key="p.SupplierStorePO.PONumber"
          >
            <div>采购单号：{{p.SupplierStorePO.PONumber}}</div>
            <div>订单时间：{{p.SupplierStorePO.CreateDate.split('T')[0]}}</div>
            <div v-if="p.SupplierStorePO.SupplierName">供 应 商：{{p.SupplierStorePO.SupplierName}}</div>
            <div>订单类型：{{navType[p.SupplierStorePO.POType]}}</div>
            <div>送达时间：{{p.SupplierStorePO.EstimateArrivalDate?p.SupplierStorePO.EstimateArrivalDate.split('T')[0]:'尽快送达'}}</div>
            <div>
              状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：
              <!-- <span
                style="color:#148482"
              >{{p.SupplierStorePO.ShipmentStatus == 0?'待发货':p.SupplierStorePO.ShipmentStatus == 1?'待收货':'已收货'}}</span>-->
              <span
                style="color:#148482"
              >{{p.SupplierStorePO.Status==-1?'已经取消':p.SupplierStorePO.ConfirmedStatus==30?'未确定':p.SupplierStorePO.ShipmentStatus == 0?'待发货':p.SupplierStorePO.ShipmentStatus == 1?'待收货':'已收货'}}</span>
              <span
                v-if="p.SupplierStorePO.ConfirmedStatus==30 && p.SupplierStorePO.Status!=-1"
                style="color:red;border:1px solid red;padding:0 2px"
                @click="onCanCalPo(p.SupplierStorePO.Id)"
              >取消</span>
            </div>
            <div>
              订单金额：
              <span style="color:red">￥{{p.SupplierStorePO.TtlAmount |pcNumFormat}}</span>
            </div>
            <div>
              实付金额：
              <span style="color:red">￥{{p.SupplierStorePO.ActAmount |pcNumFormat}}</span>
            </div>
            <div class="pc-order__list__item__list__item--last">
              支付状态：
              <label style="color:#148482">{{p.SupplierStorePO.IsPaymented==0?'待支付':'已支付'}}</label>
              <span
                v-if="p.SupplierStorePO.IsPaymented==0&&p.SupplierStorePO.ShipmentStatus == 2"
                @click="onIsPay(p)"
              >支付</span>
              <label
                class="pc-order__list__item__list__item__icon"
                @click="p.isMore =!p.isMore;$forceUpdate()"
              >
                <span>更多</span>
                <i :class="`icons-common-arrow-${p.isMore ? 'up':'down'}-outer`">
                  <div :class="`icons-common icons-common-arrow-${p.isMore ? 'up':'down'}-inner`"></div>
                </i>
              </label>
            </div>
            <div class="pc-order__list__item__list__item__list" v-if="p.isMore">
              <div class="pc-order__list__item__list__item__list">
                <div
                  class="pc-order__list__item__list__item__list__item"
                  v-for="o in p.SupplierStorePODetail"
                  :key="o.Id"
                >
                  <i class="lazy-load">
                    <img v-lazy="o.ImgUrl" class="lazy-contain">
                  </i>
                  <div class="pc-order__list__item__list__item__list__item__detail">
                    <span class="ellipsis">{{o.ItemName}}</span>
                    <span>{{o.ItemBarcode}}</span>
                    <span style="color:red">￥{{o.OfferPrice |pcNumToFixed3}} {{o.Size}}</span>
                  </div>
                  <span>数量：{{o.ReceivedQty}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pc-order__list__item__list--NoCredited pc-list" v-if="item.isCreditedDetail">
          <div class="pc-list__item" v-for="c in item.orderListCredited" :key="c.Id">
            <i class="lazy-load">
              <img v-lazy="c.ImgUrl" class="lazy-contain">
            </i>
            <div class="pc-order__list__item__list__item__list__item__detail">
              <span class="ellipsis">{{c.ItemName}}</span>
              <span>{{c.ItemBarcode}}</span>
              <span style="color:red">￥{{c.OfferPrice |pcNumToFixed3}} {{c.Size}}</span>
            </div>
            <span>数量：{{c.Qty}}</span>
          </div>
        </div>
      </div>
      <span v-if="list.length===0">暂无数据</span>
    </div>
    <div class="mask" v-if="isPay">
      <div class="pc-order__box">
        <h2>确定支付此订单?</h2>
        <div class="pc-order__box__main">
          <span>采购单号：{{payObj.SupplierStorePO.PONumber}}</span>
          <span>供 应 商：{{payObj.SupplierStorePO.SupplierName}}</span>
          <span>
            实付金额：
            <span style="color:red">￥{{payDetail.ActAmount |pcNumFormat}}</span>
          </span>
        </div>
        <div class="pc-order__box__btn">
          <span @click="isPay=false">取消</span>
          <span>支付
            <form :action="payParam.Url" method="post" enctype="multipart/form-data">
              <input name="notify_url" :value="payParam.notify_url">
              <input name="orders" :value="payParam.orders">
              <input type="submit" value="支付" class="pc-order__box__btn--input">
            </form>
          </span>
        </div>
      </div>
    </div>
    <div class="mask" v-if="isSms">
      <div class="pc-order__box pc-order__box--200">
        <h2>请输入短信验证码</h2>
        <div class="pc-order__box__item">
          <i class="icons-common-note-code-outer">
            <div class="icons-common icons-common-note-code-inner"></div>
          </i>
          <input pattern="\d*" placeholder="请输入短信验证码" v-model="payDetail.Code">
        </div>
        <div class="pc-order__box__btn">
          <span @click="isSms=false">取消</span>
          <span @click="creditedStoreOrder()">支付</span>
        </div>
      </div>
    </div>
    <div v-transfer-dom>
      <popup v-model="isPopup">
        <div class="popup__title">
          <i class="icons-common-close-outer" @click="isPopup=false">
            <div class="icons-common icons-common-close-inner"></div>
          </i>
          <span>选择月数</span>
          <div @click="onComplete()">完成</div>
        </div>
        <datetime-view v-model="startDate" format="YYYY-MM"></datetime-view>
      </popup>
    </div>
  </div>
</template>


<script>
import DatetimeView from "~/node_modules/vux/src/components/datetime-view";
import Popup from "~/node_modules/vux/src/components/popup";
import TransferDom from "~/node_modules/vux/src/directives/transfer-dom";
import auth from "~/mixins/auth";
export default {
  mixins: [auth],
  components: {
    DatetimeView,
    Popup,
  },
  directives: {
    TransferDom,
  },
  data() {
    return {
      isPay: false,
      isDetail: false,
      isMore: false,
      isPopup: false,
      startDate: "2020-01",
      list: [],
      payObj: {},
      payDetail: {},
      navType: ["采购单", "退货单", "赠品单", "送货单", "换货单", "代客下单"],
      payParam: {},
      isSms: false,
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
      that.startDate = that.$moment().format("YYYY-MM");
      that.getOrderList();
    },
    //获取订单列表
    async getOrderList() {
      let that = this;
      let { data, message, success } = await that.$api.pc["order/FindStoreOrder"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        startDate: that
          .$moment(that.startDate)
          .startOf("month")
          .format("YYYY-MM-DD"),
        endDate: that
          .$moment(that.startDate)
          .endOf("month")
          .format("YYYY-MM-DD"),
      });
      if (success) {
        that.list = data;
        that.list.forEach((o) => {
          o.isDetail = false;
          o.isCreditedDetail = false;
        });
      }
    },
    //根据订货单ID获取采购单列表所有数据
    async getOrderListItemDetail(Id, index) {
      let that = this;
      let { data, message, success } = await that.$api.pc["order/FindSupplierStorePOByStoreOrderIdForAll"]({
        sOrderId: Id,
      });
      if (success) {
        data.forEach((o) => {
          o.isMore = false;
        });
        that.list[index].orderList = data;
      }
    },
    //根据订货单ID获取采购单列表所有数据
    async getOrderListCreditedItemDetail(Id, index) {
      let that = this;
      let { data, message, success } = await that.$api.pc["order/FindStoreOrderDetail"]({
        sOrderId: Id,
      });
      if (success) {
        that.list[index].orderListCredited = data;
      }
    },
    async onDetail(Id, index) {
      let that = this;
      if (that.list[index].IsCredited != 0) {
        if (!that.list[index].orderList) {
          await that.getOrderListItemDetail(Id, index);
        }
        that.list[index].isDetail = !that.list[index].isDetail;
      }else{
        if (!that.list[index].orderListCredited) {
          await that.getOrderListCreditedItemDetail(Id, index);
        }
        that.list[index].isCreditedDetail = !that.list[index].isCreditedDetail;
      }
      
      that.$forceUpdate();
    },
    async onComplete() {
      let that = this;
      that.isPopup = false;
      await that.getOrderList();
    },
    async onCredited(Id) {
      let that = this;
      that.payDetail._Id = Id;
      // let { data, message, success } = await that.$api.pc["pay/CreditedSendSms"]({
      //   storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
      //   sOrderId: Id,
      // });
      // if (success) {
      //   if (data.IsNeedSend) {
      //     that.isSms = true;
      //     that.payDetail.Code = data.Code;
      //     that.payDetail.OrderId = data.OrderId;
      //   } else {
      //     that.creditedStoreOrder();
      //   }
      // }
      let res = await that.$api.pc["pay/PaymentStoreOrderCheck"]({
        storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
        sOrderId: Id,
      });
      if (res.success) {
        if (res.data.IsNeedPayment) {
          if (res.data.IsBalance) {
            let SMS = await that.$api.pc["pay/PaymentStoreOrderSendSms"]({
              storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
              sOrderId: Id,
            });
            if (SMS.success) {
              if (SMS.data.IsNeedSend) {
                that.isSms = true;
                that.payDetail.Code = SMS.data.Code;
                that.payDetail.OrderId = SMS.data.OrderId;
              }
            }
          } else {
            that.$pc.confirm("余额不足,是否前往充值?", {
              title: "温馨提示",
              confirmButtonText: "前往充值",
              cancelButtonText: "暂不充值",
              onConfirm() {
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
                          "&path=" +
                          "/home",
                      });
                    }
                  });
                }
              },
              onCancel() {},
            });
          }
        } else {
          that.$pc.toast(res.message);
          that.getOrderList();
        }
      }
    },
    onCanCel(Id) {
      let that = this;
      that.$pc.confirm("是否取消此订单?", {
        title: "温馨提示",
        confirmButtonText: "确认",
        cancelButtonText: "再想想",
        async onConfirm() {
          let { data, message, success } = await that.$api.pc["order/CancelStoreOrder"]({
            sOrderId: Id,
          });
          if (success) {
            that.getOrderList();
          }
        },
        onCancel() {},
      });
    },
    onCanCalPo(Id) {
      let that = this;
      let id = Id;
      that.$pc.confirm("是否取消此PO单?", {
        title: "温馨提示",
        confirmButtonText: "确认",
        cancelButtonText: "再想想",
        async onConfirm() {
          let { data, message, success } = await that.$api.pc["order/CancelSupplierStorePO"]({
            storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
            sStorePOId: id,
          });
          if (success) {
            await that.getOrderList();
            that.$pc.toast("取消成功");
          }
        },
        onCancel() {},
      });
    },
    async onIsPay(item) {
      let that = this;
      if (that.$store.state.storeListInfo_pc.storeInfo.FinanceCode == "1020") {
        that.payObj = item;
        await that.getPayDetail(item.SupplierStorePO.Id);
        await that.onPay(item.SupplierStorePO.Id);
      } else {
        if (that.$xyTools.browser().wx) {
          wx.miniProgram.getEnv(function(res) {
            if (res.miniprogram) {
              // 走在小程序的逻辑
              wx.miniProgram.navigateTo({
                url:
                  "/pages/pay/pay?storeCashierId=" +
                  that.$store.state.storeListInfo_pc.storeInfo.Id +
                  "&storeId=" +
                  that.$store.state.storeListInfo_pc.storeInfo.StoreId +
                  "&sStorePOId=" +
                  item.SupplierStorePO.Id +
                  "&path=" +
                  that.$route.path,
              });
            }
          });
        }
      }
    },
    async onPay(Id) {
      let that = this;
      let { data, message, success } = await that.$api.pc["pay/PaymentSupplierStorePO"]({
        storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
        sStorePOId: Id,
      });
      if (success && data && data.PaymentData) {
        that.payParam = data.PaymentData;
        that.payParam.orders = JSON.stringify(that.payParam.orders);
        sessionStorage.historyUrl_pc = window.location.href;
        that.isPay = true;
      }
      // if (success) {
      //   that.$pc.toast(message);
      //   that.getOrderList();
      //   that.isPay = false;
      // }
    },
    async creditedStoreOrder() {
      let that = this;
      let { data, message, success } = await that.$api.pc["order/PaymentStoreOrder"]({
        storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
        sOrderId: that.payDetail._Id,
        smsOrderId: that.payDetail.OrderId,
        validateCode: that.payDetail.Code,
      });
      if (success) {
        that.$pc.toast(message);
        that.getOrderList();
      }
      that.isSms = false;
    },
    async getPayDetail(Id) {
      let that = this;
      let { data, message, success } = await that.$api.pc["pay/FindSupplierStorePOPaymentBossByStorePOId"]({
        sStorePOId: Id,
      });
      if (success) {
        that.payDetail = data;
      }
    },
  },

  async created() {
    let that = this;
    // 需要授权才可以加载的数据(授权比页面装载快)
    if (that.$store.state.wxAuthStatus && !that.startLoad) {
      that.startLoad = true;
      //
      await that.loadAll();
    }
    // 无需授权可以提前加载的数据
    if (that.$route.query.payStatus) {
      let payStatus = JSON.parse(that.$route.query.payStatus)[0];
      if (payStatus.orderStatus == 1) {
        that.$pc.alert("支付成功");
      } else {
        that.$pc.alert("支付失败");
      }
    }
    if (that.$route.query.status) {
      if (that.$route.query.status == 1) {
        that.$pc.alert("支付成功");
      } else {
        that.$pc.alert("支付失败");
      }
    }
  },
};
</script>


