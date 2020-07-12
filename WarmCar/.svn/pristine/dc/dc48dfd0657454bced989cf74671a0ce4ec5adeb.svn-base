<style lang="scss">
  @import "~vue-xy-ui/dist/mixin";
  @import "~assets/scss/value";

  .wc-my-punish {
    .wc-card {
      padding: 0 rsh(10);
    }
    .wc-my-punish__detail {
      padding: rsh(10) 0 rsh(23) 0;
      line-height: rsh(42);
      font-size: rsh(24);
      label {
        &:not(:first-child) {
          margin-left: rsh(40);
        }
      }
      .wc-my-punish__detail__des {
        color: #666;
      }
      .wc-my-punish__detail__time {
        color: #999;
      }
    }
  }
</style>

<template>
  <div class="wc-my-punish"
       v-xy-pull-refresh="pullRefresh">
    <xy-reach-bottom threshold="100"
                     @on-bottom="onBottom"></xy-reach-bottom>
    <!--<router-link tag="a"-->
    <!--to="/my/punish/detail"-->
    <!--class="wc-card"-->
    <!--v-xy-hover-btn>-->
    <!--<a class="wc-box">-->
    <!--<div class="wc-box__ct">-->
    <!--<div class="wc-box__title wc-box__title&#45;&#45;f24">-->
    <!--<span>违章车辆：</span><span>粤CST000</span>-->
    <!--</div>-->
    <!--<div class="wc-box__text wc-box__text&#45;&#45;f26 wc-box__text&#45;&#45;cm">-->
    <!--未处理-->
    <!--</div>-->
    <!--</div>-->
    <!--</a>-->
    <!--<a class="wc-box">-->
    <!--<div class="wc-box__ct wc-my-punish__detail">-->
    <!--<div>-->
    <!--<div>-->
    <!--<label>罚款：</label><span>￥</span><span>600</span><label>扣分：</label><span>6</span><span>分</span>-->
    <!--</div>-->
    <!--<div class="wc-my-punish__detail__des">-->
    <!--违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章-->
    <!--</div>-->
    <!--<div class="wc-my-punish__detail__time">-->
    <!--<span>2018年5月11日</span>&nbsp;<span>星期{{dayEnum[0]}}</span>&nbsp;<span>13:11</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</a>-->
    <!--</router-link>-->
    <!--<router-link tag="a"-->
    <!--to="/my/punish/detail"-->
    <!--class="wc-card"-->
    <!--v-xy-hover-btn>-->
    <!--<a class="wc-box">-->
    <!--<div class="wc-box__ct">-->
    <!--<div class="wc-box__title wc-box__title&#45;&#45;f24">-->
    <!--<span>违章车辆：</span><span>粤CST000</span>-->
    <!--</div>-->
    <!--<div class="wc-box__text wc-box__text&#45;&#45;f26 wc-box__text&#45;&#45;cg">-->
    <!--已处理-->
    <!--</div>-->
    <!--</div>-->
    <!--</a>-->
    <!--<a class="wc-box">-->
    <!--<div class="wc-box__ct wc-my-punish__detail">-->
    <!--<div>-->
    <!--<div>-->
    <!--<label>罚款：</label><span>￥</span><span>600</span><label>扣分：</label><span>6</span><span>分</span>-->
    <!--</div>-->
    <!--<div class="wc-my-punish__detail__des">-->
    <!--违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章违章-->
    <!--</div>-->
    <!--<div class="wc-my-punish__detail__time">-->
    <!--<span>2018年5月11日</span>&nbsp;<span>星期{{dayEnum[1]}}</span>&nbsp;<span>13:11</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</a>-->
    <!--</router-link>-->
    <a v-for="item in list"
       :key="item.trafficViolationId"
       @click="onDetail(item)"
       class="wc-card"
       v-xy-hover-btn>
      <a class="wc-box">
        <div class="wc-box__ct">
          <div class="wc-box__title wc-box__title--f24">
            <span>违章车辆：</span><span>{{item.carLpn}}</span>
          </div>
          <div class="wc-box__text wc-box__text--f26 wc-box__text--cg">
            {{statusEnum[item.trafficVolationStatus]}}
          </div>
        </div>
      </a>
      <a class="wc-box">
        <div class="wc-box__ct wc-my-punish__detail">
          <div>
            <div>
              <label>罚款：</label><span>￥</span><span>{{item.trafficViolationMny | wcNumFormat}}</span><label>扣分：</label><span>{{item.trafficViolationScore}}</span><span>分</span>
            </div>
            <div class="wc-my-punish__detail__des">
              {{item.trafficViolationDesc}}
            </div>
            <div class="wc-my-punish__detail__time">
              <span>{{item.trafficViolationTime | formatDate('yyyy年MM月dd日')}}</span>&nbsp;<span>星期{{item.day}}</span>&nbsp;<span>{{item.trafficViolationTime | formatDate('hh:mm')}}</span>
            </div>
          </div>
        </div>
      </a>
    </a>
    <xy-list-status :status="status"
                    :bottom="100">
      <span slot="nomore">~ 没有更多了 ~</span>
      <div slot="empty">
        <span>您还没有违章记录呢</span>
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
        pageTitle: '我的违章',
        startLoad: false,
        //
        status: '',
        list: [],
        page: 1,
        statusEnum: {
          '01': '待处理',
          '02': '待审核',
          '03': '审核成功',
          '04': '审核失败'
        },
        dayEnum: [
          '一', '二', '三', '四', '五', '六', '日'
        ]
      }
    },
    watch: {
      '$store.state.wxAuthStatus': async function (v) {
        let that = this
        // 需要授权才可以加载的数据(授权比页面装载慢)
        if (v && !that.startLoad) {
          that.startLoad = true
          //
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
        let {success, bizContent} = await that.$api.warmcar['query/traffic_violation_list']({
          page: that.page
        })

        if (success && bizContent && bizContent.rows && bizContent.rows.length > 0) {
          let temp = bizContent.rows.map(o => Object.assign(o, {
            day: that.dayEnum[(new Date(o.trafficViolationTime)).getDay() - 1]
          }))
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
      onDetail (item) {
        let that = this
        that.$store.commit('punishDetail', item)
        that.$router.push('/my/punish/detail')
      }
    },
    async created () {
      let that = this
      // 需要授权才可以加载的数据(授权比页面装载快)
      if (that.$store.state.wxAuthStatus && !that.startLoad) {
        that.startLoad = true
        //
        await that.loadList()
      }
      // 无需授权可以提前加载的数据
    }
  }
</script>