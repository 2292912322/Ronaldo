<style lang="scss">
@import "~vue-xy-ui/dist/mixin";
@import "~assets/scss/value";
.wc-evaluate {
  .wc-card-evaluate {
    padding: rsh(15);
    .wc-car-evaluate__title {
      font-size: rsh(25);
      color: #666;
      display: flex;
      align-items: center;
      line-height: rsh(34);
      font-weight: bold;
      & > span {
        margin: rsh(30) 0 rsh(10) rsh(30);
      }
    }
    .wc-car-evaluate__tips {
      line-height: rsh(30);
      color: #999999;
      font-size: rsh(22);
      margin-left: rsh(30);
      margin-bottom: rsh(30);
    }
    .wc-car-evaluate__upload {
      display: flex;
      flex-wrap: wrap;
      margin-left: rsh(30);
      & > button {
        border: 1px solid #ccc;
        border-radius: rsh(10);
        width: rsh(108);
        height: rsh(108);
        margin-top: rsh(5);
        margin-right: rsh(5);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
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
        & > i {
          display: block;
          margin: 0 auto;
        }
      }
      & > i {
        border-radius: rsh(10);
        width: rsh(108);
        height: rsh(108);
        margin-top: rsh(5);
        margin-right: rsh(5);
      }
    }
    .wc-evaluate__textarea {
      width: rsh(635);
      height: rsh(180);
      border: 1px solid #e3e3e3;
      border-radius: rsh(15);
      margin-left: rsh(30);
      margin-top: rsh(30);
      font-size: rsh(22);
      color: #000;
      margin-bottom: rsh(30);
    }
  }
  & > button {
    margin-top: rsh(90);
  }
}
</style>
    <template>
  <div class="wc-evaluate">
    <div class="wc-card wc-card-evaluate">
      <div class="wc-car-evaluate__title">
        <span>拍摄车辆内饰图</span>
      </div>
      <div class="wc-car-evaluate__tips">收到反馈后，warmcar风控中心将马上去追</div>
      <d iv class="wc-car-evaluate__upload">
        <i class="lazy-load" v-for="(item,index) in otherImgs" :key="item" @click="onDelete(index)">
          <img v-lazy="item" class="lazy-cover">
        </i>
        <button v-xy-moving-btn>
          <i class="icons-common-add-outer">
            <div class="icons-common icons-common-add-inner"></div>
          </i>
          <input type="file" @change="onUploadChange" accept="image/*">
          <!--multiple="multiple"-->
        </button>
      </div>
      <div class="wc-evaluate__textarea">
        <x-textarea
          :max="120"
          title="反馈说明:"
          :autosize="true"
          :show-counter="false"
          v-model="remark"
        ></x-textarea>
      </div>
    </div>
    <button
      class="wc-btn wc-btn--yellow wc-btn--w600 wc-btn--h85"
      v-xy-moving-btn
      @click="OnSubmit"
    >提交</button>
  </div>
</template>
<script>
import common from "~/mixins/common";
import seo from "~/mixins/seo";
import wxMixin from "~/mixins/wx-mixin";
import wcService from "~/mixins/service";

export default {
  mixins: [common, wxMixin, seo, wcService],
  components: {},
  data() {
    return {
      pageTitle: "",
      startLoad: false,
      //
      imgs: Array.from(new Array(2), (v, i) => {
        return "";
      }),
      former: {},
      remark: "",
      otherImgs: [],
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
  computed: {
    imgsCount() {
      let that = this;
      return that.imgs.filter((o) => o).length;
    },
  },
  methods: {
    async loadAll() {
      let that = this;
      await that.wcService.updateCurrentOrder();
      await that.loadFormer();
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
        that.$wc.toast(`图片大小不能超过4MB`);
      } else if (valid) {
        that.$wc.toast(`仅能上传图片文件`);
      } else {
        let { bizContent } = await that.$api.common["upload/file_upload"]({
          file: files,
          fileDir: "userValidateCarH5",
        });
        if (
          Object.prototype.toString
            .call(bizContent)
            .toLowerCase()
            .includes("array") &&
          bizContent.length > 0 &&
          bizContent[0]
        ) {
          let idx = parseInt(index);
          if (isNaN(idx)) {
            if (that.otherImgs.length < 2) {
              that.otherImgs.push(bizContent[0].fileURL);
            } else {
              that.$wc.toast("只能上传最多2张图片");
            }
          } else {
            that.$set(that.imgs, parseInt(index), bizContent[0].fileURL);
            console.log(that.imgs);
          }
        } else {
          that.$wc.toast(`上传失败`);
        }
        // 使选择相同图片触发change事件
        currentTarget.value = "";
      }
    },
    async onDelete(index) {
      let that = this;
      await that.$wc.confirm("取消上传该图片?", {
        onConfirm() {
          that.otherImgs.splice(index, 1);
        },
      });
    },
    async loadFormer() {
      let that = this;
      let { success, bizContent } = await that.$api.warmcar["query/former_info"]({
        carId: that.$store.state.currentOrder.carInfo.carId,
      });
      if (success && bizContent) {
        that.former = bizContent;
      }
    },
    async open() {
      let that = this;
      let { success } = await that.$api.warmcar["customer/open_door"]({
        orderId: that.$store.state.currentOrder.orderId,
      });
      if (success) {
        that.$wc.toast("操作成功");
      }
    },
    async OnSubmit() {
      let that = this;
      if (that.former.id) {
        let { success, bizContent } = await that.$api.warmcar["query/former_info_submit"]({
          orderId: that.$store.state.currentOrder.orderId,
          cwId: that.former.id, //	客户运维ID	是	int		根据上一单客户和运维人员接口返回数据为准
          type: that.former.type, //	评价对象	是	String		根据上一单客户和运维人员接口返回数据为准
          result: "02", //	评价结果	是	String		01 赞， 02吐槽
          remark: that.remark, //	备注	是	String		xx
          previousOrderId: that.former.previousOrderId, //	上一个订单ID	是	int	当-1的时候，表示没有客户订单和运维的订单	1
          fileURL1: that.otherImgs[0], //	照片1	是	String		xx
          fileURL2: that.otherImgs[1], //	照片2	是	String		xx
        });
        if (success) {
          await that.open();
          that.$router.replace("/car/control");
        }
      }
    },
  },
  async created() {
    let that = this;
    // 需要授权才可以加载的数据(授权比页面装载快)
    if (that.$store.state.wxAuthStatus && !that.startLoad) {
      that.startLoad = true;
      //
    }
    // 无需授权可以提前加载的数据
    await that.loadAll();
  },
};
</script>