<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-exchange-detail {
  background: $backgroundColor;
  .pc-exchange-detail__title {
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
  .pc-exchange-detail__main {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > span {
      width: rsh(710);
      margin: rsh(8) 0;
    }
    .pc-exchange-detail__main__list {
      height: calc(100vh - #{rsh(540)});
    }
  }
}
</style>
<template>
  <div class="pc-exchange-detail">
    <div class="pc-exchange-detail__title">
      <i class="icons-common-arrow-left-outer" @click="$router.go(-1)">
        <div class="icons-common icons-common-arrow-left-inner"></div>
      </i>
      <span>退货单明细</span>
    </div>
    <div class="pc-exchange-detail__main pc-exchange-detail__list--active">
      <span>采购单号：{{detail.SupplierStorePO.PONumber}}</span>
      <span>订单时间：{{detail.SupplierStorePO.CreateDate.split('T')[0]}}</span>
      <span>供 应 商：{{detail.SupplierStorePO.SupplierName}}</span>
      <span>
        状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：
        <span
          style="color:#148482"
        >{{detail.SupplierStorePO.ShipmentStatus==2?'已确认':'未确认'}}</span>
      </span>
      <span>
        订单金额：
        <span style="color:red">￥{{detail.SupplierStorePO.TtlAmount |pcNumFormat}}</span>
      </span>
      <span>
        实付金额：
        <span style="color:red">￥{{detail.SupplierStorePO.TtlAmount |pcNumFormat}}</span>
      </span>
      <div class="pc-exchange-detail__main__list pc-list">
        <div v-for="o in detail.SupplierStorePODetail" :key="o.Id">
          <!-- <i :class="`icons-common-choose${o.isChange? 'd':''}-outer`" v-if="o.Status!=1" @click="onItem(o,i)">
                                    <div
                                        :class="`icons-common icons-common-choose${o.isChange? 'd':''}-inner`"
                                    ></div>
          </i>-->

          <i class="lazy-load">
            <img v-lazy="o.ImgUrl" class="lazy-contain">
          </i>
          <div>
            <span class="ellipsis">{{o.ItemName}}</span>
            <span>{{o.ItemBarcode}}</span>
            <span style="color:red">￥{{o.OfferPrice |pcNumToFixed3}} {{o.Size}}</span>
            <span v-if="o.Status==1" style="color:red;fontSize:12px">该商品已换货</span>
          </div>
          <div>
            <!-- <span>数量：{{o.Qty}}</span> -->
            <span style="color:#148482">实收：{{o.ReceivedQty}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pc-btn pc-exchange__btn" @click="onChange()">确认</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      detail: {},
    };
  },
  methods: {
    loadAll() {
      let that = this;
      that.detail = JSON.parse(sessionStorage.changeDetail);
      that.detail.SupplierStorePODetail.forEach((o) => {
        o.isChange = false;
      });
      that.detail.ChangeProductList = [];
    },
    onItem(item, index) {
      let that = this;
      that.detail.SupplierStorePODetail[index].isChange = !that.detail.SupplierStorePODetail[index].isChange;
      let isChange = that.detail.SupplierStorePODetail[index].isChange;
      if (isChange) {
        that.detail.ChangeProductList.push(item);
      } else {
        that.detail.ChangeProductList = that._.filter(that.detail.ChangeProductList, (o) => o.Id !== item.Id);
      }
      sessionStorage.changeDetail = JSON.stringify(that.detail);
      that.$forceUpdate();
    },
    async onChange() {
      let that = this;
      // if (that.detail.ChangeProductList.length != 0) {
      //   that.$router.push("/exchange/change");
      // } else {
      //   that.$pc.toast("请选择申请换货的商品");
      // }
      let { data, message, success } = await that.$api.pc["shipping/ReceivingSupplierStorePOByRefund"]({
        storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
        sStorePOId: that.detail.SupplierStorePO.Id,
      });
      if (success) {
        that.$pc.toast(message);
        sessionStorage.removeItem("changeDetail");
        that.$router.replace("/exchange");
      }
    },
    onBack() {
      let that = this;
      sessionStorage.removeItem("changeDetail");
      that.$router.push("/exchange");
    },
  },
  async created() {
    let that = this;
    that.loadAll();
  },
};
</script>


