<style lang="scss">
</style>
<template>
  <div class="wc-pop"
       ref="wcPop"
       style="display: none;"
       :class="{'wc-pop--show':visible}"
       :style="{'z-index':opts.index+100}">
    <div class="wc-pop__ct">
      <div class="wc-pop__ct__title"
           v-text="opts.title">
      </div>
      <div class="wc-pop__ct__content"
           v-text="opts.content">
      </div>
      <div class="wc-pop__ct__split"></div>
      <div class="wc-pop__ct__op">
        <button class="wc-pop__ct__op__btn"
                @click="onCancel"
                v-xy-moving-btn>{{opts.cancelButtonText}}
        </button>
        <div class="wc-pop__ct__op__split">
        </div>
        <button class="wc-pop__ct__op__btn wc-pop__ct__op__btn--confirm"
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
    name: 'wc-confirm'
  }
</script>
