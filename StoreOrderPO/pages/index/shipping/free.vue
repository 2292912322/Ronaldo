<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-free {
  background: $backgroundColor;
  .pc-free__title {
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
  .pc-free__topBar {
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
  .pc-free__list {
    height: calc(100vh - 50vw);
    overflow-y: auto;
    position: relative;
    & > span {
      font-size: rsh(38);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .pc-free__list__item {
      width: 100vw;
      background: #fff;
      height: rsh(160);
      display: flex;
      flex-direction: row;
      position: relative;
      margin-top: rsh(20);
      & > i {
        margin: rsh(10) rsh(20);
        height: rsh(140);
        width: rsh(140);
      }
      .pc-free__list__item__detail {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        & > span {
          margin: rsh(10) 0;
        }
      }
      .pc-free__list__item__num {
        display: flex;
        flex-direction: column;
        height: rsh(180);
        justify-content: space-around;
        margin-right: rsh(20);
        & > span {
          &:first-of-type {
            text-align: right;
          }
          &:last-of-type {
            color: $mainColor;
          }
          & > input {
            width: 2em;
            height: 1.5em;
            line-height: 1.5em;
            text-align: center;
            &:focus {
              outline: none;
            }
          }
        }
      }
    }
  }
  .pc-free__btn {
    margin-top: rsh(100);
  }
}
</style>
<template>
  <div class="pc-free">
    <div class="pc-free__title">
      <i class="icons-common-arrow-left-outer" @click="$router.go(-1)">
        <div class="icons-common icons-common-arrow-left-inner"></div>
      </i>
      <span>添加赠品</span>
    </div>
    <div class="pc-free__topBar">
      <div>
        <i class="icons-common-search-outer">
          <div class="icons-common icons-common-search-inner"></div>
        </i>
        <input type="text" placeholder="输入商品名称" v-model="barcode">
        <span @click="onSearch()">搜索</span>
      </div>
      <i class="icons-common-scan-outer">
        <div class="icons-common icons-common-scan-inner"></div>
      </i>
    </div>
    <div class="pc-free__list">
      <div class="pc-free__list__item" v-for="(o,index) in productList" :key="o.Id">
        <i class="lazy-load">
          <img v-lazy="o.ImgUrl" class="lazy-contain">
        </i>
        <div class="pc-free__list__item__detail">
          <span>{{o.Name}}</span>
          <span>{{o.Barcode}}</span>
          <span>{{o.Size}}</span>
        </div>
        <div class="pc-free__list__item__num">
          <span @click="onDelate(index)">删除</span>
          <span>
            数量：
            <input type="number" v-model="o.num"  @change="o.num=o.num.replace(/[^\d]/g,'') - 0">
          </span>
        </div>
      </div>
      <span v-if="productList.length===0">暂无数据</span>
    </div>
    <div class="pc-btn pc-free__btn" @click="onSumbit()">提交</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isDetail: false,
      isMore: false,
      productList: [],
      barcode: "",
    };
  },
  methods: {
    async loadAll() {
      let that = this;
      // that.getList();
    },
    async onSearch() {
      let that = this;
      let { data, message, success } = await that.$api.pc["common/FindItemByBarcode"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        etpCode: that.$store.state.storeListInfo_pc.storeInfo.EnterpriseCode,
        barcode: that.barcode,
      });
      if (data.length > 0 && data[0].SupplierId) {
        that.productList.push(data[0]);
        that.productList.forEach((o) => {
          o.num = o.LimitOrderNum;
          // o.isIcon = false;
          // o.ImgUrl = o.ImgUrl ? o.ImgUrl : require("~/assets/imgs/drink.jpg");
        });
      } else {
        that.$pc.toast("该商品没有绑定供应商,无法添加");
      }
    },
    onSumbit() {
      let that = this;
      let PoDetail = JSON.parse(sessionStorage.PoDetail);
      PoDetail.FreeProductList = that.productList;
      sessionStorage.PoDetail = JSON.stringify(PoDetail);
      that.$router.replace("/shipping/detail");
      // that.productList
    },
    onDelete(index) {
      let that = this;
      that.productList.splice(index, 1);
    },
  },
  async created() {
    let that = this;
    that.loadAll();
    // console.log(that.$moment().format('YYYY-MM-DD HH:mm:ss'))
  },
};
</script>


