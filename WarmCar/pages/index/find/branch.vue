<style lang="scss">
  @import "~vue-xy-ui/dist/mixin";
  @import "~assets/scss/value";

  .wc-branch {

  }
</style>

<template>
  <div class="wc-branch">
    <wc-branch-map ref="map"
                   v-model="current"
                   :location.sync="location"
                   :branches.sync="branches"
                   v-show="loaded"></wc-branch-map>
    <div class="wc-branch__top"
         :class="{'wc-branch__top--search':searching}">
      <div class="wc-branch__top__search">
        <section>
          <i class="icons-common-map-search-outer">
            <div class="icons-common icons-common-map-search-inner"></div>
          </i>
          <x-input @on-focus="onFocus"
                   placeholder="搜索查找网点"
                   text-align="left"
                   v-model="search"
                   ref="search">
          </x-input>
        </section>
        <router-link v-show="!searching"
                     tag="button"
                     to="/find/city"
                     v-xy-moving-btn>
          <span>{{$store.state.getCar.cityName}}</span>
          <i class="icons-common-map-angle-outer">
            <div class="icons-common icons-common-map-angle-inner"></div>
          </i>
        </router-link>
        <button @click="onCancelSearch"
                v-show="searching"
                v-xy-moving-btn>
          <span>返回</span>
        </button>
      </div>
      <div class="wc-branch__top__list">
        <a class="wc-branch__top__list__item"
           v-for="(item,index) in list"
           :key="item.branchId"
           @click.stop="onSelect(item)"
           v-xy-hover-btn>
          <div class="wc-branch__top__list__item__ct">
            <i class="icons-common-location-empty-outer">
              <div class="icons-common icons-common-location-empty-inner"></div>
            </i>
            <section>
              <div class="wc-branch__top__list__item__name"
                   v-text="item.branchName">
              </div>
              <div class="wc-branch__top__list__item__location">
                {{item.branchAddress}} <span>距您 {{item.distance | wcDistance}}</span>
              </div>
            </section>
            <span class="wc-branch__top__list__item__distance">
              {{item.distance | wcDistance}}
            </span>
          </div>
        </a>
      </div>
    </div>
    <div class="wc-branch__info">
      <div class="wc-branch__info__ct">
        <button class="wc-branch__info__back"
                @click="onBack"
                v-xy-moving-btn>
          <i class="icons-common-map-location-outer">
            <div class="icons-common icons-common-map-location-inner"></div>
          </i>
        </button>
        <div class="wc-branch__info__ct__info">
          <div class="wc-branch__info__ct__info__loc">
            <div>{{current.branchName}}</div>
            <section>{{current.branchAddress}}</section>
          </div>
          <!--<button @click="onNav"-->
          <!--v-xy-moving-btn>-->
          <!--<i class="icons-common-map-nav-outer">-->
          <!--<div class="icons-common icons-common-map-nav-inner"></div>-->
          <!--</i>-->
          <!--<span>{{current.distance | wcDistance}}</span>-->
          <!--</button>-->
          <button>
            <span>{{current.distance | wcDistance}}</span>
          </button>
          <!--<button v-xy-moving-btn>-->
          <!--<i class="icons-common-map-pic-outer">-->
          <!--<div class="icons-common icons-common-map-pic-inner"></div>-->
          <!--</i>-->
          <!--<span>实景</span>-->
          <!--</button>-->
        </div>
        <div class="wc-branch__info__ct__btn">
          <button @click="onConfirm"
                  class="wc-btn wc-btn--f30 wc-btn--yellow wc-btn--w600 wc-btn--h80"
                  v-xy-moving-btn>设为取车点
          </button>
        </div>
      </div>
    </div>
    <actionsheet v-model="addressShow"
                 :menus="addressSelections"
                 @on-click-menu="onAddressClick"></actionsheet>
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
      let that = this
      return {
        pageTitle: '',
        startLoad: false,
        //
        location: {
          lat: parseFloat(that.$store.state.location.latitude),
          lng: parseFloat(that.$store.state.location.longitude)
        },
        branches: [],
        current: {},
        searching: false,
        search: '',
        list: [],
        addressShow: false,
        addressSelections: [
          {
            label: '百度地图',
            value: 'baidu'
          },
          {
            label: '高德地图',
            value: 'gaode'
          },
          {
            label: '腾讯地图',
            value: 'tengxu'
          }
        ],
        loaded: false
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
      },
      'search': function (v) {
        let that = this
        let kw = v.trim()
                  .toLowerCase()
        that.list = that.branches.filter(o => o.branchName.toLowerCase()
                                               .includes(kw) || o.branchAddress.toLowerCase()
                                                                 .includes(kw))
      }
    },
    methods: {
      checkParams () {
        let that = this
        if (that.$store.state.getCar.cityCode && that.$store.state.location.latitude && that.$store.state.location.longitude) {
          //
        } else {
          that.$router.go(-1)
        }
      },
      async loadAll () {
        let that = this
        let {success, bizContent} = await that.$api.warmcar['query/all_branch_by_city_code']({
          cityCode: that.$store.state.getCar.cityCode
        })
        if (success) {
          that.branches = that._.sortBy(bizContent.map(o => {
            let temp = o.gps.split(',')
            let distance = 0
            if (temp.length === 2) {
              distance = that.$wc.getDistance(that.location.lat, that.location.lng, parseFloat(temp[1]), parseFloat(temp[0]))
            }
            return Object.assign(o, {
              distance: distance,
              num: o.leisureCarNum,
              lng: parseFloat(temp[0]),
              lat: parseFloat(temp[1])
            })
          }), o => o.distance)
          that.list = [...that.branches]

          if (that.$store.state.getCar.branchId) {
            let temp = that.branches.find(o => o.branchId === that.$store.state.getCar.branchId)
            if (temp) {
              that.current = temp
            }
          }

          if (!that.current.branchId) {
            that.current = that.branches[0]
          }
        }
        that.loaded = true
      },
      onBack () {
        let that = this
        that.$refs.map.back()
      },
      onFocus () {
        let that = this
        that.searching = true
      },
      onCancelSearch () {
        let that = this
        that.searching = false
        that.$refs.search.reset()
      },
      onSelect (item) {
        let that = this
        that.$refs.search.reset()
        setTimeout(function () {
          that.searching = false
          that.current = item
        }, 100)
      },
      onNav () {
        let that = this
        that.addressShow = true
      },
      async onAddressClick (key) {
        let that = this
        that.$vux.loading.show({text: '请稍候'})
        let temp = that.detail.gps.split(',')
        await that.$wc.goToMap(key, parseFloat(temp[1]), parseFloat(temp[0]), that.detail.branchName, that.detail.branchAddress)
        that.$vux.loading.hide()
      },
      onConfirm () {
        let that = this
        that.$store.commit('getCar', {
          branchId: that.current.branchId,
          branchName: that.current.branchName
        })
        that.$router.go(-1)
      }
    },
    async mounted () {
      let that = this
      that.checkParams()
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