<style lang="scss">
  @import "~vue-xy-ui/dist/mixin";
  @import "~assets/scss/value";

  .wc-order {
    .wc-card {
      padding: 0 rsh(10);
    }
    .wc-order__point {
      display: flex;
      align-items: center;
      font-size: rsh(24);
      color: #666;
      line-height: rsh(40);
      & > span {
        margin-left: rsh(32);
      }
    }
  }
</style>

<template>
  <div class="wc-order"
       v-xy-pull-refresh="pullRefresh">
    <xy-reach-bottom threshold="100"
                     @on-bottom="onBottom"></xy-reach-bottom>
    <!--<div class="wc-card">-->
    <!--<router-link class="wc-box"-->
    <!--tag="a"-->
    <!--to="/my/order/detail"-->
    <!--v-xy-hover-btn>-->
    <!--<div class="wc-box__ct">-->
    <!--<div class="wc-box__title wc-box__title&#45;&#45;f30">粤CST2222</div>-->
    <!--<div class="wc-box__sub">10月20日 12:11</div>-->
    <!--<div class="wc-box__text wc-box__text&#45;&#45;f30 wc-box__text&#45;&#45;c999">已完成</div>-->
    <!--<button class="wc-box__select">-->
    <!--<i class="icons-common-gt-outer">-->
    <!--<div class="icons-common icons-common-gt-inner"></div>-->
    <!--</i>-->
    <!--</button>-->
    <!--</div>-->
    <!--</router-link>-->
    <!--<a class="wc-box wc-box&#45;&#45;pw30">-->
    <!--<div class="wc-box__ct">-->
    <!--<div class="wc-box__title">-->
    <!--<section class="wc-order__point">-->
    <!--<i class="icons-common-order-get-outer">-->
    <!--<div class="icons-common icons-common-order-get-inner"></div>-->
    <!--</i>-->
    <!--<span>珍珠乐园南地面停车场</span>-->
    <!--</section>-->
    <!--<section class="wc-order__point">-->
    <!--<i class="icons-common-order-return-outer">-->
    <!--<div class="icons-common icons-common-order-return-inner"></div>-->
    <!--</i>-->
    <!--<span>珍珠乐园南地面停车场</span>-->
    <!--</section>-->
    <!--</div>-->
    <!--<div class="wc-box__text wc-box__text&#45;&#45;f30">-->
    <!--98.03元-->
    <!--</div>-->
    <!--</div>-->
    <!--</a>-->
    <!--</div>-->
    <div class="wc-card"
         v-for="item in list"
         :key="item.orderId">
      <router-link class="wc-box"
                   tag="a"
                   :to="`/my/order/detail?id=${item.orderId}`"
                   v-xy-hover-btn>
        <div class="wc-box__ct">
          <div class="wc-box__title wc-box__title--f30">{{item.carLpn}}</div>
          <div class="wc-box__sub">{{item.appointmentTime | formatDate('MM月dd日 hh:mm')}}</div>
          <div class="wc-box__text wc-box__text--f30 wc-box__text--c999">{{statusEnum[item.orderStatus]}}</div>
          <button class="wc-box__select">
            <i class="icons-common-gt-outer">
              <div class="icons-common icons-common-gt-inner"></div>
            </i>
          </button>
        </div>
      </router-link>
      <a class="wc-box wc-box--pw30">
        <div class="wc-box__ct">
          <div class="wc-box__title">
            <section class="wc-order__point">
              <i class="icons-common-order-get-outer">
                <div class="icons-common icons-common-order-get-inner"></div>
              </i>
              <span>{{item.appointmentBranchName}}</span>
            </section>
            <section class="wc-order__point">
              <i class="icons-common-order-return-outer">
                <div class="icons-common icons-common-order-return-inner"></div>
              </i>
              <span>{{item.returnCarBranchName}}</span>
            </section>
          </div>
          <div class="wc-box__text wc-box__text--f30">
            {{item.orderMny | wcNumFormat}}元
          </div>
        </div>
      </a>
    </div>
    <xy-list-status :status="status"
                    :bottom="100">
      <span slot="nomore">~ 没有更多了 ~</span>
      <div slot="empty">
        <span>您还没有订单呢</span>
      </div>
    </xy-list-status>
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
        pageTitle: '我的订单',
        startLoad: false,
        //
        status: '',
        list: [],
        page: 1,
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
          await that.loadList()
        }
      }
    },
    methods: {
      async pullRefresh (stop) {
        let that = this
        that.stop = stop
        that.page = 1
        that.list = []
        await that.loadList()
        that.stop()
      },
      async onBottom () {
        let that = this
        await that.loadList()
      },
      async loadList () {
        let that = this
        that.status = 'loading'
        let {success, bizContent} = await that.$api.warmcar['time_rental/order_list']({
          page: that.page
        })
        if (success && bizContent && bizContent.rows && bizContent.rows.length > 0) {
          let temp = bizContent.rows
          if (that.page === 1) {
            that.list = temp
          } else {
            that.list = that.list.concat(temp)
          }
          that.page++
          that.status = ''
        } else {
          if (that.list.length > 0) {
            that.status = 'nomore'
          } else {
            that.status = 'empty'
          }
        }
      },
      async loadStatus () {
        let that = this
        let {success, bizContent} = await that.$api.warmcar['query/dic_list']({
          dicId: 81
        })
        if (success && bizContent) {
          bizContent.forEach(function (item) {
            that.statusEnum[item.code] = item.msg
          })
        }
      }
    },
    async created () {
      let that = this
      // 需要授权才可以加载的数据(授权比页面装载快)
      if (that.$store.state.wxAuthStatus && !that.startLoad) {
        that.startLoad = true
        //
        await that.loadStatus()
        await that.loadList()
      }
      // 无需授权可以提前加载的数据
    }
  }
</script>