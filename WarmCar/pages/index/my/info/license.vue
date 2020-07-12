<style lang="scss">
  @import "~vue-xy-ui/dist/mixin";
  @import "~assets/scss/value";

  .wc-my-info-license {
    .wc-box {
      .wc-box__title {
        width: 8em;
      }
      .wc-box__text {
        text-align: left;
      }
    }
  }
</style>

<template>
  <div class="wc-my-info-license">
    <div class="wc-card">
      <a class="wc-box wc-box--pl15 wc-box--ph95"
         v-xy-hover-btn>
        <div class="wc-box__ct">
          <div class="wc-box__title wc-box__title--f30">姓名</div>
          <div class="wc-box__text">杨XX</div>
          <button class="wc-box__link">
            <i class="icons-common-gt-outer">
              <div class="icons-common icons-common-gt-inner"></div>
            </i>
          </button>
        </div>
      </a>
      <a class="wc-box wc-box--pl15 wc-box--ph95"
         v-xy-hover-btn>
        <div class="wc-box__ct">
          <div class="wc-box__title wc-box__title--f30">证件号</div>
          <div class="wc-box__text">440402198900000000</div>
          <button class="wc-box__link">
            <i class="icons-common-gt-outer">
              <div class="icons-common icons-common-gt-inner"></div>
            </i>
          </button>
        </div>
      </a>
      <a class="wc-box wc-box--pl15 wc-box--ph95"
         v-xy-hover-btn>
        <div class="wc-box__ct">
          <div class="wc-box__title wc-box__title--f30">驾驶证类型</div>
          <div class="wc-box__text">C1</div>
          <button class="wc-box__link">
            <i class="icons-common-gt-outer">
              <div class="icons-common icons-common-gt-inner"></div>
            </i>
          </button>
        </div>
      </a>
      <a class="wc-box wc-box--pl15 wc-box--ph95"
         v-xy-hover-btn>
        <div class="wc-box__ct">
          <div class="wc-box__title wc-box__title--f30">驾驶证到期时间</div>
          <div class="wc-box__text">2018-10-10</div>
          <button class="wc-box__link">
            <i class="icons-common-gt-outer">
              <div class="icons-common icons-common-gt-inner"></div>
            </i>
          </button>
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
        pageTitle: '身份认证',
        startLoad: false,
        //
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
    methods: {},
    created () {
      let that = this
      // 需要授权才可以加载的数据(授权比页面装载快)
      if (that.$store.state.wxAuthStatus && !that.startLoad) {
        that.startLoad = true
        //
      }
      // 无需授权可以提前加载的数据
    }
  }
</script>