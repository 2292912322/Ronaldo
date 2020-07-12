<style lang="scss">
  @import "~vue-xy-ui/dist/mixin";
  @import "~assets/scss/value";

  .wc-photoCar {
    display: flex;
    flex-direction: column;
    align-items: center;

    .wc-photoCar-card__inner {
      width: rsh(710);
      height: rsh(360);
      display: flex;
      flex-direction: column;

      .wc-photoCar-card__inner__top {
        display: flex;
        flex-direction: row;

        &>i {
          margin: rsh(20) rsh(10) rsh(10) rsh(20);
        }

        &>span {
          font-size: rsh(25);
          color: #666666;
          margin-top: rsh(20);
        }
      }

      &>span {
        font-size: rsh(20);
        color: #c3c3c3;
        margin-left: rsh(22);
        margin-bottom: rsh(10);
        letter-spacing: rsh(2);
      }

      .wc-photoCar-card__inner__photo {
        display: flex;
        flex-direction: row;
        margin-left: rsh(15);

        .wc-photoCar-card__inner__photo__item {
          width: rsh(340);
          margin-right: rsh(10);
           position: relative;
            & > input{
              display: block;
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
              opacity: 0;
            }
          &>i {
            padding-top: 56.7%;
          }

          &>div {
            border-radius: rsh(8);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: rsh(23);
            color: #666;
            line-height: rsh(32);
            background-color: #fce43d;
            padding: rsh(10) 0;
            margin-top: rsh(5);
           
            &>i {
              margin-right: rsh(8);
            }
          }
        }
      }
    }

    .wc-photoCar-card__outer {
      width: rsh(710);
      height: rsh(360);
      display: flex;
      flex-direction: column;

      .wc-photoCar-card__inner__top {
        display: flex;
        flex-direction: row;

        &>i {
          margin: rsh(20) rsh(10) rsh(10) rsh(20);
        }

        &>span {
          font-size: rsh(25);
          color: #666666;
          margin-top: rsh(20);
        }
      }

      &>span {
        font-size: rsh(20);
        color: #c3c3c3;
        margin-left: rsh(22);
        letter-spacing: rsh(2);
      }

      .wc-photoCar-card__inner__photo {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        margin-left: rsh(15);

        .wc-photoCar-card__inner__photo__item {
          width: rsh(335);
          margin-right: rsh(10);
          margin-top: rsh(10);
          position: relative;
            & > input{
              display: block;
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
              opacity: 0;
            }

          &>i {
             width: rsh(331);
             height: rsh(197);
          }

          &>div {
            border-radius: rsh(8);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: rsh(23);
            color: #666;
            line-height: rsh(32);
            background-color: #fce43d;
            padding: rsh(10) 0;
            margin-top: rsh(5);
           

            &>i {
              margin-right: rsh(8);
            }
          }
        }
      }
    }

    &>button {
      margin-top: rsh(200);
    }
  }

