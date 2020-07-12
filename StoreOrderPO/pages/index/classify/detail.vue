<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-classify-detail {
  background: #f4f4f4;
  .pc-classify-detail__title {
    width: 100vw;
    height: rsh(80);
    line-height: rsh(80);
    color: #fff;
    font-size: rsh(28);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: $mainColor;
    position: relative;
    & > i {
      position: absolute;
      left: rsh(28);
    }
  }
  .pc-classify-detail__topBar {
    width: 100vw;
    height: rsh(110);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    & > div {
      width: rsh(620);
      height: rsh(70);
      border: 1px solid $mainColor;
      display: flex;
      flex-direction: row;
      align-items: center;
      background: #fff;
      & > i {
        margin: 0 rsh(10) 0 rsh(20);
      }
      & > input {
        flex: 1;
        height: rsh(60);
        line-height: rsh(60);
        border: none;
        &:focus {
          outline: none;
        }
      }
      & > span {
        width: rsh(130);
        height: rsh(70);
        font-size: rsh(30);
        color: #fff;
        background: $mainColor;
        text-align: center;
        line-height: rsh(70);
      }
    }
  }
  .pc-classify-detail__main__list {
    height: calc(100vh - #{rsh(190)});
  }
}
</style>
<template>
  <div class="pc-classify-detail">
    <div class="pc-classify-detail__title">
      <i class="icons-common-arrow-left-outer" @click="$router.go(-1)">
        <div class="icons-common icons-common-arrow-left-inner"></div>
      </i>
      <span>{{categoryName}}</span>
    </div>
    <div class="pc-classify-detail__topBar" v-if="$route.query.supplierId">
      <div>
        <i class="icons-common-search-outer">
          <div class="icons-common icons-common-search-inner"></div>
        </i>
        <input type="text" placeholder="输入商品名称" v-model.trim="search">
        <span @click="onSearch()">搜索</span>
      </div>
      <i class="icons-common-scan-outer" @click="onScan()">
        <div class="icons-common icons-common-scan-inner"></div>
      </i>
    </div>
    <div class="pc-classify-detail__main__list pc-list">
      <div
        class="pc-list__item"
        v-for="(item,index) in list"
        :key="item.Name"
        @click="onItem(index)"
      >
        <i class="lazy-load">
          <img v-lazy="item.ImgUrl" class="lazy-contain">
        </i>
        <div>
          <span class="ellipsis">{{item.Name}}</span>
          <span>{{item.Barcode}}</span>
          <span style="color:red">￥{{item.OfferPrice |pcNumToFixed3}} {{item.Size}}</span>
          <!-- <span>100ml</span> -->
        </div>
        <div @click.stop class="pc-list__item--input">
          <i :class="`icons-common-choose${item.isIcon? 'd':''}-outer`" @click="onIcon(index)">
            <div :class="`icons-common icons-common-choose${item.isIcon? 'd':''}-inner`"></div>
          </i>
          <div>
            <span @click.stop="onReduce(index)">-</span>
            <input pattern="[0-9]*" v-model="item.num" @change="inputNum(index)">
            <!-- <span>{{item.num}}</span> -->
            <span @click.stop="onAdd(index)">+</span>
          </div>
        </div>
      </div>
      <span v-if="list.length===0">暂无数据</span>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      num: 1,
      isIcon: false,
      list: [],
      categoryName: "",
      shoppingCarlist: [],
      search:''
    };
  },
  methods: {
    async loadAll() {
      let that = this;
      let Id = that.$route.query.Id ? that.$route.query.Id : that.$route.query.supplierId;
      that.categoryName = that.$route.query.name;
      await that.getShoppingCarList();
      if (that.$route.query.Id) {
        await that.getClassifyProduct(Id);
      } else {
        await that.getSupplierProductList(Id);
      }
    },
    //获取供应商商品列表
    async getSupplierProductList(Id) {
      let that = this;
      let { data, message, success } = await that.$api.pc["common/FindItemBySupplierId"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        etpCode: that.$store.state.storeListInfo_pc.storeInfo.EnterpriseCode,
        supplierId: Id,
      });
      that.list = data;
      that.list.forEach((o) => {
        o.num = o.LimitOrderNum;
        o.isIcon = false;
      });
      let list = that.shoppingCarlist;
      list.forEach((o) => {
        that.list.forEach((p) => {
          if (o.Id == p.Id) {
            p.isIcon = true;
            p.num = o.num;
          }
        });
      });
      that.$forceUpdate();
    },
    //获取分类商品列表
    async getClassifyProduct(Id) {
      let that = this;
      let { data, message, success } = await that.$api.pc["common/FindItemByCategoryId"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        etpCode: that.$store.state.storeListInfo_pc.storeInfo.EnterpriseCode,
        categoryId: Id,
      });
      that.list = data;
      that.list.forEach((o) => {
        o.num = o.LimitOrderNum;
        o.isIcon = false;
      });
      let list = that.shoppingCarlist;
      list.forEach((o) => {
        that.list.forEach((p) => {
          if (o.Id == p.Id) {
            p.isIcon = true;
            p.num = o.num;
          }
        });
      });
      that.$forceUpdate();
    },
    //获取购物车数据
    async getShoppingCarList() {
      let that = this;
      let { data, message, success } = await that.$api.pc["shoppingCar/GetShoppingCarItem"]({
        storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
      });
      if (success) {
        that.shoppingCarlist = data;
      }
    },
    onItem(index) {
      let that = this;
      that.$router.push("/classify/info?Id=" + that.list[index].Id);
    },
    async inputNum(index) {
      let that = this;
      that.list[index].num = that.list[index].num.replace(/[^\d]/g, "") - 0;
      that.$forceUpdate();
      if (that.list[index].num <= that.list[index].LimitOrderNum) {
        that.$pc.toast("当前商品的数量不能低于" + that.list[index].LimitOrderNum);
        that.list[index].num = that.list[index].LimitOrderNum;
        return;
      }
      if (that.list[index].num % that.list[index].StepUnitQty !== 0) {
        that.$pc.toast("当前商品的数量应该为起订量的倍数");
      }
      that.list[index].num = Math.ceil(that.list[index].num / that.list[index].StepUnitQty) * that.list[index].StepUnitQty;
      if (that.list[index].isIcon) {
        let { data, success, message } = await that.$api.pc["shoppingCar/UpdateShoppingCarItem"]({
          storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
          itemId: that.list[index].ItemId,
          qty: that.list[index].num,
        });
      }
    },
    async onAdd(index) {
      let that = this;
      that.list[index].num += that.list[index].StepUnitQty;
      if (that.list[index].isIcon) {
        let { data, success, message } = await that.$api.pc["shoppingCar/UpdateShoppingCarItem"]({
          storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
          itemId: that.list[index].ItemId,
          qty: that.list[index].num,
        });
      }
      that.$forceUpdate();
    },
    async onReduce(index) {
      let that = this;
      if (that.list[index].num <= that.list[index].LimitOrderNum) {
        that.$pc.toast("当前商品的数量不能低于" + that.list[index].LimitOrderNum);
      } else {
        that.list[index].num -= that.list[index].StepUnitQty;
        if (that.list[index].isIcon) {
          let { data, success, message } = await that.$api.pc["shoppingCar/UpdateShoppingCarItem"]({
            storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
            itemId: that.list[index].ItemId,
            qty: that.list[index].num,
          });
        }
      }
      that.$forceUpdate();
    },
    async onIcon(index) {
      let that = this;
      if (that.list[index].num !== 0) {
        that.list[index].isIcon = !that.list[index].isIcon;
        if (that.list[index].isIcon) {
          let { data, success, message } = await that.$api.pc["shoppingCar/UpdateShoppingCarItem"]({
            storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
            itemId: that.list[index].ItemId,
            qty: that.list[index].num,
          });
        } else {
          let res = await that.$api.pc["shoppingCar/DeleteShoppingCarItem"]({
            storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
            itemId: JSON.stringify([that.list[index].ItemId]),
          });
        }
        that.$forceUpdate();
      } else {
        that.$pc.toast("商品数量不能为0");
      }
    },
    async onSearch() {
      let that = this;
      // if (!that.search) return false;
      let { data, message, success } = await that.$api.pc["common/FindItemBySearchKey"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        etpCode: that.$store.state.storeListInfo_pc.storeInfo.EnterpriseCode,
        searchKey: that.search,
      });
      if (data.length > 0) {
        that.list = data.filter((e) => e.SupplierId === that.$route.query.supplierId);
        that.list.forEach((o) => {
          o.num = o.LimitOrderNum;
          o.isIcon = false;
        });
        let list = that.shoppingCarlist;
        list.forEach((o) => {
          that.list.forEach((p) => {
            if (o.Id == p.Id) {
              p.isIcon = true;
              p.num = o.num;
            }
          });
        });
      } else {
        that.$pc.toast("该供应商无相应的商品");
      }
    },
    onScan() {
      let that = this;
      wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: async function(res) {
          var result = res.resultStr.split(",")[1]; // 当needResult 为 1 时，扫码返回的结果
          // that.$pc.toast("扫描结果：" + result);
          if (!result) {
            that.$pc.toast("扫描失败，条形码为空");
            return;
          }
          let { data, message, success } = await that.$api.pc["common/FindItemByBarcode"]({
            storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
            etpCode: that.$store.state.storeListInfo_pc.storeInfo.EnterpriseCode,
            barcode: result,
          });
          if (data.length > 0) {
            that.list = data.filter((e) => e.SupplierId === that.$route.query.supplierId);
            that.list.forEach((o) => {
              o.num = o.LimitOrderNum;
              o.isIcon = false;
            });
            let list = that.shoppingCarlist;
            list.forEach((o) => {
              that.list.forEach((p) => {
                if (o.Id == p.Id) {
                  p.isIcon = true;
                  p.num = o.num;
                }
              });
            });
          } else {
            that.$pc.toast("该供应商无相应的商品");
          }
        },
        fail: function(res) {
          that.$pc.alert(res);
        },
      });
    },
  },
  created() {
    let that = this;
    that.loadAll();
  },
};
</script>


