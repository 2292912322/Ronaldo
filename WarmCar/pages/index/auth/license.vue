<style lang="scss">
@import "~vue-xy-ui/dist/mixin";
@import "~assets/scss/value";
@import "../../../assets/style/icons-auth.css";
.wc-license {
  background: #f5f8fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  .wc-license__header {
    display: flex;
    flex-direction: column;
    margin-top: rsh(35);
    margin-bottom: rsh(20);
    .wc-license__header__icon {
      display: flex;
      flex-direction: row;
      justify-content: center;
      .wc-license-dashed {
        width: rsh(210);
        height: 0;
        margin-top: 5px;
        border: 1px dashed #bbbbbb;
        transform: scaleY(0.1);
      }
    }
    .wc-license__header__span {
      font-size: rsh(24);
      color: #999999;
      width: rsh(360);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: rsh(20);
    }
  }
  .wc-license-cn {
    display: flex;
    flex-direction: column;
    align-items: center;
    .wc-license__picture {
      height: rsh(498);
    }
    .wc-card-car {
      height: rsh(310);
      .wc-card-car__content {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: rsh(30);
        width: rsh(672);
        & > i {
          display: block;
          position: relative;
          width: rsh(331);
          & > input {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
          }
        }
        .lazy-img {
          width: rsh(331);
          height: rsh(197);
        }
      }
    }
    .wc-license__message {
      display: flex;
      flex-direction: column;
      .wc-license__message__input {
        width: rsh(630);
        height: rsh(100);
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: rsh(24);
        color: #999999;
        & > span {
          margin-left: rsh(30);
        }
        & > div {
          width: 0;
          flex-grow: 1;
          .wc-license__message__input--border{
           width: 100%;
          }
        }
        &:last-of-type {
          &:before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: $inputLineColor;
            transform: scale(1, 0.5);
          }
        }
      }
      .wc-license__message__input--text--w120 {
        width: rsh(95);
      }
      .wc-license__message__input--car{
       display: flex;
       flex-direction: row;
       align-items: center;
       position: relative;
       width: rsh(630);
       &:not(:last-of-type) {
        &:after {
          content: "";
          width: rsh(630);
          height: 1px;
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: #f3f3f3;
          transform: scale(1, 0.5);
        }
      }
      & > div {
          width: 0;
          flex-grow: 1;
          &:first-child{
            width: 100%;
          }
        }
       & > span{
         font-size:rsh(24);
         color: #999999; 
       }
      }
    }
  }
  .wc-license-card {
    background: #ffffff;
    width: rsh(710);
    display: flex;
    flex-direction: column;
    align-items: center;
    .wc-license__picture__title {
      font-size: rsh(26);
      color: #666666;
      padding-top: rsh(30);
    }
    .wc-license__picture__content {
      display: flex;
      flex-direction: row;
      width: rsh(660);
      margin-top: rsh(25);
      .wc-license__picture__left {
        height: rsh(390);
        width: rsh(320);
        margin-right: rsh(10);
        display: flex;
        flex-direction: column;
        & > i {
          display: block;
          position: relative;
          height: rsh(190);
          border-radius: rsh(10);

          & > input {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
          }
        }
        .lazy-img {
          width: rsh(320);
          height: rsh(190);
        }
        & > i:last-of-type {
          margin-top: rsh(10);
        }
      }
      .wc-license__picture__right {
        height: rsh(390);
        width: rsh(330);
        & > i {
          display: block;
          position: relative;
          border-radius: rsh(10);
          & > input {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
          }
        }
        .lazy-img {
          width: rsh(330);
          height: rsh(390);
        }
      }
    }
  }
  .wc-license__text {
    font-size: rsh(26);
    color: #ffcc00;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: rsh(60);
    & > span {
      margin-right: rsh(10);
    }
  }
  .wc-btn-m350 {
    margin-top: rsh(300);
  }
  .wc-license-fontColor {
    color: #ffcc00;
  }
}
</style>

