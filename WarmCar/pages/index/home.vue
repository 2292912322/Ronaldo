<style lang="scss">
  @import "~vue-xy-ui/dist/mixin";
  @import "~assets/scss/value";

  .wc-home {
    padding-top: rsh(40);
    .wc-home__auth-tips {
      padding: 0 rsh(25);
      color: #fff;
      font-size: rsh(26);
      line-height: rsh(74);
      & > section {
        padding: 0 rsh(50);
        background: #858585;
        background: rgba(0, 0, 0, .4);
        border-radius: rsh(74/2);
        display: flex;
        align-items: center;
        & > span {
          padding: 0 rsh(20);
          width: 0;
          flex-grow: 1;
        }
      }
    }
    .wc-home__title {
      font-size: rsh(26);
      font-weight: bold;
      padding: 0 rsh(40);
      line-height: rsh(60);
    }
    .wc-home__btn {
      margin-top: rsh(165);
    }
    .wc-home__selector {
      font-size: rsh(30);
      display: block;
      padding: 0 rsh(54);
      .wc-home__selector__ct {
        position: relative;
        display: flex;
        align-items: center;
        padding: rsh((108-30)/2) 0;
        & > label {
          display: block;
          width: rsh(210);
          position: relative;
          line-height: rsh(34);
          flex-shrink: 0;
          &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            width: 1px;
            height: 100%;
            background-color: $inputLineColor;
            transform: scale(0.5, 1);
          }
        }
        & > i {
          flex-shrink: 0;
        }
        .wc-home__selector__val {
          display: block;
          width: 0;
          flex-grow: 1;
          margin-left: rsh(30);
          color: $placeholderColor;
          &.wc-home__selector__val--selected {
            color: $baseFontColor;
          }
        }
      }
      &:not(:first-child) {
        .wc-home__selector__ct {
          &:before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: $inputLineColor;
            transform: scale(1, .5);
          }
        }
      }
      &:first-child {
        padding-top: rsh(20);
      }
      &:last-child {
        padding-bottom: rsh(20);
      }
    }
    .wc-home__order {
      position: relative;
      margin-top: rsh(180);
      & > a {
        position: absolute;
        top: 0;
        right: rsh(50);
        display: inline-block;
        border-radius: 50%;
        box-shadow: rsh(5) 0 rsh(10) $baseShadowColor, 0 rsh(5) rsh(10) $baseShadowColor, rsh(-5) 0 rsh(10) $baseShadowColor, 0 rsh(-5) rsh(10) $baseShadowColor;
      }
    }
  }
</style>

<template>
  <div class="wc-home">
    <router-link tag="div"
                 to="/auth/license"
                 class="wc-home__auth-tips"
                 v-if="statusText&&$store.state.authTipsVisible==='show'">
      <section>
        <i class="icons-common-home-alarm-outer">
          <div class="icons-common icons-common-home-alarm-inner"></div>
        </i>
        <span>{{statusText}}</span>
        <button @click.stop="onTipsClose"
                v-xy-moving-btn>
          <i class="icons-common-home-tips-close-outer">
            <div class="icons-common icons-common-home-tips-close-inner"></div>
          </i>
        </button>
      </section>
    </router-link>
    <div class="wc-home__title">
      选择您要租车的网点
    </div>
    <div class="wc-card">
      <router-link class="wc-home__selector"
                   tag="div"
                   to="/find/city"
                   v-xy-hover-btn>
        <div class="wc-home__selector__ct">
          <label>您所在的城市</label>
          <span class="wc-home__selector__val"
                :class="{'wc-home__selector__val--selected':$store.state.getCar.cityCode}">{{$store.state.getCar.cityCode ? $store.state.getCar.cityName : locating ? '正在获取定位' : '选择城市'}}</span>
        </div>
      </router-link>
      <div class="wc-home__selector"
           @click="onPoint"
           v-xy-hover-btn>
        <div class="wc-home__selector__ct">
          <label>取车地点</label>
          <span class="wc-home__selector__val"
                :class="{'wc-home__selector__val--selected':$store.state.getCar.branchId}">{{$store.state.getCar.branchId ? $store.state.getCar.branchName : '选择取车地点'}}</span>
          <i class="icons-common-gt-outer">
            <div class="icons-common icons-common-gt-inner"></div>
          </i>
        </div>
      </div>
    </div>
    <button class="wc-btn wc-btn--yellow wc-btn--w600 wc-btn--h85 wc-home__btn"
            @click="onUse"
            v-xy-moving-btn>立即用车
    </button>
    <div class="wc-home__order"
         v-if="$store.state.currentOrder.orderId">
      <router-link tag="a"
                   to="/car/control"
                   v-xy-moving-btn>
        <i class="icons-common-home-order-outer">
          <div class="icons-common icons-common-home-order-inner"></div>
        </i>
      </router-link>
    </div>
    <!--<router-link to="/test/box"-->
    <!--class="wc-btn wc-btn&#45;&#45;yellow wc-btn&#45;&#45;w600 wc-btn&#45;&#45;h85 wc-home__btn"-->
    <!--@click="onUse"-->
    <!--v-xy-moving-btn>测试box-->
    <!--</router-link>-->
    <!--<router-link to="/test/btn"-->
    <!--class="wc-btn wc-btn&#45;&#45;yellow wc-btn&#45;&#45;w600 wc-btn&#45;&#45;h85 wc-home__btn"-->
    <!--@click="onUse"-->
    <!--v-xy-moving-btn>测试btn-->
    <!--</router-link>-->
    <!--<router-link to="/test/card"-->
    <!--class="wc-btn wc-btn&#45;&#45;yellow wc-btn&#45;&#45;w600 wc-btn&#45;&#45;h85 wc-home__btn"-->
    <!--@click="onUse"-->
    <!--v-xy-moving-btn>测试card-->
    <!--</router-link>-->
    <!--<router-link to="/test/card-full"-->
    <!--class="wc-btn wc-btn&#45;&#45;yellow wc-btn&#45;&#45;w600 wc-btn&#45;&#45;h85 wc-home__btn"-->
    <!--@click="onUse"-->
    <!--v-xy-moving-btn>测试card-full-->
    <!--</router-link>-->
    <!--<router-link to="/test/pop"-->
    <!--class="wc-btn wc-btn&#45;&#45;yellow wc-btn&#45;&#45;w600 wc-btn&#45;&#45;h85 wc-home__btn"-->
    <!--@click="onUse"-->
    <!--v-xy-moving-btn>测试pop-->
    <!--</router-link>-->
    <!--<router-link to="/test/sign"-->
    <!--class="wc-btn wc-btn&#45;&#45;yellow wc-btn&#45;&#45;w600 wc-btn&#45;&#45;h85 wc-home__btn"-->
    <!--@click="onUse"-->
    <!--v-xy-moving-btn>测试sign-->
    <!--</router-link>-->
  </div>
