<template>
  <div class="container"
       :class="{'route-out':$router.currentRoute.meta.move==='out','route-in':$router.currentRoute.meta.move==='in'}">
    <nuxt-child/>
  </div>
</template>

<script>
  // 在iphonex上没有明显的差异, 暂时不上
  //  import FastClick from 'fastclick'
  //  FastClick.attach(document.body)
  // 不使用加class
  // <a class="needsclick">Ignored by FastClick</a>

  //  import Vue from 'vue'
  import cookie from 'js-cookie'
  import {
    API_CONFIG_BASE
  } from '~/config'

  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/common";
</style>
