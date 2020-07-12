<style lang="scss">
  @import "~vue-xy-ui/dist/mixin";

  .wc-my {
    .wc-box {
      &:first-child {
        .wc-box__ct {
          padding-top: rsh(50);
          padding-bottom: rsh(50);
        }
      }
    }
    .wc-my__account {
      font-size: rsh(32);
    }
    .wc-my__status {
      font-size: rsh(24);
      display: flex;
      align-items: center;
      & > i {
        margin-right: rsh(5);
      }
    }
    .wc-version {
      position: fixed;
      bottom: rsh(130);
      bottom: calc(env(safe-area-inset-bottom) + #{rsh(130)});
      width: 100%;
      display: flex;
      justify-content: center;
      color: #fff;
      font-size: 12px;
      line-height: 14px;
      transform: scale(.8);
      opacity: .8;
      & > span {
        background-color: rgba(0, 0, 0, .1);
        border-radius: 7px;
        padding: 0 4px;
      }
    }
  }
</style>

<template>
  <div class="wc-my">
    <div class="wc-card">
      <router-link tag="a"
                   to="/my/info"
                   class="wc-box wc-box--pl15 wc-box--ph95"
                   v-xy-hover-btn>
        <div class="wc-box__ct">
          <!--<i class="wc-box__icon icons-common-my-user-outer">-->
          <!--<div class="icons-common icons-common-my-user-inner"></div>-->
          <!--</i>-->
          <div class="wc-box__title">
            <div class="wc-my__account">{{$store.state.userInfo.phone}}</div>
            <div class="wc-my__status">
              <i class="icons-common-my-selected-outer"
                 v-show="$store.state.userStatus.certificationStatus==='05'">
                <div class="icons-common icons-common-my-selected-inner"></div>
              </i>
              <i class="icons-common-my-unselected-outer"
                 v-show="$store.state.userStatus.certificationStatus!=='05'">
                <div class="icons-common icons-common-my-unselected-inner"></div>
              </i>
              <span>{{statusText}}</span>
            </div>
          </div>
          <button class="wc-box__select">
            <i class="icons-common-gt-outer">
              <div class="icons-common icons-common-gt-inner"></div>
            </i>
          </button>
        </div>
      </router-link>
      <router-link class="wc-box"
                   tag="a"
                   to="/my/wallet"
                   v-xy-hover-btn>
        <div class="wc-box__ct">
          <i class="wc-box__icon icons-common-my-wallet-outer">
            <div class="icons-common icons-common-my-wallet-inner"></div>
          </i>
          <div class="wc-box__title">我的钱包</div>
          <button class="wc-box__select">
            <i class="icons-common-gt-outer">
              <div class="icons-common icons-common-gt-inner"></div>
            </i>
          </button>
        </div>
      </router-link>
      <router-link class="wc-box"
                   tag="a"
                   to="/my/order?from=my"
                   v-xy-hover-btn>
        <div class="wc-box__ct">
          <i class="wc-box__icon icons-common-my-order-outer">
            <div class="icons-common icons-common-my-order-inner"></div>
          </i>
          <div class="wc-box__title">我的订单</div>
          <button class="wc-box__select">
            <i class="icons-common-gt-outer">
              <div class="icons-common icons-common-gt-inner"></div>
            </i>
          </button>
        </div>
      </router-link>
      <router-link class="wc-box"
                   tag="a"
                   to="/my/punish"
                   v-xy-hover-btn>
        <div class="wc-box__ct">
          <i class="wc-box__icon icons-common-my-punish-outer">
            <div class="icons-common icons-common-my-punish-inner"></div>
          </i>
          <div class="wc-box__title">违章记录</div>
          <button class="wc-box__select">
            <i class="icons-common-gt-outer">
              <div class="icons-common icons-common-gt-inner"></div>
            </i>
          </button>
        </div>
      </router-link>
      <a class="wc-box"
         :href="$store.state.systemInfo.params['warmcar.help']"
         v-xy-hover-btn>
        <div class="wc-box__ct">
          <i class="wc-box__icon icons-common-my-book-outer">
            <div class="icons-common icons-common-my-book-inner"></div>
          </i>
          <div class="wc-box__title">使用指南</div>
          <button class="wc-box__select">
            <i class="icons-common-gt-outer">
              <div class="icons-common icons-common-gt-inner"></div>
            </i>
          </button>
        </div>
      </a>
      <a class="wc-box"
         @click="onService"
         v-xy-hover-btn>
        <div class="wc-box__ct">
          <i class="wc-box__icon icons-common-my-server-outer">
            <div class="icons-common icons-common-my-server-inner"></div>
          </i>
          <div class="wc-box__title">联系客服</div>
          <button class="wc-box__select">
            <i class="icons-common-gt-outer">
              <div class="icons-common icons-common-gt-inner"></div>
            </i>
          </button>
        </div>
      </a>
    </div>
    <div class="wc-version"><span>{{new Date() | formatDate('V.yyMMddhhmm')}}</span></div>
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
        pageTitle: '我的',
        startLoad: false,
        //
        statusEnum: {}
      }
    },
    watch: {
      '$store.state.wxAuthStatus': async function (v) {
        let that = this
        // 需要授权才可以加载的数据(授权比页面装载慢)
        if (v && !that.startLoad) {
          that.startLoad = true
          //
          await that.loadStatus()
          await that.$store.dispatch('updateUserInfo')
        }
      }
    },
    computed: {
      statusText () {
        let that = this
        switch (that.$store.state.userStatus.certificationStatus) {
          case '06':
            return '已完成认证'
            break
          case '05':
            return '已完成认证'
            break
          case '03':
            return '审核未通过'
            break
          case '02':
            return '等待审核中'
            break
          case '04':
            return '等待审核中'
            break
          default:
            return '未认证'
        }
      }
    },
    methods: {
      onClick () {
        console.log('onClick')
      },
      async loadStatus () {
        let that = this
        let {success, bizContent} = await that.$api.warmcar['query/dic_list']({
          dicId: 56
        })
        if (success && bizContent) {
          bizContent.forEach(function (item) {
            that.statusEnum[item.code] = item.msg
          })
        }
      },
      async onService () {
        let that = this
        let {success, bizContent} = await that.$api.warmcar['query/city_service_phone']({
          cityCode: that.$store.state.location.cityCode
        })
        if (success && bizContent) {
          window.location.href = `${that.$store.state.systemInfo.params['warmcar.customer.service.center.h5.url']}?serviceHotline=${bizContent.phone}`
        }
      }
    },
    async created () {
      let that = this
      that.type = that.$route.params.type
      // 需要授权才可以加载的数据(授权比页面装载快)
      if (that.$store.state.wxAuthStatus && !that.startLoad) {
        that.startLoad = true
        //
        await that.loadStatus()
        await that.$store.dispatch('updateUserInfo')
      }
      // 无需授权可以提前加载的数据
    }
  }
</script>