<template>
  <div class="wc-license">
    <!-- 头部导航 -->
    <div class="wc-license__header">
      <div class="wc-license__header__icon">
        <i :class="{'icons-auth-proc-ing-outer':isMan,'icons-auth-proc-wait-outer':!isMan}">
          <div
            :class="{'icons-auth':true, 'icons-auth-proc-ing-inner':isMan,'icons-auth-proc-wait-inner':!isMan}"
          ></div>
        </i>
        <div class="wc-license-dashed"></div>
        <i :class="{'icons-auth-proc-ing-outer':!isMan,'icons-auth-proc-wait-outer':isMan}">
          <div
            :class="{'icons-auth':true, 'icons-auth-proc-ing-inner':!isMan,'icons-auth-proc-wait-inner':isMan}"
          ></div>
        </i>
      </div>
      <div class="wc-license__header__span">
        <span :class="{'wc-license-fontColor':isMan}">身份证认证</span>
        <span :class="{'wc-license-fontColor':!isMan}">驾驶证认证</span>
      </div>
    </div>
    <!-- 大陆居民证上传 -->
    <div class="wc-license-cn" v-show="isMan&&isChina">
      <!-- 图片上传框 -->
      <div class="wc-card wc-license-card wc-license__picture">
        <div class="wc-license__picture__title">居民身份证上传</div>
        <div class="wc-license__picture__content">
          <div class="wc-license__picture__left">
            <i :class="fileURL['1'] ?'lazy-load lazy-img' :'icons-auth-cn-front-outer'">
              <div class="icons-auth icons-auth-cn-front-inner" v-if="!fileURL['1']"></div>
              <img v-lazy="fileURL['1']" :key="fileURL['1']" class="lazy-cover" v-if="fileURL['1']">
              <input type="file" @change="onUploadChange" :data-id="1" accept="image/*">
            </i>
            <i :class="!fileURL['2'] ? 'icons-auth-cn-back-outer' : 'lazy-load lazy-img'">
              <div class="icons-auth icons-auth-cn-back-inner" v-if="!fileURL['2']"></div>
              <img v-lazy="fileURL['2']" :key="fileURL['2']" class="lazy-cover" v-if="fileURL['2']">
              <input type="file" @change="onUploadChange" :data-id="2" accept="image/*">
            </i>
          </div>
          <div class="wc-license__picture__right">
            <i :class="fileURL['3'] ?'lazy-load lazy-img' :'icons-auth-cn-photo-outer'">
              <div class="icons-auth icons-auth-cn-photo-inner" v-if="!fileURL['3']"></div>
              <img v-lazy="fileURL['3']" :key="fileURL['3']" class="lazy-cover" v-if="fileURL['3']">
              <input type="file" @change="onUploadChange" :data-id="3" accept="image/*">
            </i>
          </div>
        </div>
      </div>
      <!-- 信息采集框 -->
      <div class="wc-card wc-license-card wc-license__message">
        <div class="wc-license__picture__title">身份证信息采集</div>
        <div class="wc-license__message__input">
          <span
            class="wc-license__message__input--text wc-license__message__input--text--w120"
          >姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span>：
          <div>
            <x-input class="wc-license__message__input--border" v-model="name"></x-input>
          </div>
        </div>
        <div class="wc-license__message__input">
          <span class="wc-license__message__input--text">身份证号：</span>
          <div>
            <x-input class="wc-license__message__input--border" v-model="cardNo"></x-input>
          </div>
        </div>
      </div>
      <div class="wc-license__text" @click="changeIsChina">
        <span>港、澳、台及国际证件信息认证入口</span>
        <i class="icons-auth-left-outer">
          <div class="icons-auth icons-auth-left-inner"></div>
        </i>
      </div>
      <button
        class="wc-btn wc-btn--yellow wc-btn--w600 wc-btn--h85"
        v-xy-moving-btn
        @click="changeIsMan"
      >下一步</button>
    </div>
    <!-- 非大陆居民证上传 -->
    <div class="wc-license-cn" v-show="!isChina&&isMan">
      <!-- 图片上传框 -->
      <div class="wc-card wc-license-card wc-license__picture">
        <div class="wc-license__picture__title">非大陆居民证上传</div>
        <div class="wc-license__picture__content">
          <div class="wc-license__picture__left">
            <i :class="fileURL['1'] ?'lazy-load lazy-img' :'icons-auth-ot-front-outer'">
              <div class="icons-auth icons-auth-ot-front-inner" v-if="!fileURL['1']"></div>
              <img v-lazy="fileURL['1']" :key="fileURL['1']" class="lazy-cover" v-if="fileURL['1']">
              <input type="file" @change="onUploadChange" :data-id="1" accept="image/*">
            </i>
            <i :class="!fileURL['2'] ? 'icons-auth-ot-back-outer' : 'lazy-load lazy-img'">
              <div class="icons-auth icons-auth-ot-back-inner" v-if="!fileURL['2']"></div>
              <img v-lazy="fileURL['2']" :key="fileURL['2']" class="lazy-cover" v-if="fileURL['2']">
              <input type="file" @change="onUploadChange" :data-id="2" accept="image/*">
            </i>
          </div>
          <div class="wc-license__picture__right">
            <i :class="fileURL['3'] ?'lazy-load lazy-img' :'icons-auth-cn-photo-outer'">
              <div class="icons-auth icons-auth-cn-photo-inner" v-if="!fileURL['3']"></div>
              <img v-lazy="fileURL['3']" :key="fileURL['3']" class="lazy-cover" v-if="fileURL['3']">
              <input type="file" @change="onUploadChange" :data-id="3" accept="image/*">
            </i>
          </div>
        </div>
      </div>
      <!-- 信息采集框 -->
      <div class="wc-card wc-license-card wc-license__message">
        <div class="wc-license__picture__title">非大陆居民证信息采集</div>
        <div class="wc-license__message__input">
          <span
            class="wc-license__message__input--text wc-license__message__input--text--w120"
          >姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span>：
          <div>
            <x-input class="wc-license__message__input--border" v-model="name"></x-input>
          </div>
        </div>
        <div class="wc-license-solid"></div>
        <div class="wc-license__message__input">
          <span class="wc-license__message__input--text">证件编号：</span>
          <div>
            <x-input class="wc-license__message__input--border" v-model="cardNo"></x-input>
          </div>
        </div>
      </div>
      <div class="wc-license__text" @click="changeIsChina">
        <span>大陆居民证件信息认证入口</span>
        <i class="icons-auth-left-outer">
          <div class="icons-auth icons-auth-left-inner"></div>
        </i>
      </div>
      <button
        class="wc-btn wc-btn--yellow wc-btn--w600 wc-btn--h85"
        v-xy-moving-btn
        @click="changeIsMan"
      >下一步</button>
    </div>
    <!-- 驾驶证上传 -->
    <div class="wc-license-cn" v-if="!isMan">
      <!-- 图片上传框 -->
      <div class="wc-card wc-license-card wc-card-car">
        <div class="wc-license__picture__title">驾驶证证上传</div>
        <div class="wc-card-car__content">
          <i :class="fileURL['4'] ?'lazy-load lazy-img' :'icons-auth-license-front-outer'">
            <div class="icons-auth icons-auth-license-front-inner" v-if="!fileURL['4']"></div>
            <img v-lazy="fileURL['4']" :key="fileURL['4']" class="lazy-cover" v-if="fileURL['4']">
            <input type="file" @change="onUploadChange" :data-id="4" accept="image/*">
          </i>
          <i :class="!fileURL['5'] ? 'icons-auth-license-back-outer' : 'lazy-load lazy-img'">
            <div class="icons-auth icons-auth-license-back-inner" v-if="!fileURL['5']"></div>
            <img v-lazy="fileURL['5']" :key="fileURL['5']" class="lazy-cover" v-if="fileURL['5']">
            <input type="file" @change="onUploadChange" :data-id="5" accept="image/*">
          </i>
        </div>
      </div>
      <!-- 信息采集框 -->
      <div class="wc-card wc-license-card wc-license__message">
        <div class="wc-license__picture__title">驾驶证信息采集</div>
        <div class="wc-license__message__input--car">
          <span>初次领证日期：</span>
          <div>
            <x-input v-model="driverCardStartTime"></x-input>
          </div>
        </div>
        <div class="wc-license__message__input--car">
          <span>驾驶证有效期：</span>
          <div>
            <x-input class="wc-license__message__input--border" v-model="driverValidEndTime"></x-input>
          </div>
        </div>
        <div class="wc-license__message__input--car">
          <span>档案编号(副页)：</span>
          <div>
            <x-input v-model="driverArchivesNo"></x-input>
          </div>
        </div>
      </div>
      <button
        class="wc-btn wc-btn--yellow wc-btn--w600 wc-btn--h85 wc-btn-m350"
        v-xy-moving-btn
        @click="OnSubmit"
      >提交</button>
    </div>
  </div>
