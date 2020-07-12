<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-shipping-detail {
  background: $backgroundColor;
  .pc-shipping-detail__title {
    width: 100vw;
    height: rsh(80);
    line-height: rsh(80);
    color: #fff;
    font-size: rsh(28);
    display: flex;
    flex-direction: row;
    align-items: center;
    background: $mainColor;
    & > i {
      margin-left: rsh(28);
      margin-right: rsh(260);
    }
  }
  .pc-shipping-detail__main {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > span {
      width: rsh(710);
      margin: rsh(8) 0;
    }
    .pc-shipping-detail__main__list {
      height: calc(100vh - #{rsh(540)});
    }
  }
  .pc-shipping-detail__bottom {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: rsh(100);
    display: flex;
    flex-direction: row;
    & > span {
      width: 50%;
      height: rsh(100);
      line-height: rsh(100);
      text-align: center;
      background: $mainColor;
      color: #fff;
      font-size: rsh(40);
    }
  }
  .pc-shipping-detail__box {
    width: rsh(690);
    height: rsh(600);
    background: #fff;
    border-radius: rsh(10);
    margin: rsh(270) rsh(30);
    & > h2 {
      text-align: center;
      line-height: rsh(100);
    }
    .pc-shipping-detail__box__main {
      height: rsh(400);
      display: flex;
      flex-direction: column;
      font-size: rsh(36);
      & > span {
        margin: rsh(20) 0 0 rsh(40);
      }
    }
    .pc-shipping-detail__box__btn {
      width: 100%;
      height: rsh(100);
      display: flex;
      color: #fff;
      & > span {
        width: 50%;
        height: rsh(102);
        text-align: center;
        line-height: rsh(100);
        background: $mainColor;
      }
    }
    .pc-shipping-detail__bottom--static {
      position: static !important;
    }
  }
}
._popup__title {
  background: #fff;
  display: flex;
  height: rsh(100);
  line-height: rsh(100);
  align-items: center;
  font-size: rsh(38);
  & > i {
    margin: 0 rsh(160) 0 rsh(30);
  }
}
.popup__main {
  width: 100vw;
  height: rsh(650);
  background: #fff;
  .popup__main__item {
    height: rsh(150);
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    & > i {
      margin: rsh(30);
    }
    & > span {
      width: 80vw;
    }
  }
}
.popup__bottom {
  width: 100vw;
  height: rsh(100);
  border-top: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  & > div {
    width: rsh(200);
    text-align: center;
    height: rsh(100);
    line-height: rsh(100);
    color: #fff;
    background: red;
  }
}
</style>
<template>
  <div class="pc-shipping-detail">
    <div class="pc-shipping-detail__title">
      <i class="icons-common-arrow-left-outer" @click="$router.go(-1)">
        <div class="icons-common icons-common-arrow-left-inner"></div>
      </i>
      <span>{{detail.poType == 0 ? '采购单收货': detail.poType == 3 ? '赠品收货':'换货单收货'}}明细</span>
    </div>
    <div
      class="pc-shipping-detail__main pc-shipping-detail__list--active"
      v-if="detail.SupplierStorePO"
    >
      <span>采购单号：{{detail.SupplierStorePO.PONumber}}</span>
      <span>订单时间：{{detail.SupplierStorePO.CreateDate.split('T')[0]}}</span>
      <span v-if="detail.poType != 3">供 应 商：{{detail.SupplierStorePO.SupplierName}}</span>
      <span>
        状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：
        <span
          style="color:#148482"
        >{{detail.SupplierStorePO.ConfirmedStatus==30?'未确定':detail.SupplierStorePO.ShipmentStatus == 0?'待发货':detail.SupplierStorePO.ShipmentStatus == 1?'待收货':'已收货'}}</span>
      </span>
      <span v-if="detail.poType == 0">
        订单金额：
        <span style="color:red">￥{{detail.SupplierStorePO.TtlAmount |pcNumFormat}}</span>
      </span>
      <span v-if="detail.poType == 0">
        实付金额：
        <span style="color:red">￥{{detail.SupplierStorePO.TtlAmount |pcNumFormat}}</span>
      </span>
      <div class="pc-shipping-detail__main__list pc-list">
        <div class="pc-list__item" v-for="o in detail.SupplierStorePODetail" :key="o.Id">
          <i class="lazy-load">
            <img v-lazy="o.ImgUrl" class="lazy-contain">
          </i>
          <div>
            <span class="ellipsis">{{o.ItemName}}</span>
            <span>{{o.ItemBarcode}}</span>
            <span style="color:red">￥{{o.OfferPrice |pcNumToFixed3}} {{o.Size}}</span>
          </div>
          <div>
            <span>数量：{{detail.poType != 3 ? o.Qty :o.ReceivedQty}}</span>
            <span v-if="detail.poType != 3" class="pc-list__item--input">
              <span>实收：</span>
              <input
                pattern="\d*"
                v-model="o.ReceivedQty"
                @change="o.ReceivedQty=o.ReceivedQty.replace(/[^\d]/g,'') - 0"
                @focus="isStatic=true"
                @blur="isStatic=false"
                v-if="detail.SupplierStorePO&&detail.SupplierStorePO.ShipmentStatus!=2"
              >
              <span v-else>{{o.ReceivedQty}}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="pc-shipping-detail__free" v-if="detail.poType ==3">
        <div class="pc-shipping-detail__free__title">
          <span>附属赠品</span>
          <span>以下是此采购单的赠品添加</span>
        </div>
        <div class="pc-shipping-detail__free__btn" @click="onAdd()">添加赠品</div>
        <div
          class="pc-shipping-detail__free__list"
          v-if="detail.FreeProductList&&detail.FreeProductList.length>0"
        >
          <div
            class="pc-shipping-detail__free__list__item"
            v-for="f in detail.FreeProductList"
            :key="f.Id"
          >
            <i class="lazy-load">
              <img v-lazy="f.ImgUrl" class="lazy-contain">
            </i>
            <div class="pc-shipping-detail__free__list__item__detail">
              <span>{{f.Name}}</span>
              <span>{{f.Barcode}}</span>
              <span>{{f.Size}}</span>
            </div>
            <div class="pc-shipping-detail__free__list__item__num">
              <span>数量：{{f.num}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pc-shipping-detail__bottom"
      ref="btn"
      :class="{'pc-shipping-detail__bottom--static':isStatic}"
      v-if="detail.SupplierStorePO&&detail.SupplierStorePO.ShipmentStatus!=2"
    >
      <span @click="onBack()">返回</span>
      <span style="background:red" @click="onShipping()">{{detail.poType == 0?'收货':'提交'}}</span>
    </div>
    <div class="mask" v-if="isPay">
      <div class="pc-shipping-detail__box">
        <h2>确定支付此订单?</h2>
        <div class="pc-shipping-detail__box__main">
          <span>收货单号：{{detail.SupplierStorePO.PONumber}}</span>
          <span>供 应 商：{{detail.SupplierStorePO.SupplierName}}</span>
          <span>
            实付金额：
            <span style="color:red">￥{{payDetail.ActAmount |pcNumFormat}}</span>
          </span>
        </div>
        <div class="pc-shipping-detail__box__btn">
          <span @click="onCancel()">取消</span>
          <span style="background:red" @click="onPayType()">支付</span>
        </div>
      </div>
    </div>
    <div v-transfer-dom>
      <popup v-model="isPayType" style="z-index:1001">
        <div class="_popup__title">
          <i class="icons-common-close-outer" @click="isPayType=false">
            <div class="icons-common icons-common-close-inner"></div>
          </i>
          <span>选择付款方式</span>
        </div>
        <div class="popup__main">
          <div class="popup__main__item">
            <i class="icons-common-wechat-outer">
              <div class="icons-common icons-common-wechat-inner"></div>
            </i>
            <span>微信支付</span>
            <i class="icons-common-check-outer">
              <div class="icons-common icons-common-check-inner"></div>
            </i>
          </div>
          <div class="popup__main__item">
            <i class="icons-common-credit-outer">
              <div class="icons-common icons-common-credit-inner"></div>
            </i>
            <span>额度支付</span>
            <i class="icons-common-check-outer">
              <div class="icons-common icons-common-check-inner"></div>
            </i>
          </div>
        </div>
        <div class="popup__bottom">
          <span>
            实付金额：
            <span style="color:red">￥{{payDetail.ActAmount |pcNumFormat}}</span>
          </span>
          <div @click="onPay()">立刻支付</div>
        </div>
      </popup>
    </div>
  </div>
</template>


<script>
import Popup from "~/node_modules/vux/src/components/popup";
import TransferDom from "~/node_modules/vux/src/directives/transfer-dom";
export default {
  components: {
    Popup,
  },
  directives: {
    TransferDom,
  },
  data() {
    return {
      isDetail: false,
      isMore: false,
      isPay: false,
      isPayType: false,
      detail: {},
      payDetail: {},
      isStatic: false,
    };
  },
  methods: {
    async loadAll() {
      let that = this;
      // that.detail = JSON.parse(sessionStorage.PoDetail);
      // that.detail.SupplierStorePODetail.forEach((o) => {
      //   o.ReceivedQty = o.Qty;
      // });
      let Id = that.$route.query.Id;
      let poType = that.$route.query.poType;
      let { data, message, success } = await that.$api.pc["shipping/FindSupplierStorePODetailByPOId"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        sStorePOId: Id,
      });
      if (success) {
        that.detail = data[0];
        that.detail.poType = poType;
      }
    },
    async onShipping() {
      let that = this;
      if (that.detail.poType == 0) {
        if (that.detail.SupplierStorePO.ConfirmedStatus != 30) {
          let pay = true;
          let list = that.detail.SupplierStorePODetail.map((o) => {
            if (o.ReceivedQty > o.Qty) pay = false;
            return { Id: o.Id, ReceivedQty: o.ReceivedQty };
          });
          if (pay) {
            let { data, message, success } = await that.$api.pc["shipping/ReceivingSupplierStorePO"]({
              storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
              sStorePOId: that.detail.SupplierStorePO.Id,
              itemList: JSON.stringify(list),
            });
            if (success) {
              // that.checkPayAuth();
              that.$pc.toast(message);
              sessionStorage.removeItem("PoDetail");
              that.$router.replace("/shipping");
            }
          } else {
            that.$pc.toast("商品的实收数量不能大于订单商品的数量");
          }
        } else {
          that.$pc.toast("该供应商未确定此采购单，无法收货");
        }
      } else if (that.detail.poType == 3) {
        let list = that.detail.FreeProductList.map((o) => {
          return { ItemId: o.Id, ItemCode: o.ItemCode, ItemName: o.Name, ItemBarcode: o.Barcode, Qty: o.num, Package: o.Package, Size: o.Size };
        });
        let { data, message, success } = await that.$api.pc["shipping/CreateSupplierStorePOBySalesGiftItem"]({
          storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
          remark: "",
          itemList: JSON.stringify(list),
          oldStorePOId: that.detail.SupplierStorePO.Id,
        });
        if (success) {
          that.$pc.toast(message);
          sessionStorage.removeItem("PoDetail");
          that.$router.replace("/exchange");
        }
      } else if (that.detail.poType == 2) {
        let list = that.detail.SupplierStorePODetail.map((o) => {
          return { Id: o.Id, ReceivedQty: o.ReceivedQty };
        });
        let { data, message, success } = await that.$api.pc["shipping/ReceivingSupplierStorePOByItemChangeItem"]({
          storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
          itemList: JSON.stringify(list),
          sStorePOId: that.detail.SupplierStorePO.Id,
        });
        if (success) {
          that.$pc.toast(message);
          sessionStorage.removeItem("PoDetail");
          that.$router.replace("/exchange");
        }
      }
    },
    async getPayDetail() {
      let that = this;
      let { data, message, success } = await that.$api.pc["pay/FindSupplierStorePOPaymentBossByStorePOId"]({
        sStorePOId: that.detail.SupplierStorePO.Id,
      });
      if (success) {
        that.payDetail = data;
      }
    },
    async checkPayAuth() {
      let that = this;
      let { data, message, success } = await that.$api.pc["pay/CheckAuthByPaymentBoss"]({
        storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
      });
      if (success) {
        await that.getPayDetail();
        that.isPay = true;
      }
    },
    onPayType() {
      let that = this;
      that.isPayType = true;
    },
    async onPay() {
      let that = this;
      let { data, message, success } = await that.$api.pc["pay/PaymentSupplierStorePO"]({
        storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
        sStorePOId: that.detail.SupplierStorePO.Id,
      });
      if (success) {
        that.$pc.toast(message);
        sessionStorage.removeItem("PoDetail");
        that.$router.replace("/shipping");
      }
    },
    onCancel() {
      let that = this;
      that.isPay = false;
      sessionStorage.removeItem("PoDetail");
      that.$router.push("/shipping");
    },
    onAdd() {
      let that = this;
      that.$router.push("/shipping/free");
    },
    onBack() {
      let that = this;
      sessionStorage.removeItem("PoDetail");
      that.$router.push("/shipping");
    },
  },
  async created() {
    let that = this;
    that.loadAll();
  },
};
</script>


