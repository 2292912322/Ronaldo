<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-classify {
  display: flex;
  flex-direction: column;
  .pc-classify__title {
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
  .pc-classify__main {
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    height: rsh(100);
    .pc-classify__main__aside {
      width: rsh(200);
      color: $mainColor;
      background: #f4f4f4;
      display: flex;
      flex-direction: column;
      height: calc(100vh - #{rsh(80)});
      overflow-y: auto;
      .pc-classify__main__aside__item {
        height: rsh(100);
        line-height: rsh(100);
        margin-left: rsh(30);
        & > span {
          width: 5em;
          display: inline-block;
        }
      }
    }
    .pc-classify__main__content {
      flex-grow: 1;
      width: rsh(200);
      position: relative;
      .pc-classify__main__content__cell {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .pc-classify__main__content__item {
          width: 33.3%;
          height: rsh(210);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          & > i {
            height: rsh(150);
            width: rsh(150);
          }
          & > span {
            width: 100%;
            display: inline-block;
            text-align: center;
          }
        }
      }
      & > span {
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
<template>
  <div class="pc-classify">
    <div class="pc-classify__title">
      <i class="icons-common-arrow-left-outer" @click="$router.go(-1)">
        <div class="icons-common icons-common-arrow-left-inner"></div>
      </i>
      <span>更多分类</span>
    </div>
    <div class="pc-classify__main">
      <div class="pc-classify__main__aside">
        <div
          class="pc-classify__main__aside__item"
          v-for="(item,index) in categoryList"
          :key="item.ItemCode"
          :style="chooseCategory !== index ? 'color:black':''"
          @click="onCategory(index)"
        >
          <span class="ellipsis">{{item.Name}}</span>
        </div>
      </div>
      <div class="pc-classify__main__content">
        <div class="pc-classify__main__content__cell" v-if="product&&product.length!==0">
          <div
            class="pc-classify__main__content__item"
            v-for="(item,index) in product"
            :key="item.ItemCode"
            @click="onProduct(index)"
          >
            <i class="lazy-load">
              <img v-lazy="item.ImgUrl" class="lazy-contain">
            </i>
            <span class="ellipsis">{{item.Name}}</span>
          </div>
        </div>
        <span v-else>数据为空~</span>
      </div>
    </div>
  </div>
</template>


<script>
import auth from "~/mixins/auth";
export default {
  mixins: [auth],
  data() {
    return {
      categoryList: [],
      product: [],
      chooseCategory: 0,
    };
  },
  methods: {
    async loadAll() {
      let that = this;
      await that.getCategory();
      that.product = that.categoryList[0].Children;
    },
    //获取商品目录
    async getCategory() {
      let that = this;
      let { data, message, success } = await that.$api.pc["common/FindCategory"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
      });
      that.categoryList = data;
    },

    //点击目录
    onCategory(index) {
      let that = this;
      that.chooseCategory = index;
      that.product = that.categoryList[index].Children;
    },
    //点击商品
    onProduct(index) {
      let that = this;
      if (that.product[index].Children == null) {
        that.$router.push("/classify/detail?Id=" + that.product[index].Id + "&name=" + that.product[index].Name);
      } else if (that.product[index].Children.length == 0) {
        that.$router.push("/classify/detail?Id=" + that.product[index].Id + "&name=" + that.product[index].Name);
      } else {
        that.product = that.product[index].Children;
      }
    },
    onBack(){
      let that = this;
    }
  },
  created() {
    let that = this;
    that.loadAll();
  },
};
</script>