</template>

<script>
  import common from '~/mixins/common'
  import seo from '~/mixins/seo'
  import wxMixin from '~/mixins/wx-mixin'
  import wcService from '~/mixins/service'

  export default {
    mixins: [common, wxMixin, seo, wcService],
    components: {},
    data () {
      let that = this
      return {
        pageTitle: '首页',
        startLoad: false,
        //
        cityCode: '',
        locating: false
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
    computed: {
      statusText () {
        let that = this
        //        if(that.$store.state.authTipsVisible&&that.$store.state.userStatus.certificationStatus!=='05'){
        //
        //        }
        //        if(that.$store.state.userStatus.certificationStatus!=='05'){
        //          that.$store.dispatch('authTipsShow')
        //        }else{
        //
        //        }
        switch (that.$store.state.userStatus.certificationStatus) {
          case '06':
            return ''
            break
          case '05':
            return ''
            break
          case '03':
            return '用车认证未通过，点击前往重新认证'
            break
          case '02':
            return '用车认证审核中'
            break
          case '04':
            return '用车认证审核中'
            break
          default:
            return '您尚未进行用车认证，点击前往认证'
        }
      }
    },
    methods: {
      onUse () {
        let that = this
        if (that.$store.state.getCar.branchId) {
          that.$router.push(`/find/car?id=${that.$store.state.getCar.branchId}&la=${that.$store.state.location.latitude}&lo=${that.$store.state.location.longitude}`)
        } else {
          that.$wc.toast('请选择取车地点')
        }
      },
      onPoint () {
        let that = this
        if (that.$store.state.getCar.cityCode) {
          that.$router.push(`/find/branch`)
        } else {
          that.$wc.toast('请选择所在城市')
        }
      },
      async loadAll () {
        let that = this
        await that.wcService.updateSystemInfo()
        await that.wcService.updateCurrentOrder()
        await that.$store.dispatch('updateUserInfo')

        await that.$store.dispatch('authTipsClear')
        if (that.statusText && !that.$store.state.authTipsVisible) {
          await that.$store.dispatch('authTipsShow')
        }

        //        that.$store.dispatch('clearState', 'getCar')
        let cityCode = that.$store.state.getCar.cityCode
        if (!cityCode) {
          that.locating = true
          await that.wcService.updateLocation()
          if (that.$store.state.location.cityCode) {
            let {success, bizContent} = await that.$api.warmcar['query/open_city_list']()
            if (success && bizContent) {
              let loc = bizContent.find(o => {
                return o.cityCode === that.$store.state.location.cityCode
              })
              //              alert(JSON.stringify(loc))
              if (loc) {
                that.$store.commit('getCar', loc)
              }
            }
          }

          that.locating = false
        } else {
          await that.wcService.updateLocation()
        }
      },
      onTipsClose () {
        let that = this
        that.$store.dispatch('authTipsHide')
      }
    },
    async created () {
      let that = this
     
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