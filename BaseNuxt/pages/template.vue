<style lang="scss">
@import "~assets/scss/value";

.wc- {
}
</style>

<template>
  <div class="wc-" data-index="1" v-if="!startLoad" @click="test()">{{pageTitle}}</div>
</template>

<script>
export default {
  components: {},
  data() {
    let that = this;
    return {
      pageTitle: "首页",
      startLoad: false,
      isNull: 123,
    };
  },
  watch: {
    "$store.state.wxAuthStatus": async function(v) {
      let that = this;
      // 需要授权才可以加载的数据(授权比页面装载慢)
      if (v && !that.startLoad) {
        that.startLoad = true;
        //
        await that.loadAll();
      }
    },
  },
  // computed: {
  //   test(){
  //     let that = this;
  //     return !that.pageTitle
  //   }
  // },
  methods: {
    async loadAll() {
      let that = this;
      // await that.getList();
    },
    //获取页面数据列表
    async getList() {
      let that = this;
      let { data, message, success } = await that.$api.wc["common/FindItemByHotSales"]({
        storeId: that.$store.state.storeListInfo.storeInfo.StoreId,
        etpCode: that.$store.state.storeListInfo.storeInfo.EnterpriseCode,
      });
      that.list = data;
    },
    test() {
      this.pageTitle = 1;
      this.startLoad = !this.startLoad;
    },
    confirm() {
      that.$wc.confirm(content, {
        title: "温馨提示",
        confirmButtonText: "继续还车",
        cancelButtonText: "修改还车网点",
        onConfirm() {},
        onCancel() {},
      });
    },
  },
  async created() {
    let that = this;
    // 需要授权才可以加载的数据(授权比页面装载快)
    if (that.$store.state.wxAuthStatus && !that.startLoad) {
      that.startLoad = true;
      await that.loadAll();
    }
    // 无需授权可以提前加载的数据
  },
  beforeMount() {},

};
</script>