</template>

<script>
import common from "~/mixins/common";
import seo from "~/mixins/seo";
import wxMixin from "~/mixins/wx-mixin";
import components from "~/plugins/components";
import _ from "lodash";
import { setTimeout } from 'timers';

export default {
  mixins: [common, wxMixin, seo],
  components: {},
  data() {
    return {
      pageTitle: "身份认证",
      isMan: true,
      isChina: true,
      name: "",
      cardNo: "",
      driverArchivesNo: "",
      driverCardStartTime:'',
      driverValidEndTime: "",
      fileDir: "userValidateCarH5",
      fileURL: {
        "1": undefined,
        "2": undefined,
        "3": undefined,
        "4": undefined,
        "5": undefined
      },
      id: null,
      toast: [
        "请上传身份证正面照片",
        "请上传身份证反面照片",
        "请上传手持身份证照片",
        "请上传驾驶证人脸页",
        "请上传驾驶证副页"
      ]
    };
  },
  watch: {
    "$store.state.wxAuthStatus": function(v) {
      let that = this;
      // 需要授权才可以加载的数据(授权比页面装载慢)
      if (v) {
        // console.log(`%c${that.$route.fullPath} wxAuthStatus`, 'font-size:20px;color:blue;')
      }
    }
  },
  methods: {
    //切换顶部文字颜色
    changeIsMan() {
      let that = this;
      that.id = _.findKey(that.fileURL, function(o) {
        return o == undefined;
      });
      // console.log(that.id);
      if (that.isChina) {
        if (that.id <= 3) {
          that.$wc.toast(that.toast[that.id - 1]);
        } else if (that.id > 3 && !that.name) {
          that.$wc.toast("姓名不能为空");
        } else if (that.id > 3 && !that.cardNo) {
          that.$wc.toast("身份证号码不能为空");
        } else {
          that.isMan = false;
          that.pageTitle = "驾驶认证";
        }
      } else {
        let toast = [
          "前上传通行证正面照片",
          "前上传通行证反面照片",
          "请上传手持通行证照片"
        ];
        if (that.id <= 3) {
          that.$wc.toast(toast[that.id - 1]);
        } else if (that.id > 3 && !that.name) {
          that.$wc.toast("姓名不能为空");
        } else if (that.id > 3 && !that.cardNo) {
          that.$wc.toast("证件编号不能为空");
        } else {
          that.isMan = false;
          that.pageTitle = "驾驶认证";
        }
      }
    },
    //提交
    async OnSubmit() {
      let that = this;
      that.id = _.findKey(that.fileURL, function(o) {
        return o == undefined;
      });
      if (that.id > 3) {
        that.$wc.toast(that.toast[that.id - 1]);
      } else if (!that.id && !that.driverValidEndTime) {
        that.$wc.toast("驾驶证有效期至不能为空");
      } else if (!that.id && !that.driverArchivesNo) {
        that.$wc.toast("档案编号不能为空");
      } else {
        let { success, bizContent } = await that.$api.common[
          "upload/identification_document_submit"
        ]({
          name: that.name, //	姓名	是	String
          cardNo: that.cardNo, //	身份证号码	是	String
          driverArchivesNo: that.driverArchivesNo, //	驾驶证档案编号	是	String
          driverCardStartTime:that.driverCardStartTime,
          driverValidEndTime: that.driverValidEndTime, //	驾驶证有效期（结束）	是	String
          fileURL1: that.fileURL["1"], //	身份证正面照片地址	是	String
          fileURL2: that.fileURL["2"], //	身份证反面照片地址	是	String
          fileURL3: that.fileURL["3"], //	身份证手持照片地址	是	String
          fileURL4: that.fileURL["4"], //	驾驶证正面照片地址	是	String
          fileURL5: that.fileURL["5"] //	驾驶证副页照片地址	是	String
        });
        if (success ) {
          that.$wc.toast("提交成功");
          await that.$store.dispatch('updateUserInfo')
          setTimeout(function(){
          that.$router.replace({ path: "/home" })
          },1500)
          
        }
      }
    },
    //切换大陆与非大陆认证视图
    changeIsChina() {
      this.fileURL = {
        "1": undefined,
        "2": undefined,
        "3": undefined,
        "4": undefined,
        "5": undefined
      };
      this.isChina = !this.isChina;
    },
    //单图片上传
    async onUploadChange({ currentTarget }) {
      let {
        files,
        dataset: { id }
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
        let { bizContent } = await that.$api.common["upload/file_upload"]({
          file: files,
          fileDir: that.fileDir
        });
        that.$set(that.fileURL, id, bizContent[0].fileURL);
        let url = bizContent[0].fileURL;
        if (id == "1" && that.isChina) {
          that.OnIdcard(url);
        } else if (id == "4") {
          that.OnDriving(url);
        }
      }
      // that.$vux.loading.hide();
    },
    //身份证文字识别
    async OnIdcard(url) {
      let that = this;
      let { success, bizContent } = await that.$api.common[
        "upload/baidu_ai_idcard"
      ]({
        url: url,
        id_card_side: "front"
      });
      if (success && bizContent) {
        that.name = JSON.parse(bizContent).words_result.姓名.words;
        that.cardNo = JSON.parse(bizContent).words_result.公民身份号码.words;
      }
       that.OnCheckIdcard(that.cardNo)
    },
    //校验身份证是否重复
    async OnCheckIdcard(cardNo){
        let that = this
        let {success, bizContent} = await that.$api.common['upload/check_cardno_is_repeat']({
             cardNo:cardNo,
          })
          if (success && bizContent) {
              console.log(bizContent)
           }
      },
    //驾驶证文字识别
    async OnDriving(url) {
      let that = this;
      let { success, bizContent } = await that.$api.common[
        "upload/baidu_ai_driving_license"
      ]({
        url: url
      });
      if (success && bizContent) {
          that.driverValidEndTime = that.formdata(JSON.parse(bizContent).words_result.至.words);
          that.driverCardStartTime = that.formdata(JSON.parse(bizContent).words_result.初次领证日期.words);
      }
    },
    formdata(str){
      let str1= str.substring(0,4);
      let str2= str.substring(4,6);
      let str3= str.substring(6);
      return str1+'-'+str2+'-'+str3
    }
  },
  created() {
    let that = this;
    that.type = that.$route.params.type;
    // 需要授权才可以加载的数据(授权比页面装载快)
    if (that.$store.state.wxAuthStatus) {
      // console.log(`%c${that.$route.fullPath} created`, 'font-size:20px;color:blue;')
    }
    // 无需授权可以提前加载的数据
  }
};
</script>
