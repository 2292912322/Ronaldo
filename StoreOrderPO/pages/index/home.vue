<style lang="scss">
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
.pc-home {
  background: #f4f4f4;
  .pc-home__topBar {
    width: 100vw;
    height: rsh(110);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: relative;
    background: #fff;
    & > div {
      width: rsh(530);
      height: rsh(70);
      border-radius: rsh(40);
      border: 1px solid $mainColor;
      display: flex;
      flex-direction: row;
      align-items: center;
      background: #fff;
      & > i {
        margin: 0 rsh(10) 0 rsh(20);
      }
      & > input {
        flex-grow: 1;
        flex-shrink: 1;
        height: rsh(60);
        width: rsh(150);
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
        border-radius: rsh(40);
      }
    }
  }
  .pc-home__title {
    width: 100vw;
    height: rsh(80);
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: rsh(10);
    position: relative;
    & > span {
      height: rsh(80);
      line-height: rsh(80);
    }
    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: $mainColor;
      & > i {
        margin-left: rsh(10);
      }
    }
    .pc-home__title--active {
      color: $batteryRed;
      border-bottom: 2px solid $batteryRed;
    }
  }
  .pc-home__list {
    height: calc(100vh - #{rsh(322)});
    .pc-home__main__list__item--disable {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
      }
    }
  }
  .pc-home__main {
    display: flex;
    flex-direction: column;

    .scroller-contain {
      width: 100vw;
      height: calc(100vh - #{rsh(322)});
      position: relative;
    }
  }
}
</style>
<template>
  <div class="pc-home">
    <div class="pc-home__topBar">
      <i class="icons-common-scan-outer" @click="onScan()">
        <div class="icons-common icons-common-scan-inner"></div>
      </i>
      <div>
        <i class="icons-common-search-outer">
          <div class="icons-common icons-common-search-inner"></div>
        </i>
        <input type="text" placeholder="输入商品名称" v-model.trim="search">
        <span @click="onSearch()">搜索</span>
      </div>
      <i class="icons-common-shopping-car-outer" @click="$router.push('/shoppingCar')">
        <div class="icons-common icons-common-shopping-car-inner"></div>
      </i>
    </div>
    <div class="pc-home__title">
      <span :class="{'pc-home__title--active':isTitle}" @click="onTitle('hot')">爆品推荐</span>
      <span :class="{'pc-home__title--active':!isTitle}" @click="onTitle('history')">历史购买</span>
      <div @click="$router.push('/classify')">
        <span>更多分类</span>
        <i class="icons-common-arrow-right-outer">
          <div class="icons-common icons-common-arrow-right-inner"></div>
        </i>
      </div>
    </div>
    <div class="pc-home__list pc-list">
      <scroller :on-infinite="infinite" :noDataText="noDataText" ref="scroller">
        <div
          class="pc-item"
          v-for="(item,index) in list"
          :key="index"
          @click="onItem(index)"
          :class="{'pc-home__main__list__item--disable':!item.SupplierId}"
        >
          <i class="lazy-load">
            <img v-lazy="item.ImgUrl" class="lazy-contain">
          </i>
          <div>
            <span class="ellipsis">{{item.Name}}</span>
            <span>{{item.Barcode}}</span>
            <!-- <span>{{item.Size}}</span> -->
            <span style="color:red">￥{{item.OfferPrice | pcNumToFixed3}} {{item.Size}}</span>
            <span v-show="!item.SupplierId" style="fontSize:10px;color:red">该商品暂未分配供应商</span>
          </div>
          <div v-if="item.SupplierId" @click.stop class="pc-list__item--input">
            <i
              :class="`icons-common-choose${item.isIcon? 'd':''}-outer`"
              @click.stop="onIcon(index)"
            >
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
        <span
          v-if="list.length===0"
          style="min-height: 80vh;display: flex;margin-top:50vw;justify-content: center;font-size: 5.06667vw;"
        >暂无数据</span>
      </scroller>
    </div>
  </div>
</template>

