<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-limit {
  background: $backgroundColor;
  .pc-limit__limit {
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
  .pc-limit__list {
    width: 100vw;
    height: calc(100vh - #{rsh(390)});
    overflow-y: auto;
    .pc-limit__list__item {
      width: 100vw;
      height: rsh(160);
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
  <div class="pc-limit">
    <div class="pc-limit__limit">
      <div>
        <span>可用额度</span>
        <span>{{accountInfo?accountInfo.availLimit : 0 |pcNumFormat}}</span>
      </div>
      <div>
        <span>授信额度</span>
        <span>{{accountInfo?accountInfo.creditLimit:0|pcNumFormat}}</span>
      </div>
      <div>
        <span>逾期贷款金额</span>
        <span>{{accountInfo?accountInfo.expireLoanAmt:0|pcNumFormat}}</span>
      </div>
    </div>
    <div class="pc-limit__list">
      <div class="pc-limit__list__item" v-for="(item,index) in list" :key="index" @click="getAccountReceipt(item.transactionId)">
        <div>
          <span style="color:blue;text-decoration:underline">流水号:{{item.transactionId}}</span>
          <span>收款人：{{item.payeeAcName}}</span>
          <span>时 间：{{item.transDate}}</span>
        </div>
        <span :style="{'color':item.transMode == 1 ? 'red':'green'}">{{item.transMode == 1 ? '+':'-'}}{{item.Amount }}</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: [],
      isAdmin: true,
      isAll: false,
      accountInfo: {},
    };
  },
  methods: {
    async loadAll() {
      let that = this;
      await that.getAccountInfo();
      await that.getAccountTrans();
    },
    async getAccountInfo() {
      let that = this;
      let { data, message, success } = await that.$api.pc["pay/FindAccountInfo"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
      });
      that.accountInfo = data;
    },
     async getAccountReceipt(Id) {
      let that = this;
      let { data, message, success } = await that.$api.pc["common/FindAccountReceipt"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        transactionId:Id
      });
      if(success){
        window.location.href = data.Url
      }
    },
    async getAccountTrans() {
      let that = this;
      let { data, message, success } = await that.$api.pc["pay/FindAccountTrans"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        page: 1,
        rows: 20,
      });
      if(success){
        that.list = data;
      }
    },
  },
  created() {
    let that = this;
    that.loadAll();
  },
};
</script>


