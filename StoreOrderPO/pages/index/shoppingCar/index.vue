<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-shoppingCar {
  background: #f4f4f4;
  .pc-shoppingCar__title {
    width: 100vw;
    height: rsh(80);
    line-height: rsh(80);
    color: #fff;
    font-size: rsh(28);
    display: flex;
    flex-direction: row;
    align-items: center;
    background: $mainColor;
    justify-content: space-between;
    & > i {
      margin: 0 rsh(20);
    }
    & > span {
      margin: 0 rsh(20);
    }
  }
  .pc-shoppingCar__topBar {
    width: 100vw;
    height: rsh(60);
    line-height: rsh(60);
    margin-bottom: rsh(10);
    display: flex;
    flex-direction: row;
    align-items: center;
    & > div {
      width: rsh(50);
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
          right: -0.5em;
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
  .pc-shoppingCar__list {
    height: calc(100vh - #{rsh(228)});
    overflow-y: auto;
    position: relative;
    & > span {
      font-size: rsh(38);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .pc-shoppingCar__list__item {
      background: #fff;
      margin-bottom: rsh(20);
      & > div {
        &:first-of-type {
          display: flex;
          flex-direction: row;
          height: rsh(90);
          align-items: center;
          justify-content: space-between;
          margin-left: rsh(20);
          & > span {
            font-weight: bold;
            color: black;
            width: 86%;
          }
        }
      }
    }
  }
  .pc-shoppingCar__bottom {
    width: 100vw;
    height: rsh(88);
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    & > div {
      width: rsh(120);
      height: rsh(88);
      line-height: rsh(88);
      color: #999999;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-left: rsh(20);
    }
    & > label {
      width: 4em;
      flex-grow: 1;
      text-align: right;
      margin-right: rsh(20);
      & > span {
        color: red;
      }
    }
    & > span {
      width: rsh(200);
      height: 100%;
      background: red;
      color: #fff;
      line-height: rsh(88);
      text-align: center;
    }
  }
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
.pc-shoppingCar__price {
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: #fff;
  padding-bottom: rsh(20);
  align-items: center;
  & > span {
    padding: rsh(20) rsh(30);
  }
  & > div {
    width: rsh(490);
    display: flex;
    flex-direction: column;
    margin-left: rsh(30);
    border: 1px solid #999999;
    box-sizing: border-box;
    & > div {
      display: flex;
      flex-direction: row;
      &:not(:last-of-type) {
        border-bottom: 1px solid #999999;
      }
      &:first-of-type {
        background: $mainColor;
        color: #fff;
      }
      & > span {
        width: 50%;
        height: rsh(50);
        text-align: center;
        line-height: rsh(50);
        &:first-of-type {
          border-right: 1px solid #999999;
        }
      }
    }
  }
}
.pc-order__box {
  width: rsh(690);
  height: rsh(400);
  background: #fff;
  border-radius: rsh(10);
  margin: rsh(270) rsh(30);
  position: relative;
  & > h2 {
    text-align: center;
    line-height: rsh(100);
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
</style>
<template>
  <div class="pc-shoppingCar">
    <div class="pc-shoppingCar__title">
      <i class="icons-common-arrow-left-outer" @click="$router.go(-1)">
        <div class="icons-common icons-common-arrow-left-inner"></div>
      </i>
      <span>购物车</span>
      <span @click="onAdmin()">{{isAdmin?'管理':'完成'}}</span>
    </div>
    <div class="pc-shoppingCar__topBar">
      <div @click="isPopup=true">
        <span></span>
      </div>
      <span>选择送达时间：</span>
      <span>{{arrivalDate?arrivalDate:'暂无选择时间'}}</span>
    </div>
    <div class="pc-shoppingCar__list">
      <div class="pc-shoppingCar__list__item" v-for="(item,index) in list" :key="item.SupplierId">
        <div @click="onSupplier(index)">
          <i
            :class="`icons-common-choose${item.isIcon? 'd':''}-outer`"
            @click.stop="onSupplierIcon(index)"
          >
            <div :class="`icons-common icons-common-choose${item.isIcon? 'd':''}-inner`"></div>
          </i>
          <i class="icons-common-store-outer">
            <div class="icons-common icons-common-store-inner"></div>
          </i>
          <span>{{item.SupplierName}}</span>
        </div>
        <div class="pc-item" v-for="(product,productIndex) in item.list" :key="product.Id">
          <i class="lazy-load">
            <img v-lazy="product.ImgUrl" class="lazy-contain">
          </i>
          <div>
            <span class="ellipsis">{{product.Name}}</span>
            <span>{{product.Barcode}}</span>
            <span style="color:red">
              ￥{{product.OfferPrice |pcNumToFixed3}}
              <span
                @click="onPrice(product.Id)"
                style="background:#148482;color:#fff;padding:0 2px"
              >阶梯价格</span>
            </span>
          </div>
          <div class="pc-list__item--input" @click.stop>
            <i
              :class="`icons-common-choose${product.isIcon? 'd':''}-outer`"
              @click="onIcon(index,productIndex)"
            >
              <div :class="`icons-common icons-common-choose${product.isIcon? 'd':''}-inner`"></div>
            </i>
            <div>
              <span @click="onReduce(index,productIndex)">-</span>
              <input pattern="\d*" v-model="product.num" @change="inputNum(index,productIndex)">
              <!-- <span>{{item.num}}</span> -->
              <span @click="onAdd(index,productIndex)">+</span>
            </div>
          </div>
        </div>
      </div>
      <span v-if="list.length===0">购物车空空如也~</span>
    </div>
    <div class="pc-shoppingCar__bottom">
      <div @click="onAll()">
        <i :class="`icons-common-choose${isAll? 'd':''}-outer`">
          <div :class="`icons-common icons-common-choose${isAll? 'd':''}-inner`"></div>
        </i>
        <span>全选</span>
      </div>
      <label>
        合计:
        <span>￥{{total | pcNumFormat}}</span>
      </label>
      <span @click="onBottom()">{{isAdmin?'下单':'删除'}}</span>
    </div>
    <div v-transfer-dom>
      <popup v-model="isPopup">
        <div class="popup__title">
          <i class="icons-common-close-outer" @click="isPopup=false">
            <div class="icons-common icons-common-close-inner"></div>
          </i>
          <span>选择送达时间</span>
          <div @click="isPopup = false">完成</div>
        </div>
        <datetime-view
          v-model="arrivalDate"
          format="YYYY-MM-DD"
          :start-date="startDate"
          :end-date="endDate"
        ></datetime-view>
      </popup>
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
      <popup v-model="isPrice">
        <div class="popup__title">
          <i class="icons-common-close-outer" @click="isPrice=false">
            <div class="icons-common icons-common-close-inner"></div>
          </i>
          <span style="flex:1;textAlign:center">阶梯价格</span>
        </div>
        <div class="pc-shoppingCar__price">
          <div>
            <div>
              <span>起订量</span>
              <span>商品单价</span>
            </div>
            <div v-for="p in detail.ItemPriceRule" :key="p.Id">
              <span>{{p.LimitOrderNum}}</span>
              <span>￥{{p.OfferPrice}}</span>
            </div>
          </div>
        </div>
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
      list: [],
      chooseList: [],
      isAdmin: true,
      isAll: false,
      isPopup: false,
      arrivalDate: "",
      isPrice: false,
      detail: {},
      startDate: "2020-06-10",
      endDate: "2020-06-24",
      startLoad: false,
      isSms: false,
      payDetail: {},
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
  computed: {
    total() {
      let that = this;
      let total = 0;
      that.chooseList.forEach((o) => {
        if (o.isIcon) {
          total += o.num * o.OfferPrice;
        }
      });
      return total;
    },
  },
  methods: {
    async loadAll() {
      let that = this;
      // that.list = that._.cloneDeep(that.$store.state.shoppingCar.list);
      await that.getList();
      that.isAll = that.list.every((o) => o.isIcon == true);
      that.arrivalDate = that.$moment().format("YYYY-MM-DD");
      that.startDate = that.$moment().format("YYYY-MM-DD");
      that.endDate = that
        .$moment(that.startDate)
        .add(14, "days")
        .format("YYYY-MM-DD");
    },
    async getList() {
      let that = this;
      let { data, message, success } = await that.$api.pc["shoppingCar/GetShoppingCarItem"]({
        storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
      });
      if (success) {
        data.forEach((o) => {
          o.isIcon = false;
        });
        let bs = that._.groupBy(data, (o) => o.SupplierId);
        that.list = that._.keys(bs).map((key) => {
          return {
            SupplierId: key,
            list: bs[key],
            isIcon: false,
            SupplierName: bs[key][0].SupplierName,
          };
        });
        console.log(that.list);
      }
    },
    onAdmin() {
      let that = this;
      that.isAdmin = !that.isAdmin;
    },
    async onPrice(Id) {
      let that = this;
      let { data, message, success } = await that.$api.pc["common/FindItemDetailByStoreItemId"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        storeItemId: Id,
        etpCode: that.$store.state.storeListInfo_pc.storeInfo.EnterpriseCode,
      });
      if (success && data.Item) {
        that.detail = data;
        that.isPrice = true;
      }
    },
    async onBottom() {
      let that = this;
      if (that.isAdmin) {
        that.chooseList.forEach((o) => {
          (o.itemName = o.Name), (o.Qty = o.num), (o.ItemBarcode = o.Barcode);
        });
        //下单逻辑
        let { data, success, message } = await that.$api.pc["order/CreateStoreOrder"]({
          storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
          remark: "",
          itemList: JSON.stringify(that.chooseList),
          arrivalDate: that.arrivalDate,
        });
        if (success) {
          // that.$store.dispatch("clearState", "shoppingCar");
          that.payDetail._Id = data.StoreOrderId;
          await that.$api.pc["shoppingCar/ClearShoppingCarItem"]({
            storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
          });
          that.list = [];
          let res = await that.$api.pc["pay/PaymentStoreOrderCheck"]({
            storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
            sOrderId: data.StoreOrderId,
          });
          if (res.success) {
            if (res.data.IsNeedPayment) {
              if (res.data.IsBalance) {
                let SMS = await that.$api.pc["pay/PaymentStoreOrderSendSms"]({
                  storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
                  sOrderId: data.StoreOrderId,
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
                  onCancel() {
                    that.$router.replace("/order");
                  },
                });
              }
            } else {
              that.$router.replace("/order");
              that.$pc.toast("下单成功");
            }
          }
        }
      } else {
        //删除逻辑
        let itemId = that.chooseList.map((o) => o.ItemId);
        let res = await that.$api.pc["shoppingCar/DeleteShoppingCarItem"]({
          storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
          itemId: JSON.stringify(itemId),
        });
        if (res.success) {
          await that.getList();
          that.$pc.toast(res.message);
        }
        // that.$store.commit("shoppingCar", { list: that.list });
      }
    },
    async creditedStoreOrder(Id) {
      let that = this;
      let { data, message, success } = await that.$api.pc["order/PaymentStoreOrder"]({
        storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
        sOrderId: that.payDetail._Id,
        smsOrderId: that.payDetail.OrderId,
        validateCode: that.payDetail.Code,
      });
      that.isSms = false;
      that.$pc.toast("下单成功");
      that.$router.replace("/order");
    },
    onIcon(index, productIndex) {
      let that = this;
      let list = that.list[index].list;
      if (list[productIndex].num !== 0) {
        list[productIndex].isIcon = !list[productIndex].isIcon;
        that.list[index].isIcon = list.every((o) => o.isIcon == true);
        that.isAll = that.list.every((o) => o.isIcon == true);
        if (list[productIndex].isIcon) {
          that.chooseList.push(list[productIndex]);
        } else {
          that.chooseList = that.chooseList.filter((o) => o.Id !== list[productIndex].Id);
        }
      } else {
        that.$pc.toast("商品数量不能为0");
      }
    },
    onSupplierIcon(index) {
      let that = this;
      that.list[index].isIcon = !that.list[index].isIcon;
      that.isAll = that.list.every((o) => o.isIcon == true);
      that.list[index].list.forEach((o) => {
        o.isIcon = that.list[index].isIcon;
      });
      if (that.list[index].isIcon) {
        that.chooseList = that._.concat(that.chooseList, that.list[index].list);
      } else {
        that.chooseList = that.chooseList.filter((o) => o.SupplierId !== that.list[index].SupplierId);
      }
    },
    //全选
    onAll() {
      let that = this;
      that.isAll = !that.isAll;
      that.list.forEach((o) => {
        o.isIcon = that.isAll;
        o.list.forEach((p) => {
          p.isIcon = that.isAll;
        });
      });
      if (that.isAll) {
        that.chooseList = that.list.map((i) => i.list);
        that.chooseList = that._.flatten(that.chooseList);
      } else {
        that.chooseList = [];
      }
    },
    onItem(index) {
      let that = this;
      that.$router.push("/classify/info?Id=" + that.list[index].Id + "&num=" + that.list[index].num);
    },
    onSupplier(index) {
      let that = this;
      that.$router.push("/classify/detail?supplierId=" + that.list[index].SupplierId + "&name=" + that.list[index].SupplierName);
    },
    async inputNum(index, productIndex) {
      let that = this;
      let list = that.list[index].list;
      list[productIndex].num = list[productIndex].num.replace(/[^\d]/g, "") - 0;
      that.$forceUpdate();
      if (list[productIndex].num <= list[productIndex].LimitOrderNum) {
        that.$pc.toast("当前商品的数量不能低于" + list[productIndex].LimitOrderNum);
        list[productIndex].num = list[productIndex].LimitOrderNum;
        return;
      }
      if (list[productIndex].num % list[productIndex].StepUnitQty !== 0) {
        that.$pc.toast("当前商品的数量应该为起订量的倍数");
      }
      list[productIndex].num = Math.ceil(list[productIndex].num / list[productIndex].StepUnitQty) * list[productIndex].StepUnitQty;
      // let list = that.list.filter((o) => o.isIcon);
      if (list[productIndex].isIcon) {
        let { data, success, message } = await that.$api.pc["shoppingCar/UpdateShoppingCarItem"]({
          storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
          itemId: list[productIndex].ItemId,
          qty: list[productIndex].num,
        });
        // that.$store.commit("shoppingCar", { list: list });
      }
    },
    async onAdd(index, productIndex) {
      let that = this;
      let list = that.list[index].list;
      list[productIndex].num += list[productIndex].StepUnitQty;
      if (list[productIndex].isIcon) {
        let { data, success, message } = await that.$api.pc["shoppingCar/UpdateShoppingCarItem"]({
          storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
          itemId: list[productIndex].ItemId,
          qty: list[productIndex].num,
        });
      }
    },
    async onReduce(index, productIndex) {
      let that = this;
      let list = that.list[index].list;
      if (list[productIndex].num <= list[productIndex].LimitOrderNum) {
        that.$pc.toast("当前商品的数量不能低于" + list[productIndex].LimitOrderNum);
      } else {
        list[productIndex].num -= list[productIndex].StepUnitQty;
        if (list[productIndex].isIcon) {
          let { data, success, message } = await that.$api.pc["shoppingCar/UpdateShoppingCarItem"]({
            storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
            itemId: list[productIndex].ItemId,
            qty: list[productIndex].num,
          });
        }
      }
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


