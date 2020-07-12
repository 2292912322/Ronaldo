<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-exchange {
  background: $backgroundColor;
  .pc-exchange__topBar {
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
  .pc-exchange__list {
    height: calc(100vh - 32vw);
    overflow-y: auto;
    position: relative;
    & > span {
      font-size: rsh(38);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .pc-exchange__list__item {
      display: flex;
      flex-direction: column;
      background: #fff;
      padding-bottom: rsh(10);
      margin-bottom: rsh(20);
      & > div {
        margin: rsh(10) 0 0 rsh(25);
        display: flex;
      }
      .pc-exchange__list__item__icon {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: rsh(20);
        color: $mainColor;
        margin-right: rsh(20);
      }
      .pc-exchange__list__item__list {
        margin: 0;
        display: flex;
        flex-direction: column;
        background: $backgroundColor;
        .pc-exchange__list__item__list__item {
          width: 100vw;
          background: #fff;
          height: rsh(180);
          display: flex;
          flex-direction: row;
          margin-top: rsh(20);
          & > img {
            margin: rsh(10) 0;
            height: rsh(150);
          }
          .pc-exchange__list__item__list__item__detail {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            & > span {
              margin: rsh(10) 0;
            }
          }
          .pc-exchange__list__item__list__item__num {
            display: flex;
            flex-direction: column;
            height: rsh(180);
            justify-content: space-around;
            margin-right: rsh(20);
            & > span {
              &:first-of-type {
                color: red;
                border: 1px solid;
                border-radius: rsh(10);
              }
              &:last-of-type {
                color: $mainColor;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="pc-exchange">
    <div class="pc-exchange__topBar">
      <div>
        <i class="icons-common-search-outer">
          <div class="icons-common icons-common-search-inner"></div>
        </i>
        <input type="text" placeholder="输入商品名称">
        <span>搜索</span>
      </div>
      <i class="icons-common-scan-outer">
        <div class="icons-common icons-common-scan-inner"></div>
      </i>
    </div>
    <div class="pc-exchange__list">
      <div
        class="pc-exchange__list__item"
        :class="{'pc-exchange__list--active':p.isMore}"
        v-for="(p,index) in list"
        :key="p.SupplierStorePO.PONumber"
      >
        <div>采购单号：{{p.SupplierStorePO.PONumber}}</div>
        <div>订单时间：{{p.SupplierStorePO.CreateDate.split('T')[0]}}</div>
        <div v-if="p.SupplierStorePO.POType == 0">供 应 商：{{p.SupplierStorePO.SupplierName}}</div>
        <div>订单类型：{{navType[p.SupplierStorePO.POType]}}</div>
        <div>
          状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：
          <span style="color:#148482; flex-grow:1;width:20px;">{{p.SupplierStorePO.ShipmentStatus==2?'已确认':'未确认'}}</span>
          <label
            class="pc-exchange__list__item__icon"
            @click="onMore(index)"
          >
            <span>更多</span>
            <i :class="`icons-common-arrow-${p.isMore ? 'up':'down'}-outer`">
              <div :class="`icons-common icons-common-arrow-${p.isMore ? 'up':'down'}-inner`"></div>
            </i>
          </label>
        </div>
        <!-- <div class="pc-exchange__list__item__list" v-if="p.isMore">
          <div
            class="pc-exchange__list__item__list__item"
            v-for="o in p.SupplierStorePODetail"
            :key="o.Id"
          >
            <img src="~assets/imgs/drink.jpg" alt="">
            <div class="pc-exchange__list__item__list__item__detail">
              <span>{{o.ItemName}}</span>
              <span>{{o.ItemBarcode}}</span>
              <span>{{o.Size}}</span>
            </div>
            <div class="pc-exchange__list__item__list__item__num">
              <span v-if="p.SupplierStorePO.POType == 0" @click="$router.push('/exchange/change')">申请换货</span>
              <span>数量：{{o.ReceivedQty}}</span>
            </div>
          </div>
        </div>-->
      </div>
      <span v-if="list.length===0">暂无数据</span>
    </div>
  </div>
</template>


<script>
import auth from "~/mixins/auth";
export default {
  mixins: [auth],
  data() {
    return {
      isDetail: false,
      isMore: false,
      list: [],
      navType: ["采购单", "退货单", "赠品单", "送货单", "换货单"],
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
      that.getList();
    },
    //获取列表
    async getList() {
      let that = this;
      let param = {
        IsPaymented: 1,
        POType: 1,
      };
      let { data, message, success } = await that.$api.pc["shipping/FindSupplierStorePOByQuery"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        param: JSON.stringify(param),
        top: 10,
        lastCreateDate: that.$moment().format("YYYY-MM-DD HH:mm:ss"), //小于的下单时间
      });
      if (success) {
        that.list = data;
        that.list.forEach((o) => {
          o.isDetail = false;
        });
      }
    },
    onMore(index) {
      let that = this;
      sessionStorage.changeDetail = JSON.stringify(that.list[index]);
      that.$router.push("/exchange/detail");
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
  },
};
</script>


