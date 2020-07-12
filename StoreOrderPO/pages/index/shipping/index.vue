<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
.pc-shipping {
  background: $backgroundColor;
  .pc-shipping__title {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: rsh(10);
    & > span {
      width: 33.3%;
      height: rsh(80);
      background: #c6c6c6;
      line-height: rsh(80);
      text-align: center;
      font-size: rsh(30);
    }
    .pc-shipping__title--active {
      background: $mainColor;
      color: #fff;
    }
  }
  .pc-shipping__topBar {
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
  .pc-shipping__list {
    height: calc(100vh - 44vw);
    overflow-y: auto;
    position: relative;
    & > span {
      font-size: rsh(38);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .pc-shipping__list--active {
      background: #e2e2e2 !important;
    }
    .pc-shipping__list__item {
      width: 100vw;
      position: relative;
      display: flex;
      flex-direction: column;
      & > span {
        margin: rsh(20) 0 0 rsh(25);
      }
      .pc-shipping__list__item__icon {
        position: absolute;
        display: flex;
        flex-direction: row;
        bottom: rsh(26);
        right: rsh(24);
        align-items: center;
        font-size: rsh(20);
        color: $mainColor;
      }
      .pc-shipping__list__item__list {
        .pc-shipping__list__item__list__item {
          display: flex;
          flex-direction: column;
          background: #fff;
          margin-bottom: rsh(20);
          padding-bottom: rsh(10);
          position: relative;
          & > div {
            margin: rsh(10) 0 0 rsh(25);
            &:last-of-type {
              & > span {
                display: inline-block;
                width: 3em;
                height: 1.5em;
                font-size: rsh(20);
                background: red;
                text-align: center;
                color: #fff;
                border-radius: rsh(10);
              }
            }
          }
          .pc-shipping__list__item__list__item__icon {
            position: absolute;
            display: flex;
            flex-direction: row;
            bottom: rsh(26);
            right: rsh(24);
            align-items: center;
            font-size: rsh(20);
            color: $mainColor;
          }
          .pc-shipping__list__item__list__item__list {
            margin: 0;
            .pc-shipping__list__item__list__item__list__item {
              width: 100vw;
              background: #fff;
              height: rsh(180);
              display: flex;
              flex-direction: row;
              position: relative;
              & > img {
                margin: rsh(10) 0;
                height: rsh(150);
              }
              .pc-shipping__list__item__list__item__list__item__detail {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                & > span {
                  margin: rsh(10) 0;
                }
              }
              .pc-shipping__list__item__list__item__list__item__num {
                display: flex;
                flex-direction: column;
                height: rsh(180);
                justify-content: space-around;
                margin-right: rsh(20);
                & > span {
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
  }
  .pc-shipping__box {
    width: rsh(690);
    height: rsh(600);
    background: #fff;
    border-radius: rsh(10);
    margin: rsh(270) rsh(30);
    & > h2 {
      text-align: center;
      line-height: rsh(100);
    }
    .pc-shipping__box__main {
      height: rsh(400);
      display: flex;
      flex-direction: column;
      font-size: rsh(30);
      & > i {
        width: rsh(140);
        height: rsh(140);
        margin: 0 auto;
      }
      & > span {
        margin: rsh(20) 0 0 rsh(40);
        & > input {
          width: rsh(100);
          border: 1px solid $mainColor;
          text-align: center;
          &:focus {
            outline: none;
          }
        }
      }
      &.pc-shipping__box--product {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > span {
          margin: rsh(10) 0 0 0 !important;
        }
      }
    }
    .pc-shipping__box__btn {
      width: 100%;
      height: rsh(100);
      display: flex;
      color: #fff;
      & > span {
        width: 50%;
        height: rsh(102);
        text-align: center;
        line-height: rsh(100);
        background: $mainColor;
        &:last-of-type {
          background: $batteryRed;
          position: relative;
          & > form {
            opacity: 0;
          }
        }
      }
    }
  }
  .pc-shipping__box__btn--input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    background: $batteryGreen;
  }
  .pc-shipping__deliver {
    width: 100vw;
    padding-bottom: rsh(20);
    .pc-shipping__deliver__number {
      height: rsh(100);
      line-height: rsh(100);
      display: flex;
      flex-direction: row;
      align-items: center;
      & > span {
        margin-left: rsh(20);
      }
      & > input {
        width: 70vw;
        height: rsh(80);
        padding-left: rsh(20);
        border: 1px solid $mainColor;
        &:focus {
          outline: none;
        }
      }
    }
    .pc-shipping__deliver__list {
      overflow-y: auto;
      position: relative;
      max-height: rsh(500);
      min-height: rsh(100);
      margin-top: rsh(10);
      & > span {
        font-size: rsh(24);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .pc-shipping__deliver__list__item--disable {
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
      .pc-shipping__deliver__list__item {
        display: flex;
        flex-direction: row;
        width: 100vw;
        height: rsh(140);
        background: #fff;
        margin-top: rsh(20);
        position: relative;
        & > i {
          width: rsh(120);
          height: rsh(120);
          margin: rsh(10) rsh(20);
        }
        .pc-shipping__deliver__list__item__detail {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          font-size: rsh(28);
          width: rsh(220);
          height: rsh(140);
          color: #333333;
        }
        .pc-shipping__deliver__list__item__icon {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-left: rsh(170);
          height: rsh(140);
          justify-content: space-around;
          & > div {
            width: rsh(170);
            height: rsh(40);
            border: 1px solid #d6d6d6;
            border-radius: rsh(2);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            & > span {
              width: 33.3%;
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
          }
        }
      }
    }
    .pc-shipping__deliver__photo {
      width: 90%;
      padding: rsh(20);
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
    .pc-shipping__deliver__btn {
      margin-top: rsh(20);
    }
  }
}
</style>
<template>
  <div class="pc-shipping">
    <div class="pc-shipping__title">
      <span
        :class="{'pc-shipping__title--active':chooseNav==index}"
        v-for="(item,index) in navList"
        :key="item"
        @click="onNav(index)"
      >{{item}}</span>
    </div>
    <div class="pc-shipping__topBar">
      <div>
        <i class="icons-common-search-outer">
          <div class="icons-common icons-common-search-inner"></div>
        </i>
        <input type="number" placeholder="输入条形码" v-model="barcode">
        <span @click="onSearch()">搜索</span>
      </div>
      <i class="icons-common-scan-outer" @click="onScan()">
        <div class="icons-common icons-common-scan-inner"></div>
      </i>
    </div>
    <div class="pc-shipping__list" v-if="chooseNav==0 || chooseNav==3">
      <div class="pc-shipping__list__item">
        <div class="pc-shipping__list__item__list">
          <div
            class="pc-shipping__list__item__list__item"
            :class="{'pc-shipping__list--active':isMore}"
            v-for="(p,index) in list"
            :key="p.SupplierStorePO.PONumber"
          >
            <div>采购单号：{{p.SupplierStorePO.PONumber}}</div>
            <div>订单时间：{{p.SupplierStorePO.CreateDate.split('T')[0]}}</div>
            <div>供 应 商：{{p.SupplierStorePO.SupplierName}}</div>
            <div>
              状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：
              <label
                style="color:#148482"
              >{{p.SupplierStorePO.ConfirmedStatus==30?'未确定':p.SupplierStorePO.ShipmentStatus == 0?'待发货':p.SupplierStorePO.ShipmentStatus == 1?'待收货':'已收货'}}</label>
              <!-- <label
                class="pc-shipping__list__item__list__item__icon"
                @click="onMore(index)"
                v-if="chooseNav==2"
              >
                <span>更多</span>
                <i :class="`icons-common-arrow-${p.isMore ? 'up':'down'}-outer`">
                  <div :class="`icons-common icons-common-arrow-${p.isMore ? 'up':'down'}-inner`"></div>
                </i>
              </label>-->
            </div>
            <div v-if="chooseNav==0">
              订单金额：
              <span style="color:red">￥{{p.SupplierStorePO.TtlAmount | pcNumFormat}}</span>
            </div>
            <div v-if="chooseNav==0">
              实付金额：
              <span style="color:red">￥{{p.SupplierStorePO.ActAmount | pcNumFormat}}</span>
            </div>
            <div v-if="chooseNav==0">
              支付状态：
              <label style="color:#148482">{{p.SupplierStorePO.IsPaymented==0?'待支付':'已支付'}}</label>
              <span
                v-if="p.SupplierStorePO.IsPaymented==0&&p.SupplierStorePO.ShipmentStatus == 2"
                @click="onIsPay(p)"
              >支付</span>
            </div>
            <label
              class="pc-shipping__list__item__list__item__icon"
              @click="onMore(index)"
            >
              <span>更多</span>
              <i :class="`icons-common-arrow-${p.isMore ? 'up':'down'}-outer`">
                <div :class="`icons-common icons-common-arrow-${p.isMore ? 'up':'down'}-inner`"></div>
              </i>
            </label>
          </div>
        </div>
      </div>
      <span v-if="list.length===0">暂无数据</span>
    </div>
    <!-- 送货单收货UI -->
    <div class="pc-shipping__deliver" v-if="chooseNav==1 || chooseNav ==2">
      <div class="pc-shipping__deliver__number">
        <span>{{chooseNav==1?'收货':'退货'}}单号：</span>
        <input pattern="\d*" v-model="poNumber" readonly>
      </div>
      <div class="pc-shipping__deliver__list">
        <div
          class="pc-shipping__deliver__list__item"
          v-for="(item,index) in productList"
          :key="index"
          @click="onItem(index)"
          :class="{'pc-shipping__deliver__list__item--disable':!item.SupplierId}"
        >
          <i class="lazy-load">
            <img v-lazy="item.ImgUrl" class="lazy-contain">
          </i>
          <div class="pc-shipping__deliver__list__item__detail">
            <span class="ellipsis">{{item.Name}}</span>
            <span>{{item.Barcode}}</span>
            <span>{{item.Size}}</span>
            <span v-if="!item.SupplierId" style="fontSize:10px;color:red">该商品暂未分配供应商</span>
          </div>
          <div class="pc-shipping__deliver__list__item__icon" v-if="item.SupplierId">
            <span @click.stop="onDelete(index)">删除</span>
            <div>
              <span @click.stop="onReduce(index)">-</span>
              <span>{{item.num}}</span>
              <span @click.stop="onAdd(index)">+</span>
            </div>
          </div>
        </div>
        <span v-if="productList.length==0">请通过搜索框或者扫码添加商品</span>
      </div>
      <div class="pc-shipping__deliver__photo">
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
      <div
        class="pc-btn pc-shipping__deliver__btn"
        @click="onDeliver()"
      >创建{{chooseNav==1?'收货':'退货'}}单</div>
    </div>
    <!-- 支付弹窗 -->
    <div class="mask" v-if="isPay">
      <div class="pc-shipping__box">
        <h2>确定支付此订单?</h2>
        <div class="pc-shipping__box__main">
          <span>采购单号：{{payObj.SupplierStorePO.PONumber}}</span>
          <span>供 应 商：{{payObj.SupplierStorePO.SupplierName}}</span>
          <span>
            实付金额：
            <span style="color:red">￥{{payDetail.ActAmount |pcNumFormat}}</span>
          </span>
        </div>
        <div class="pc-shipping__box__btn">
          <span @click="isPay=false">取消</span>
          <span>支付
            <form :action="payParam.Url" method="post" enctype="multipart/form-data">
              <input name="notify_url" :value="payParam.notify_url">
              <input name="orders" :value="payParam.orders">
              <input type="submit" value="支付" class="pc-shipping__box__btn--input">
            </form>
          </span>
        </div>
      </div>
    </div>
    <!-- 商品详情 -->
    <div class="mask" v-if="isProduct">
      <div class="pc-shipping__box">
        <h2>添加商品</h2>
        <div class="pc-shipping__box__main pc-shipping__box--product">
          <i class="lazy-load">
            <img v-lazy="product.ImgUrl" class="lazy-contain">
          </i>
          <span>{{product.Name}}</span>
          <span>{{product.Size}}</span>
          <span>{{product.Barcode}}</span>
          <span>
            实收：
            <input pattern="\d*" v-model.number="product.num">
          </span>
          <!-- <span>
            实付金额：
            <span style="color:red">￥{{payDetail.ActAmount}}</span>
          </span>-->
        </div>
        <div class="pc-shipping__box__btn">
          <span @click="isProduct=false">取消</span>
          <span style="background:red" @click="onAddProduct()">添加</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import wxMixin from "~/mixins/wx-mixin";
import auth from "~/mixins/auth";
import { parse } from "querystring";
export default {
  mixins: [auth, wxMixin],
  data() {
    return {
      navList: ["订单收货", "送货单收货", "退货单"], //'赠品收货'
      isDetail: false,
      isMore: false,
      chooseNav: 0,
      list: [],
      poNumber: "",
      productList: [],
      barcode: "",
      imgList: [],
      isPay: false,
      payObj: {},
      payDetail: {},
      isProduct: false,
      product: {},
      payParam: {},
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
      let param;
      switch (that.chooseNav) {
        case 0:
          param = {
            //ShipmentStatus: "0,1",
            // IsPaymented: "0",
            POType: "0,5",
          };
          that.getAllList(param);
          break;
        case 1:
          that.getPoNumber();
          break;
        case 2:
          // param = {
          //   ShipmentStatus: "0,1",
          //   IsPaymented: "1",
          //   POType: 4,
          // };
          // that.getAllList(param);
          that.getPoNumber();
          break;
        case 3:
          param = {
            ShipmentStatus: 2,
            POType: 0,
          };
          that.getList(param);
          break;
      }
    },
    onNav(index) {
      let that = this;
      that.chooseNav = index;
      that.list = [];
      let param;
      switch (that.chooseNav) {
        case 0:
          param = {
            //ShipmentStatus: "0,1",
            POType: "0,5",
            ItemBarcode: that.barcode,
          };
          that.getAllList(param);
          break;
        case 1:
          that.getPoNumber();
          break;
        case 2:
          that.getPoNumber();
          break;
        case 3:
          param = {
            ShipmentStatus: 2,
            POType: 0,
            ItemBarcode: that.barcode,
          };
          that.getList(param);
          break;
      }
    },
    //获取订单列表
    async getAllList(param) {
      let that = this;
      let { data, message, success } = await that.$api.pc["shipping/FindSupplierStorePOByQueryAll"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        param: JSON.stringify(param),
      });
      that.list = [];
      if (success && data.length > 0) {
        that.list = data;
      } else {
        if (that.barcode) {
          that.$pc.toast("该商品未创建任何订单");
        }
      }
    },
    //获取订单列表
    async getList(param) {
      let that = this;
      let { data, message, success } = await that.$api.pc["shipping/FindSupplierStorePOByQuery"]({
        storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
        param: JSON.stringify(param),
        top: 50,
        lastCreateDate: that.$moment().format("YYYY-MM-DD HH:mm:ss"), //小于的下单时间
      });
      that.list = [];
      if (success && data.length > 0) {
        that.list = data;
      } else {
        if (that.barcode) {
          that.$pc.toast("该商品未创建任何订单");
        }
      }
    },
    //获取poNumber
    async getPoNumber() {
      let that = this;
      let { data, message, success } = await that.$api.pc["shipping/CreatePONumberBySupplierStorePO"]({
        storeCode: that.$store.state.storeListInfo_pc.storeInfo.StoreCode,
      });
      if (success) {
        that.poNumber = data;
      }
    },
    onAdd(index) {
      let that = this;
      that.productList[index].num += that.productList[index].StepUnitQty;
      // let list = that.productList.filter((o) => o.isIcon);
      // if (that.list[index].isIcon) {
      //   that.$store.commit("shoppingCar", { list: list });
      // }
      that.$forceUpdate();
    },
    onReduce(index) {
      let that = this;
      if (that.productList[index].num <= that.productList[index].LimitOrderNum) {
        that.$pc.toast("当前商品的数量不能低于" + that.productList[index].LimitOrderNum);
      } else {
        that.productList[index].num -= that.productList[index].StepUnitQty;
      }
      // if (that.list[index].isIcon) {
      //   let list = that.list.filter((o) => o.isIcon);
      //   that.$store.commit("shoppingCar", { list: list });
      // }
      that.$forceUpdate();
    },
    onAddProduct() {
      let that = this;
      if (!that._.find(that.productList, (o) => o.Id == that.product.Id)) {
        that.productList.push(that.product);
      } else {
        that.$pc.toast("不可添加相同商品");
      }
      that.isProduct = false;
    },
    async onDeliver() {
      let that = this;
      if (that.poNumber) {
        let itemList = that.productList.map((o) => {
          return { ItemId: o.Id, ItemCode: o.ItemCode, ItemName: o.Name, ItemBarcode: o.Barcode, Qty: o.num, Package: o.Package, Size: o.Size };
        });
        if (that.chooseNav == 1) {
          //送货单逻辑
          let { data, success, message } = await that.$api.pc["shipping/CreateSupplierStorePOByNoPoReceived"]({
            storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
            number: that.poNumber,
            remark: "",
            itemList: JSON.stringify(itemList),
          });
          if (success) {
            that.$pc.toast(message);
            await that.uploadImgList(data.StoreOrderId);
            that.$router.replace("/exchange");
          }
        } else {
          //退货单逻辑
          let { data, success, message } = await that.$api.pc["shipping/CreateSupplierStorePOByRefund"]({
            storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
            number: that.poNumber,
            remark: "",
            itemList: JSON.stringify(itemList),
          });
          if (success) {
            that.$pc.toast(message);
            // await that.uploadImgList(data.StoreOrderId);
            that.$router.replace("/exchange");
          }
        }
      } else {
        that.$pc.toast("单号不能为空");
      }
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
    async uploadImgList(Id) {
      let that = this;
      let { data, message, success } = await that.$api.common["upload/UpdateImageByStorePOId"]({
        sStorePOId: Id,
        fileInfos: JSON.stringify(that.imgList),
      });
    },
    onMore(index) {
      let that = this;
      // that.list[index].poType = that.chooseNav;
      that.$router.push("/shipping/detail?Id=" + that.list[index].SupplierStorePO.Id + "&poType=" + that.chooseNav);
    },
    async onIsPay(item) {
      let that = this;
      if (that.$store.state.storeListInfo_pc.storeInfo.FinanceCode == "1020") {
        that.payObj = item;
        await that.getPayDetail(item.SupplierStorePO.Id);
        await that.onPay(item.SupplierStorePO.Id);
      } else {
        if (that.$xyTools.browser().wx) {
          wx.miniProgram.getEnv(function(res) {
            if (res.miniprogram) {
              // 走在小程序的逻辑
              wx.miniProgram.navigateTo({
                url:
                  "/pages/pay/pay?storeCashierId=" +
                  that.$store.state.storeListInfo_pc.storeInfo.Id +
                  "&storeId=" +
                  that.$store.state.storeListInfo_pc.storeInfo.StoreId +
                  "&sStorePOId=" +
                  item.SupplierStorePO.Id +
                  "&path=" +
                  that.$route.path,
              });
            }
          });
        }
      }
    },
    async onPay(Id) {
      let that = this;
      let { data, message, success } = await that.$api.pc["pay/PaymentSupplierStorePO"]({
        storeCashierId: that.$store.state.storeListInfo_pc.storeInfo.Id,
        sStorePOId: Id,
      });
      if (success && data && data.PaymentData) {
        that.payParam = data.PaymentData;
        that.payParam.orders = JSON.stringify(that.payParam.orders);
        sessionStorage.historyUrl_pc = window.location.href;
        that.isPay = true;
      }
      // if (success) {
      //   that.$pc.toast(message);
      //   let param = {
      //     // ShipmentStatus: "0,1",
      //     IsPaymented: "0",
      //   };
      //   that.getAllList(param);
      //   that.isPay = false;
      // }
    },
    async getPayDetail(Id) {
      let that = this;
      let { data, message, success } = await that.$api.pc["pay/FindSupplierStorePOPaymentBossByStorePOId"]({
        sStorePOId: Id,
      });
      if (success) {
        that.payDetail = data;
      }
    },
    onDelete(index) {
      let that = this;
      let content = "是否删除该商品？";
      that.$pc.confirm(content, {
        title: "温馨提示",
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        onConfirm() {
          that.productList.splice(index, 1);
        },
        onCancel() {},
      });
    },
    async onSearch() {
      let that = this;
      if (!that.barcode) return false;
      if (that.chooseNav == 1 || that.chooseNav == 2) {
        let { data, message, success } = await that.$api.pc["common/FindItemByBarcode"]({
          storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
          etpCode: that.$store.state.storeListInfo_pc.storeInfo.EnterpriseCode,
          barcode: that.barcode,
        });
        if (success && data.length > 0) {
          that.product = data[0];
          that.product.num = that.product.LimitOrderNum;
          that.isProduct = true;
        } else {
          that.$pc.toast("查无该商品");
        }
      } else {
        that.onNav(that.chooseNav);
      }
      that.barcode = "";
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
          that.barcode = result;
          if (that.chooseNav == 1 || that.chooseNav == 2) {
            if (!result) return false;
            let { data, message, success } = await that.$api.pc["common/FindItemByBarcode"]({
              storeId: that.$store.state.storeListInfo_pc.storeInfo.StoreId,
              etpCode: that.$store.state.storeListInfo_pc.storeInfo.EnterpriseCode,
              barcode: result,
            });
            if (success && data.length > 0) {
              that.product = data[0];
              that.product.num = that.product.LimitOrderNum;
              that.isProduct = true;
            } else {
              that.$pc.toast("查无该商品");
            }
          } else {
            that.onNav(that.chooseNav);
          }
          that.barcode = "";
        },
        fail: function(res) {
          that.$pc.alert(res);
        },
      });
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
    if (that.$route.query.payStatus) {
      let payStatus = JSON.parse(that.$route.query.payStatus)[0];
      if (payStatus.orderStatus == 1) {
        that.$pc.alert("支付成功");
      } else {
        that.$pc.alert("支付失败");
      }
    }
    if (that.$route.query.status) {
      if (that.$route.query.status == 1) {
        that.$pc.alert("支付成功");
      } else {
        that.$pc.alert("支付失败");
      }
    }
  },
};
</script>