</style><template>
  <div>
    <div class="wc-photoCar">
      <!--车辆内饰-->
      <div class="wc-card wc-photoCar-card__inner">
        <div class="wc-photoCar-card__inner__top">
          <i class="icons-common-camera-outer">
            <div class="icons-common icons-common-camera-inner"></div>
          </i>
          <span>车辆内饰拍照</span>
          <!-- <span>&nbsp; &nbsp; {{num1}}/2</span> -->
        </div>
        <span>请按以下示意图拍摄车辆内饰照片&nbsp;&nbsp;(必选)</span>
        <div class="wc-photoCar-card__inner__photo">
          <div class="wc-photoCar-card__inner__photo__item">
            <i :class="fileURL[0] ?'lazy-load lazy-img' :'icons-car-return-inner-outer'">
              <div class="icons-car icons-car-return-inner-inner" v-if="!fileURL[0]"></div>
              <img v-lazy="fileURL[0]" :key="fileURL[0]" class="lazy-cover" v-if="fileURL[0]">
            </i>
            <div>
              <i class="icons-common-camera-outer">
                <div class="icons-common icons-common-camera-inner"></div>
              </i>
              <span>前排内饰照片</span>
            </div>
            <input type="file" @change="onUploadChange" :data-id=0 accept="image/*">
          </div>
        </div>
      </div>
      <!--  车辆外观  -->
      <div class="wc-card wc-photoCar-card__outer">
        <div class="wc-photoCar-card__inner__top">
          <i class="icons-common-camera-outer">
            <div class="icons-common icons-common-camera-inner"></div>
          </i>
          <span>车辆外观拍照</span>
          <span>&nbsp;&nbsp;{{num}}/2</span>
        </div>
        <span>请按以下示意图拍摄车辆外观照片&nbsp;&nbsp;(必选)</span>
        <div class="wc-photoCar-card__inner__photo">
          <div class="wc-photoCar-card__inner__photo__item">
           <i :class="fileURL[1] ?'lazy-load lazy-img' :$store.state.getCar.carDetail.carSeatNum==2? 'icons-car-return-front-left-2-outer':'icons-car-return-front-left-4-outer'">
              <div class="icons-car" :class="$store.state.getCar.carDetail.carSeatNum==2? 'icons-car-return-front-left-2-inner':'icons-car-return-front-left-4-inner'" v-if="!fileURL[1]"></div>
              <img v-lazy="fileURL[1]" :key="fileURL[1]" class="lazy-cover" v-if="fileURL[1]">
            </i>
            <div>
              <i class="icons-common-camera-outer">
                <div class="icons-common icons-common-camera-inner"></div>
              </i>
              <span>车辆左前方照片</span>
            </div>
            <input type="file" @change="onUploadChange" :data-id=1 accept="image/*">
          </div>
          <div class="wc-photoCar-card__inner__photo__item">
            <i  :class="fileURL[2] ?'lazy-load lazy-img' :$store.state.getCar.carDetail.carSeatNum=='2' ? 'icons-car-return-back-left-2-outer' : 'icons-car-return-back-left-4-outer'">
              <div class="icons-car " :class="$store.state.getCar.carDetail.carSeatNum=='2'? 'icons-car-return-back-left-2-inner' : 'icons-car-return-back-left-4-inner'" v-if="!fileURL[2]"></div>
              <img v-lazy="fileURL[2]" :key="fileURL[2]" class="lazy-cover" v-if="fileURL[2]">
            </i>
            <div>
              <i class="icons-common-camera-outer">
                <div class="icons-common icons-common-camera-inner"></div>
              </i>
              <span>车辆右后方照片</span>
            </div>
            <input type="file" @change="onUploadChange" :data-id=2 accept="image/*">
          </div>
        </div>
      </div>
      <button class="wc-btn wc-btn--yellow wc-btn--w470 wc-btn--h80 wc-btn--f26"
              v-xy-moving-btn
              @click="OnSubmit">提交 </button>
    </div>
  </div>
</template>
<script>
  import common from "~/mixins/common";
  import seo from "~/mixins/seo";
  import wxMixin from "~/mixins/wx-mixin";
  import _ from 'lodash'

  export default {
    mixins: [common, wxMixin, seo],
    components: {},

    data() {
      return {
        pageTitle: "还车拍照",
        startLoad: false,
        // num:0,
        fileURL:Array.from(new Array(3), (v, i) => {
          return ''
        }),
        fileDir:'rtuncheckcarH5'
      };
    },

    watch: {
      "$store.state.wxAuthStatus": function (v) {
        let that = this;

        // 需要授权才可以加载的数据(授权比页面装载慢)
        if (v && !that.startLoad) {
          that.startLoad = true;
          //
        }
      }
    },
    computed:{
        num () {
        let that = this
        let lengths = that.fileURL.filter(o => o).length
        if(that.fileURL[0]){
          return lengths-1
        }
          return lengths
      },
      // num1 () {
      //   let that = this
      //   return that.imgs.filter(o => o).length
      // }
    },

    methods: {
      //提交
      OnSubmit(){
        let that = this
        if(that.num == 2){
          that.$router.replace({path:'/car/return',query:{imgs:that.fileURL}})
        }else {
          that.$wc.toast(`请上传车辆外观照片`)
        }
      },
      //单图片上传
      async onUploadChange({currentTarget}) {
        let {
          files,
          dataset: {
            id
          }
        } = currentTarget;
        let that = this;
        let valid = false;
        for (let f of files) {
          if (!valid && !/^image\//.test(f.type)) {
            valid = true;
          }
        }
        if (valid) {
          that.$wc.toast(`仅能上传图片文件`);
        } else {
          // that.$vux.loading.show({
          //   text: "正在上传"
          // });
          let {
            bizContent
          } = await that.$api.common["upload/file_upload"]({
            file: files,
            fileDir: that.fileDir
          });
          that.$set(that.fileURL, id, bizContent[0].fileURL);
        }
        // that.$vux.loading.hide();
      }
    },

     created() {
      let that = this;
      that.type = that.$route.params.type;

      // 需要授权才可以加载的数据(授权比页面装载快)
      if (that.$store.state.wxAuthStatus && !that.startLoad) {
        that.startLoad = true;
        //
      }

      // 无需授权可以提前加载的数据
      // await that.wcService.updateCurrentOrder()
    }
  };

</script>
