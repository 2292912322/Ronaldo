<style lang="scss">
  @import "~vue-xy-ui/dist/mixin";
  @import "~assets/scss/value";

  .wc-charge-qr {
    width: 100%;
    height: 100%;
    background: #333333;
    display: flex;
    flex-direction: column;
    align-items: center;

    .wc-charge-qr-card {
      width: rsh(626);
      height: rsh(674);
      border-radius: 3px;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: rsh(180);

      & > span {
        font-size: rsh(40);
        color: #666666;
        font-weight: bold;
        margin: rsh(40) 0 rsh(30) 0;
      }
      .wc-charge-qr-card__span {
        font-size: rsh(36);
        margin-top: rsh(70);
      }
      & > button {
        width: rsh(440);
        height: rsh(105);
        border-radius: rsh(50);
        font-size: rsh(36);
        margin-top: rsh(30);
      }
    }

    .wc-charge-qr__icons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
      margin-top: rsh(100);

      .wc-charge-qr__icons__item {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > span {
          color: #ffffff;
          font-size: rsh(24);
          margin-top: rsh(20);
        }
      }
    }
  }

</style>

<template>
  <div class="wc-charge-qr">
    <!-- 步骤一 -->
    <div class="wc-charge-qr--one"
         v-if="step==1">
      <div class="wc-charge-qr-card">
        <span>请确定充电枪已插稳</span>
        <i class="icons-charge-orthogon-outer">
          <div class="icons-charge icons-charge-orthogon-inner"></div>
        </i>
        <button class="wc-btn wc-btn--yellow "
                v-xy-moving-btn
                data-index='1'
                @click="clickStep($event)">下一步
        </button>
      </div>
      <div class="wc-charge-qr__icons">
        <div class="wc-charge-qr__icons__item">
          <i class="icons-charge-shutting-down-outer">
            <div class="icons-charge icons-charge-shutting-down-inner"></div>
          </i>
          <span>手动输入</span>
        </div>
        <div class="wc-charge-qr__icons__item">
          <i class="icons-charge-flashlight-outer">
            <div class="icons-charge icons-charge-flashlight-inner"></div>
          </i>
          <span>打开手电筒</span>
        </div>
      </div>
    </div>
    <!-- 步骤二 -->
    <div class="wc-charge-qr--two"
         v-if="step==2">
      <div class="wc-charge-qr-card">
        <span>请确定充电枪已插稳</span>
        <i class="icons-charge-push-logo-outer">
          <div class="icons-charge icons-charge-push-logo-inner"></div>
        </i>
        <button class="wc-btn wc-btn--yellow "
                v-xy-moving-btn
                data-index='2'
                @click="clickStep($event)">下一步
        </button>
      </div>
      <div class="wc-charge-qr__icons">
        <div class="wc-charge-qr__icons__item">
          <i class="icons-charge-shutting-down-outer">
            <div class="icons-charge icons-charge-shutting-down-inner"></div>
          </i>
          <span>手动输入</span>
        </div>
        <div class="wc-charge-qr__icons__item">
          <i class="icons-charge-flashlight-outer">
            <div class="icons-charge icons-charge-flashlight-inner"></div>
          </i>
          <span>打开手电筒</span>
        </div>
      </div>
    </div>
    <!-- 步骤三 -->
    <div class="wc-charge-qr--three"
         v-if="step==3">
      <div class="wc-charge-qr-card">
        <span class="wc-charge-qr-card__span">检查二维码对应枪是否正确</span>
        <i class="icons-charge-check-code-outer">
          <div class="icons-charge icons-charge-check-code-inner"></div>
        </i>
        <button class="wc-btn wc-btn--yellow "
                v-xy-moving-btn
                @click="">确定
        </button>
      </div>
      <div class="wc-charge-qr__icons">
        <div class="wc-charge-qr__icons__item">
          <i class="icons-charge-shutting-down-outer">
            <div class="icons-charge icons-charge-shutting-down-inner"></div>
          </i>
          <span>手动输入</span>
        </div>
        <div class="wc-charge-qr__icons__item">
          <i class="icons-charge-flashlight-outer">
            <div class="icons-charge icons-charge-flashlight-inner"></div>
          </i>
          <span>打开手电筒</span>
        </div>
      </div>
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
        pageTitle: '扫码充电',
        startLoad: false,
        step: 1
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
    methods: {
      clickStep ($event) {
        this.step = $event.target.dataset.index - 0 + 1
      }
    },
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
