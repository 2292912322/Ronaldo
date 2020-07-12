<style lang="scss">
@import "~assets/sass/pop";
</style>
<template>
  <div class="pc-pop"
       ref="pcPop"
       style="display: none;"
       :class="{'pc-pop--show':visible}"
       :style="{'z-index':opts.index+100}">
    <div class="pc-pop__ct">
      <div class="pc-pop__ct__title"
           v-text="opts.title">
      </div>
      <div class="pc-pop__ct__content"
           v-text="opts.content">
      </div>
      <div class="pc-pop__ct__split"></div>
      <div class="pc-pop__ct__op">
        <button class="pc-pop__ct__op__btn pc-pop__ct__op__btn--confirm"
                @click="onConfirm"
                v-xy-moving-btn>{{opts.confirmButtonText}}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import xyUI from 'vue-xy-ui'
  import base from './base'

  Vue.use(xyUI)

  export default {
    ...base,
    name: 'pc-alert'
  }
</script>
