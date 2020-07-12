<style lang="scss">
  @import "~vue-xy-ui/dist/mixin";

  .wc-card {
  }
</style>

<template>
  <div>
    <div class="wc-card wc-card--page">
      列表式(min-height占全屏)
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
        pageTitle: '块(占全屏)demo',
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