<style lang="scss">
  @import "~vue-xy-ui/dist/mixin";
  @import "~assets/scss/value";

  .wc-order-more {

  }
</style>

<template>
  <div class="wc-order-more">
    <div class="wc-card">
      <a class="wc-box">
        <div class="wc-box__ct">
          <div class="wc-box__title wc-box__title--f30 wc-box__title--c666">取车网点</div>
          <div class="wc-box__text wc-box__text--f30">{{detail.appointmentBranchName}}</div>
        </div>
      </a>
      <a class="wc-box">
        <div class="wc-box__ct">
          <div class="wc-box__title wc-box__title--f30 wc-box__title--c666">取车时间</div>
          <div class="wc-box__text wc-box__text--f30"
               v-show="detail.appointmentTime">{{detail.appointmentTime | formatDate('yyyy年MM月dd日 hh:mm')}}
          </div>
        </div>
      </a>
      <a class="wc-box">
        <div class="wc-box__ct">
          <div class="wc-box__title wc-box__title--f30 wc-box__title--c666">地址</div>
          <div class="wc-box__text wc-box__text--f30">{{detail.appointmentBranchAddress}}</div>
        </div>
      </a>
    </div>
    <div class="wc-card">
      <a class="wc-box">
        <div class="wc-box__ct">
          <div class="wc-box__title wc-box__title--f30 wc-box__title--c666">还车网点</div>
          <div class="wc-box__text wc-box__text--f30">{{detail.returnCarBranchName}}</div>
        </div>
      </a>
      <a class="wc-box">
        <div class="wc-box__ct">
          <div class="wc-box__title wc-box__title--f30 wc-box__title--c666">还车时间</div>
          <div class="wc-box__text wc-box__text--f30"
               v-show="detail.returnCarTime">{{detail.returnCarTime | formatDate('yyyy年MM月dd日 hh:mm')}}
          </div>
        </div>
      </a>
      <a class="wc-box">
        <div class="wc-box__ct">
          <div class="wc-box__title wc-box__title--f30 wc-box__title--c666">地址</div>
          <div class="wc-box__text wc-box__text--f30">{{detail.returnCarBranchAddress}}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import common from '~/mixins/common'
  import seo from '~/mixins/seo'
  import wxMixin from '~/mixins/wx-mixin'

  export default {
    mixins: [common, wxMixin, seo],
    components: {},
    data () {
      return {
        pageTitle: '',
        startLoad: false,
        //
        id: 0,
        detail: {
          costList: [],
          evaluationContent: {},
          orderShare: {}
        }
      }
    },
    watch: {
      '$store.state.wxAuthStatus': async function (v) {
        let that = this
        // 需要授权才可以加载的数据(授权比页面装载慢)
        if (v && !that.startLoad) {
          that.startLoad = true
          //
          await that.loadAll()
        }
      }
    },
    methods: {
      async loadAll () {
        let that = this
        let {success, bizContent} = await that.$api.warmcar['time_rental/order_detail']({
          orderId: that.id
        })
        if (success && bizContent) {
          that.detail = bizContent
        }
      }
    },
    async created () {
      let that = this
      that.id = that.$route.query.id
      // 需要授权才可以加载的数据(授权比页面装载快)
      if (that.$store.state.wxAuthStatus && !that.startLoad) {
        that.startLoad = true
        //
        await that.loadAll()
      }
      // 无需授权可以提前加载的数据
    }
  }
</script>