<script>
import wxMixin from "~/mixins/wx-mixin";
import auth from "~/mixins/auth";
export default {
  mixins: [auth, wxMixin],
  data() {
    return {
      num: 1,
      isIcon: false,
      isTitle: true,
      list: [],
      search: "",
      startLoad: false,
      shoppingCarlist: [],
      lastCreateDate: "",
      isLoadOver: false,
      noDataText: "被你发现我的底线了~",
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
      await that.getShoppingCarList();
      await that.getHot();
    },
    async infinite(done) {
      let that = this;
      if (that.isLoadOver) {
        done(true);
        return;
      }
      await that.getHot();
      done();
    },
    onTitle(title) {
      let that = this;
      that.list = [];
      that.isTitle = !that.isTitle;
      that.isLoadOver = false;
      if (title == "hot") {
        that.getHot();
      } else {
        that.getHistory();
      }
    },
    onItem(index) {
      let that = this;
      that.$router.push("/classify/info?Id=" + that.list[index].Id + "&num=" + that.list[index].num);
    },
    //获取爆品推荐商品
    async getHot() {
      let that = this;
      let lastCreateDate = that.list.length == 0 ? that.lastCreateDate : that.list[that.list.length - 1].CreateDate.replace("T", " ");
      let { data, message, success } = await that.$api.pc["common/FindItemByHotSales"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        etpCode: that.$store.state.storeListInfo_pc.storeInfo.EnterpriseCode,
        lastCreateDate: lastCreateDate,
        top: 10,
      });
      if (success) {
        if (data.length != 10) {
          that.isLoadOver = true;
        }
        that.list = that._.concat(that.list, data);
      }
      that.list.forEach((o) => {
        o.num = o.LimitOrderNum;
        o.isIcon = false;
        // o.ImgUrl = o.ImgUrl ? o.ImgUrl : require("~/assets/imgs/drink.jpg");
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
    //获取历史商品
    async getHistory() {
      let that = this;
      let { data, message, success } = await that.$api.pc["common/FindItemByHistory"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        etpCode: that.$store.state.storeListInfo_pc.storeInfo.EnterpriseCode,
      });
      // if (data.length != 10) {
      //   that.isLoadOver = true;
      // }
      // that.list = that._.concat(that.list, data);
      that.list = data;
      that.list.forEach((o) => {
        o.num = o.LimitOrderNum;
        o.isIcon = false;
        // o.ImgUrl = o.ImgUrl ? o.ImgUrl : require("~/assets/imgs/drink.jpg");
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
      // let list = that.list.filter((o) => o.isIcon);
      if (that.list[index].isIcon) {
        let { data, success, message } = await that.$api.pc["shoppingCar/UpdateShoppingCarItem"]({
          storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
          itemId: that.list[index].ItemId,
          qty: that.list[index].num,
        });
        // that.$store.commit("shoppingCar", { list: list });
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
      // let list = that.list.filter((o) => o.isIcon);
      // if (that.list[index].isIcon) {
      //   that.$store.commit("shoppingCar", { list: list });
      // }
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

      // if (that.list[index].isIcon) {
      //   let list = that.list.filter((o) => o.isIcon);
      //   that.$store.commit("shoppingCar", { list: list });
      // }
      that.$forceUpdate();
    },
    async onIcon(index) {
      let that = this;
      if (that.list[index].num !== 0) {
        that.list[index].isIcon = !that.list[index].isIcon;
        // let list = that.$store.state.shoppingCar ? that._.cloneDeep(that.$store.state.shoppingCar.list) : [];
        if (that.list[index].isIcon) {
          let { data, success, message } = await that.$api.pc["shoppingCar/UpdateShoppingCarItem"]({
            storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
            itemId: that.list[index].ItemId,
            qty: that.list[index].num,
          });
          // list.push(that.list[index]);
          // that.$store.commit("shoppingCar", { list: list });
        } else {
          let res = await that.$api.pc["shoppingCar/DeleteShoppingCarItem"]({
            storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
            itemId: JSON.stringify([that.list[index].ItemId]),
          });
          // list = that._.filter(list, (o) => o.Id !== that.list[index].Id);
          // that.$store.commit("shoppingCar", { list: list });
        }
        that.$forceUpdate();
      } else {
        that.$pc.toast("商品数量不能为0");
      }
    },
    async onSearch() {
      let that = this;
      that.isLoadOver = true;
      // if (!that.search) return false;
      let { data, message, success } = await that.$api.pc["common/FindItemBySearchKey"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        etpCode: that.$store.state.storeListInfo_pc.storeInfo.EnterpriseCode,
        searchKey: that.search,
      });
      if (success) {
        that.list = data;
        that.$pc.toast(message);
      }
      that.list.forEach((o) => {
        o.num = o.LimitOrderNum;
        o.isIcon = false;
        // o.ImgUrl = o.ImgUrl ? o.ImgUrl : require("~/assets/imgs/drink.jpg");
      });
      let list = that._.cloneDeep(that.$store.state.shoppingCar.list);
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
          that.list = data;
          that.list.forEach((o) => {
            o.num = o.LimitOrderNum;
            o.isIcon = false;
          });
          let list = that._.cloneDeep(that.$store.state.shoppingCar.list);
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
        fail: function(res) {
          that.$pc.alert(res);
        },
      });
    },
  },
  async created() {
    let that = this;
    that.lastCreateDate = that.$moment().format("YYYY-MM-DD HH:mm:ss");
    // 需要授权才可以加载的数据(授权比页面装载慢)
    if (that.$store.state.wxAuthStatus && !that.startLoad) {
      that.startLoad = true;
      await that.loadAll();
    }
    if (that.$route.query.status) {
      if (that.$route.query.status == 1) {
        that.$pc.alert("充值成功");
      } else {
        that.$pc.alert("充值失败");
      }
    }
  },
  mounted() {
    let that = this;
  },
};
</script>


