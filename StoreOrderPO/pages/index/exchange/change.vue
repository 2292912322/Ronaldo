<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-change {
  background: $backgroundColor;
  .pc-change__title {
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
  .pc-change__reason {
    width: 100vw;
    height: rsh(500);
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > span {
      width: 90%;
      height: rsh(96);
      border-bottom: 1px solid #e2e2e2;
      line-height: rsh(96);
    }
    .pc-change__reason__textarea {
      background: #f0f0f0;
      width: 90%;
      margin: rsh(20) 0;
    }
    .weui-textarea {
      background: #f0f0f0;
      width: 100%;
    }
    .pc-change__reason__photo {
      width: 90%;
      display: flex;
      flex-direction: row;
      & > div {
        width: rsh(140);
        height: rsh(140);
        border: 1px solid #999999;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: rsh(10);
        position: relative;
        margin-left: rsh(20);
        & > img {
          height: 100%;
          width: 100%;
        }
        & > i {
          margin-top: rsh(10);
        }
        & > span {
          margin-top: rsh(5);
          font-size: rsh(24);
          color: #999999;
        }
        & > input {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          font-size: 0;
          opacity: 0;
        }
      }
    }
  }
  .pc-change__list {
    height: rsh(500);
    overflow-y: auto;
    .pc-change__list__item {
      display: flex;
      flex-direction: column;
      background: $backgroundColor;
      & > div {
        margin: rsh(10) 0 0 rsh(25);
        display: flex;
      }
      .pc-change__list__item__list {
        display: flex;
        flex-direction: column;
        margin: rsh(20) 0;
        .pc-change__list__item__list__item {
          width: 100vw;
          background: #fff;
          height: rsh(160);
          display: flex;
          flex-direction: row;
          & > i {
            margin: rsh(10) rsh(20);
            height: rsh(140);
            width: rsh(140);
          }
          .pc-change__list__item__list__item__detail {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            justify-content: space-evenly;
            width: rsh(380);
            height: rsh(180);
          }
          .pc-change__list__item__list__item__num {
            width: 7em;
            height: rsh(180);
            display: flex;
            flex-direction: row;
            align-items: center;
            & > span {
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
  }
  .pc-change__btn {
    margin-top: rsh(10);
  }
}
</style>
<template>
  <div class="pc-change">
    <div class="pc-change__title">
      <i class="icons-common-arrow-left-outer" @click="$router.go(-1)">
        <div class="icons-common icons-common-arrow-left-inner"></div>
      </i>
      <span>申请换货</span>
    </div>
    <div class="pc-change__list">
      <div class="pc-change__list__item">
        <div>采购单号：{{detail.SupplierStorePO.PONumber}}</div>
        <div>订单时间：{{detail.SupplierStorePO.CreateDate.split('T')[0]}}</div>
        <div>供 应 商：{{detail.SupplierStorePO.SupplierName}}</div>
        <div>
          状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：
          <span
            style="color:#148482"
          >{{detail.SupplierStorePO.ShipmentStatus == 0?'待发货':detail.SupplierStorePO.ShipmentStatus == 1?'待收货':'已收货'}}</span>
        </div>
        <div class="pc-change__list__item__list">
          <div
            class="pc-change__list__item__list__item"
            v-for="(o,i) in detail.ChangeProductList"
            :key="o.Id"
          >
            <i class="lazy-load">
              <img v-lazy="o.ImgUrl" class="lazy-contain">
            </i>
            <!-- <img src="~assets/imgs/drink.jpg" alt=""> -->
            <div class="pc-change__list__item__list__item__detail">
              <span class="ellipsis">{{o.ItemName}}</span>
              <span>{{o.ItemBarcode}}</span>
              <span>{{o.Size}}</span>
            </div>
            <div class="pc-change__list__item__list__item__num">
              <span>换货数量：</span>
              <input type="number" v-model="o.ReceivedQty"  @change="o.ReceivedQty=o.ReceivedQty.replace(/[^\d]/g,'') - 0">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pc-change__reason">
      <span>换货原因</span>
      <x-textarea :max="50" class="pc-change__reason__textarea" placeholder="请输入换货原因"></x-textarea>
      <div class="pc-change__reason__photo">
        <div v-for="(item,index) in imgList" :key="index">
          <img :src="item.HrefUrl" alt="">
        </div>
        <div v-if="imgList.length<3">
          <i class="icons-common-photo-outer">
            <div class="icons-common icons-common-photo-inner"></div>
          </i>
          <span>上传照片</span>
          <span>(最多三张)</span>
          <input type="file" @change="onUploadChange" accept="image/*">
        </div>
      </div>
    </div>
    <div class="pc-btn pc-change__btn" @click="onChange()">提交</div>
  </div>
</template>


<script>
import XTextarea from "~/node_modules/vux/src/components/x-textarea";
export default {
  components: {
    XTextarea,
  },
  data() {
    return {
      isDetail: false,
      isMore: false,
      imgList: [],
      detail: {},
    };
  },
  methods: {
    loadAll() {
      let that = this;
      that.detail = JSON.parse(sessionStorage.changeDetail);
    },
    async onUploadChange({ currentTarget }) {
      let that = this;
      let {
        files,
        dataset: { index },
      } = currentTarget;
      let valid = false;
      let over = false;
      for (let f of files) {
        if (!valid && !/^image\//.test(f.type)) {
          valid = true;
        }
        //          if (f.size / 1024000 > 1) {
        //            over = true
        //          }
      }
      if (over) {
        that.$pc.toast(`图片大小不能超过4MB`);
      } else if (valid) {
        that.$pc.toast(`仅能上传图片文件`);
      } else {
        //图片上传逻辑
        let { data, message, success } = await that.$api.common["upload/UploadFile"]({
          file: files,
        });
        if (success) {
          that.$pc.toast(message);
          that.imgList.push(data[0]);
        }
      }
    },
    async onChange() {
      let that = this;
      if (that.detail.SupplierStorePO.ShipmentStatus == 2) {
        let list = that.detail.ChangeProductList.map((o) => {
          return { Qty: o.ReceivedQty, Id: o.Id };
        });
        //下单逻辑
        let { data, success, message } = await that.$api.pc["shipping/CreateSupplierStorePOByItemChangeItem"]({
          storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
          remark: "",
          itemList: JSON.stringify(list),
          oldStorePOId: that.detail.SupplierStorePO.Id,
        });
        if (success) {
          that.$pc.toast(message);
          if (that.imgList.length > 0) {
            await that.uploadImgList();
          }
          sessionStorage.removeItem("changeDetail");
          that.$router.replace("/exchange");
        }
      } else {
        that.$pc.toast("该订单未收货，无法换货");
      }
    },
    async uploadImgList() {
      let that = this;
      let { data, message, success } = await that.$api.common["upload/UpdateImageByStorePOId"]({
        sStorePOId: that.detail.SupplierStorePO.Id,
        fileInfos: JSON.stringify(that.imgList),
      });
    },
  },
  async created() {
    let that = this;
    that.loadAll();
  },
};
</script>


