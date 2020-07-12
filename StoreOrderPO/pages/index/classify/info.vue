<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-info {
  background: $backgroundColor;
  .pc-info__title {
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
  .pc-info__main {
    height: calc(100vh - #{rsh(170)});
    overflow-y: auto;
    .pc-info__img {
      width: 100vw;
      height: rsh(360);
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > i {
        width: rsh(320);
        height: rsh(320);
        margin-top: rsh(20);
      }
    }
    .pc-info__detail {
      width: 100vw;
      background: #fff;
      display: flex;
      flex-direction: column;
      margin-top: rsh(20);
      padding-bottom: rsh(20);
      & > span {
        margin: rsh(20) 0 0 rsh(30);
      }
    }
    .pc-info__standard {
      width: 100vw;
      background: #fff;
      padding-bottom: rsh(20);
      display: flex;
      flex-direction: column;
      margin-top: rsh(20);
      & > div {
        margin: rsh(20) 0 0 rsh(30);
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
    .pc-info__sale {
      display: flex;
      flex-direction: column;
      width: 100vw;
      background: #fff;
      margin: rsh(20) 0;
      padding-bottom: rsh(20);
      & > span {
        padding: rsh(20) rsh(30);
      }
      & > div {
        width: rsh(690);
        height: rsh(120);
        display: flex;
        flex-direction: row;
        margin-left: rsh(30);
        font-size: rsh(28);
        border: 1px solid #999999;
        & > div {
          width: 25%;
          height: rsh(120);
          display: flex;
          flex-direction: column;
          & > span {
            width: 100%;
            &:first-of-type {
              height: rsh(60);
              text-align: center;
              line-height: rsh(60);
              background: $mainColor;
              color: #fff;
              position: relative;
              &::after {
                content: "";
                position: absolute;
                right: 0;
                top: rsh(5);
                height: rsh(50);
                width: 1px;
                transform: scale(0.5, 1);
                background: #fff;
              }
            }
            &:last-of-type {
              font-size: rsh(24);
              height: rsh(60);
              text-align: center;
              line-height: rsh(60);
            }
          }
        }
      }
    }
    .pc-info__price {
      display: flex;
      flex-direction: column;
      width: 100vw;
      background: #fff;
      padding-bottom: rsh(20);
      margin-bottom: rsh(20);
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
            background: #999999;
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
  }
  .pc-info__bottom {
    width: 100vw;
    height: rsh(90);
    background: #fff;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & > div {
      width: rsh(170);
      height: rsh(50);
      border: 1px solid #d6d6d6;
      border-radius: rsh(2);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-left: rsh(20);
      & > span {
        width: 25%;
        height: rsh(40);
        line-height: rsh(40);
        text-align: center;
        &:first-of-type {
          border-right: 1px solid #d6d6d6;
        }
        &:last-of-type {
          border-left: 1px solid #d6d6d6;
        }
      }
      & > input {
        width: 50%;
        border: none;
        outline: none;
        text-align: center;
      }
    }
    & > span {
      width: rsh(200);
      height: rsh(90);
      line-height: rsh(90);
      text-align: center;
      color: #fff;
      font-size: rsh(30);
      background: red;
    }
  }
}
</style>
<template>
  <div class="pc-info" v-if="detail.Item">
    <div class="pc-info__title">
      <i class="icons-common-arrow-left-outer" @click="$router.go(-1)">
        <div class="icons-common icons-common-arrow-left-inner"></div>
      </i>
      <span>商品详情</span>
    </div>
    <div class="pc-info__main">
      <div class="pc-info__img">
        <i class="lazy-load">
          <img v-lazy="detail.Item.ImgUrl" class="lazy-contain">
        </i>
      </div>
      <div class="pc-info__detail">
        <span>商品名称：{{detail.Item.Name}}</span>
        <span>商品条码：{{detail.Item.Barcode}}</span>
        <span>商品库存：{{detail.Item.StockQty}}</span>
        <span v-if="!detail.Item.SupplierId" style="fontSize:10px;color:red">该商品暂未分配供应商</span>
      </div>
      <div class="pc-info__standard">
        <div class="pc-info__standard__item">
          <i class="icons-common-annotation-outer">
            <div class="icons-common icons-common-annotation-inner"></div>
          </i>
          <span>单位：{{detail.Item.Unit}}</span>
        </div>
        <!-- <div class="pc-info__standard__item">
        <i class="icons-common-annotation-outer">
          <div class="icons-common icons-common-annotation-inner"></div>
        </i>
        <span>是否可退：不可退</span>
        </div>-->
        <div class="pc-info__standard__item">
          <i class="icons-common-annotation-outer">
            <div class="icons-common icons-common-annotation-inner"></div>
          </i>
          <span>规格：{{detail.Item.Size}}</span>
        </div>
        <div class="pc-info__standard__item">
          <i class="icons-common-annotation-outer">
            <div class="icons-common icons-common-annotation-inner"></div>
          </i>
          <span>整件包装：{{detail.Item.Package}}</span>
        </div>
      </div>
      <div class="pc-info__sale">
        <span>销售汇总</span>
        <div>
          <div>
            <span>前一周销量</span>
            <span>{{detail.SalesNum01}}</span>
          </div>
          <div>
            <span>前二周销量</span>
            <span>{{detail.SalesNum02}}</span>
          </div>
          <div>
            <span>前三周销量</span>
            <span>{{detail.SalesNum03}}</span>
          </div>
          <div>
            <span>在途数量</span>
            <span>{{detail.CountByPODetailForNoDone}}</span>
          </div>
        </div>
      </div>
      <div class="pc-info__price">
        <span>阶梯价格</span>
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
      <button class="pc-btn" v-xy-moving-btn style="color:#fff" @click="onBtn()">查看该供应商商品</button>
    </div>
    <div class="pc-info__bottom" v-if="detail.Item.SupplierId">
      <div>
        <span @click="onReduce()">-</span>
        <input pattern="\d*" v-model="num" @change="inputNum()">
        <!-- <span>{{detail.Item.num?detail.Item.num:num}}</span> -->
        <span @click="onAdd()">+</span>
      </div>
      <span @click="onShoppingCar()">加入采购车</span>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      num: 1,
      detail: {},
    };
  },
  methods: {
    async loadAll() {
      let that = this;
      let Id = that.$route.query.Id;
      await that.getInfo(Id);
      that.num = that.$route.query.num ? that.$route.query.num - 0 : that.detail.Item.num ? that.detail.Item.num : that.detail.Item.StepUnitQty;
    },
    //获取商品
    async getInfo(Id) {
      let that = this;
      let { data, message, success } = await that.$api.pc["common/FindItemDetailByStoreItemId"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        storeItemId: Id,
        etpCode: that.$store.state.storeListInfo_pc.storeInfo.EnterpriseCode,
      });
      if (success && data.Item) {
        that.detail = data;
      }
    },
    onBtn(){
      let that = this;
      that.$router.push('/classify/detail?supplierId='+that.detail.SupplierInfo.Id+'&name='+that.detail.SupplierInfo.Name)
    },
    //加入购物车
   async onShoppingCar() {
      let that = this;
      if (that.num !== 0) {
         let { data, success, message } = await that.$api.pc["shoppingCar/UpdateShoppingCarItem"]({
        storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
        itemId: that.detail.Item.ItemId,
        qty: that.num,
      });
        that.$router.replace("/home");
      } else {
        that.$pc.toast("商品数量不能为0");
      }
    },
    async inputNum(index) {
      let that = this;
      that.num=that.num.replace(/[^\d]/g,'') - 0;
      if (that.num <= that.detail.Item.LimitOrderNum) {
        that.$pc.toast("当前商品的数量不能低于" + that.detail.Item.LimitOrderNum);
        that.num = that.detail.Item.LimitOrderNum;
        return;
      }
      if (that.num % that.detail.Item.StepUnitQty !== 0) {
        that.$pc.toast("当前商品的数量应该为起订量的倍数");
      }
      that.num = Math.ceil(that.num / that.detail.Item.StepUnitQty) * that.detail.Item.StepUnitQty;
      let { data, success, message } = await that.$api.pc["shoppingCar/UpdateShoppingCarItem"]({
        storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
        itemId: that.detail.Item.ItemId,
        qty: that.num,
      });
    },
    async onAdd(index) {
      let that = this;
      that.num += that.detail.Item.StepUnitQty;
      let { data, success, message } = await that.$api.pc["shoppingCar/UpdateShoppingCarItem"]({
        storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
        itemId: that.detail.Item.ItemId,
        qty: that.num,
      });
    },
    async onReduce(index) {
      let that = this;
      if (that.num <= that.detail.Item.LimitOrderNum) {
        that.$pc.toast("当前商品的数量不能低于" + that.detail.Item.LimitOrderNum);
      } else {
        that.num -= that.detail.Item.StepUnitQty;
        let { data, success, message } = await that.$api.pc["shoppingCar/UpdateShoppingCarItem"]({
          storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
          itemId: that.detail.Item.ItemId,
          qty: that.num,
        });
      }
      // that.num === 0 ? "" : that.num--;
    },
  },
  created() {
    let that = this;
    that.loadAll();
  },
};
</script>


