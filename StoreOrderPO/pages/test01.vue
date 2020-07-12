<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-test {
  background: $backgroundColor;
  .pc-test__limit {
    width: 100vw;
    height: rsh(390);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: url("~assets/imgs/limit-bg.png") no-repeat;
    background-size: 100% 100%;
    & > div {
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: rsh(30);
      justify-content: center;
      &:first-of-type {
        width: 100vw;
        height: 50%;
        justify-content: flex-end;
        & > span {
          &:last-of-type {
            font-size: rsh(60);
          }
        }
      }
      &:not(:first-child) {
        width: 50vw;
        height: 40%;
        & > span {
          &:last-of-type {
            font-size: rsh(40);
          }
        }
      }
    }
  }
  .pc-test__list {
    width: 100vw;
    height: calc(100vh - #{rsh(390)});
    overflow-y: auto;
    position: relative;
    .pc-test__list__item {
      width: 100vw;
      height: rsh(142);
      background: #fff;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: rsh(20);
      & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: rsh(30);
        height: 80%;
        margin-top: rsh(10);
      }
      & > span {
        margin: rsh(20);
        color: red;
      }
    }
  }
}
</style>
<template>
    <div class="pc-test">
        <div class="pc-test__limit">
            <!-- <div>
                <span>可用额度</span>
                <span>{{accountInfo?accountInfo.availLimit:0}}</span>
            </div>
            <div>
                <span>授信额度</span>
                <span>{{accountInfo?accountInfo.creditLimit:0}}</span>
            </div>
            <div>
                <span>逾期贷款金额</span>
                <span>{{accountInfo?accountInfo.expireLoanAmt:0}}</span>
            </div> -->
        </div>
        <div ref="test">{{num}}</div>
        <!-- <div class="pc-test__list">
            <scroller :on-infinite="infinite">
                <div class="pc-test__list__item" v-for="item in list">
                    <div>
                        <span>采购单号：4923423423432</span>
                        <span>时 间：2020.05.21</span>
                    </div>
                    <span>-￥5000.00</span>
                </div>
            </scroller>
        </div> -->
    </div>
</template>


<script>
export default {
  data() {
    return {
      list: Array.from(Array(10), (v, k) => k),
      isAdmin: true,
      isAll: false,
      accountInfo: {},
      num:1
    };
  },
  methods: {
    async loadAll() {
      let that = this;
      //   let { data, message, success } = await that.$api.pc["pay/FindAccountInfo"]({
      //     storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
      //   });
      //   that.accountInfo = data;
    },
    getList() {
      let that = this;
      // that.list = that._.concat(that.list, Array.from(Array(10), (v, k) => k));
      // console.log(that.list);
    },
    infinite(done) {
      let that = this;
      if (that.list.length >= 30) {
        setTimeout(() => {
          done(true);
        }, 1500);
        return;
      }

      setTimeout(() => {
        that.getList();
        setTimeout(() => {
          done();
        });
      }, 1500);
    },
  },
  created() {
    let that = this;
    that.loadAll();
    
    that.num= 2
  },
  mounted(){
    let that = this;
    that.$nextTick(function(){
      console.log(that)
    })
    
  }
};
</script>


