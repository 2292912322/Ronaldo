<style lang="scss">
  @import "~vue-xy-ui/dist/mixin";
  @import "~assets/scss/value";

  .wc-toast {
    position: fixed;
    bottom: 50%;
    left: 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: none;
    background: none;
    &.wc-toast--show {
      display: flex;
    }
    &.wc-toast--bottom {
      bottom: rsh(200);
    }
    .wc-toast__content {
      font-size: rsh(26);
      color: #fff;
      background-color: rgba(0, 0, 0, .48);
      max-width: rsh(696);
      border-radius: rsh(20);
      padding: rsh(15) rsh(80);
      line-height: rsh(38);
    }
  }
</style>
<template>
  <div class="wc-toast"
       style="display: none;"
       :class="{'wc-toast--show':visible,'wc-toast--bottom':opts.position==='bottom'}"
       :style="{'z-index':index+100}">
    <div class="wc-toast__content"
         v-text="opts.content"></div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import xyUI from 'vue-xy-ui'

  Vue.use(xyUI)

  const optsDef = {
    content: '',
    position: 'middle', // middle/bottom 两种, 色彩参考设计稿
    time: 1500,
    index: 0
  }

  export default {
    name: 'wc-toast',
    props: {},
    watch: {},
    data () {
      return {
        opts: {
          ...optsDef
        },
        visible: false,
        index: 0
      }
    },
    methods: {
      show (content, opts = {}) {
        let that = this
        that.opts = _.assignWith({...optsDef}, {
          ...opts,
          content
        }, function (objValue, srcValue) {
          if (srcValue !== undefined) {
            return srcValue
          }
          return objValue
        })
        that.visible = true
        setTimeout(function () {
          that.$el.remove()
        }, that.opts.time)
      }
    },
    updated () {
      let that = this
      that.$el.removeAttribute('style')
    }
  }
</script>
