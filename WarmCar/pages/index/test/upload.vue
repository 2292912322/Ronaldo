<style lang="scss">
@import "~vue-xy-ui/dist/mixin";

.wc-upload {
  /*width: rsh(710);*/
  /*height: rsh(200);*/
  & > i {
    display: block;
    position: relative;
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
}
</style>

<template>
  <div class="wc-upload">
    <i :class="!fileURL['1'] ? 'icons-auth-cn-back-outer' : 'lazy-load lazy-img'">
      <div class="icons-auth icons-auth-cn-back-inner"
           v-if="!fileURL['1']"></div>
      <img v-lazy="fileURL['1']"
           class="lazy-cover"
           v-if="fileURL['1']">
      <input type="file"
             @change="onUploadChange"
             :data-id='1'
             accept="image/*">
    </i>
    <!-- <i :class="fileURL['2'] ?'lazy-load lazy-img' :'icons-auth-cn-front-outer'">
      <div class="icons-auth icons-auth-cn-front-inner"
           v-if="!fileURL['2']"></div>
      <img v-lazy="fileURL['2']"
           class="lazy-cover"
           v-if="fileURL['2']">
      <input type="file"
             @change="onUploadChange"
             :data-id='2'
             accept="image/*">
    </i> -->
    <div>
      <!-- {{JSON.stringify(accessToken)}} -->
       <!-- {{JSON.stringify(imageBase)}} -->
    </div>
  </div>
</template>

<script>
  import common from '~/mixins/common'
  import seo from '~/mixins/seo'
  import wxMixin from '~/mixins/wx-mixin'
  import parseData from '~/service/parseData'
  import components from "~/plugins/components"

  export default {
    mixins: [common, wxMixin, seo],
    components: {},
    data () {
      return {
        pageTitle: '图片上传demo',
        startLoad: false,
        name: "",
        cardNo: "",
        driverArchivesNo: "",
        driverValidEndTime: "",
        fileDir: 'userValidateCarH5',
        fileURL: {},
        accessToken:'',
        imageBase:''
      }
    },
    watch: {
      '$store.state.wxAuthStatus': function (v) {
        let that = this
        // 需要授权才可以加载的数据(授权比页面装载慢)
        if (v && !that.startLoad) {
          that.startLoad = true
          //
        }
      }
    },
    methods: {
      //获取百度AI access_token
       async getAccessToken(){
         let that = this
         let {
            success,
            bizContent
          } = await that.$api.common["upload/get_baiduai_access_token"]({});
          if(success){
            let {accessToken} = bizContent
            that.accessToken = accessToken
          }
      },
      //单图片上传
       async onUploadChange ({currentTarget}) {
        let {
              files,
              dataset: {id}
            } = currentTarget
        let that = this
        let valid = false
        for (let f of files) {
          if (!valid && !/^image\//.test(f.type)) {
            valid = true
          }
        }
        if (valid) {
          that.$wc.toast(`仅能上传图片文件`)
        } else {
          that.$vux.loading.show({text: '正在上传'})
          let {bizContent} = await that.$api.common['upload/file_upload']({
            file: files,
            fileDir: that.fileDir
          })
           that.$set(that.fileURL, id, bizContent[0].fileURL)
           let url = bizContent[0].fileURL
           that.OnDriving(url);
           
        }
        that.$vux.loading.hide()
      },
      async OnIdcard(url){
        let that = this
        let {success, bizContent} = await that.$api.common['upload/baidu_ai_idcard']({
             url:url,
             id_card_side:'front'
          })
           if (success && bizContent) {
              that.name = JSON.parse(bizContent).words_result.姓名.words;
              that.cardNo = JSON.parse(bizContent).words_result.公民身份号码.words;
           }
           that.OnCheckIdcard(that.cardNo)
      },
      async OnCheckIdcard(cardNo){
        let that = this
        let {success, bizContent} = await that.$api.common['upload/check_cardno_is_repeat']({
             cardNo:cardNo,
          })
          if (success && bizContent) {
              console.log(bizContent)
           }
      },
      async OnDriving(url) {
      let that = this;
      let { success, bizContent } = await that.$api.common[
        "upload/baidu_ai_driving_license"
      ]({
        url: url
      });
      if (success && bizContent) {
        console.log(JSON.parse(bizContent))
        // that.driverValidEndTime = JSON.parse(bizContent).words_result.至.words;
        // that.driverValidEndTime = JSON.parse(bizContent).words_result.证号.words;
         that.driverValidEndTime = JSON.parse(bizContent).words_result.初次领证日期.words;
      }
    }
    },
    created () {
      let that = this
      that.type = that.$route.params.type
      // 需要授权才可以加载的数据(授权比页面装载快)
      if (that.$store.state.wxAuthStatus && !that.startLoad) {
        that.startLoad = true
        //
      }
      // 无需授权可以提前加载的数据
    }
  }
</script>