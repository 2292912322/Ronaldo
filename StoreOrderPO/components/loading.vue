<template>
  <div class="xy-progress">
    <div class="xy-progress-bar"
         :style="{
            'width': percent+'%',
            'height': height,
        //    'background-color': canSuccess? color : failedColor,
            'opacity': show ? 1 : 0
          }"
         :class="{failed:!canSuccess}">
    </div>
    <!--<div class="xy-progress-number" :style="{'display': show ? 'block' : 'none'}">-->
    <!--<div>{{percent + '%'}}</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'xy-page-progress',
    data: () => ({
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 5000,
      height: '',
      color: 'white',
      failedColor: 'red'
    }),
    methods: {
      start () {
        this.show = true
        this.canSuccess = true
        if (this._timer) {
          clearInterval(this._timer)
          this.percent = 0
        }
        this._cut = 10000 / Math.floor(this.duration)
        this._timer = setInterval(() => {
          this.increase(this._cut * Math.random())
          if (this.percent > 95) {
            this.finish()
          }
        }, 100)
        return this
      },
      set (num) {
        this.show = true
        this.canSuccess = true
        this.percent = Math.floor(num)
        return this
      },
      get () {
        return Math.floor(this.percent)
      },
      increase (num) {
        this.percent = this.percent + Math.floor(num)
        return this
      },
      decrease (num) {
        this.percent = this.percent - Math.floor(num)
        return this
      },
      finish () {
        this.percent = 100
        this.hide()
        return this
      },
      pause () {
        clearInterval(this._timer)
        return this
      },
      hide () {
        clearInterval(this._timer)
        this._timer = null
        setTimeout(() => {
          this.show = false
          Vue.nextTick(() => {
            setTimeout(() => {
              this.percent = 0
            }, 200)
          })
        }, 500)
        return this
      },
      fail () {
        this.canSuccess = false
        return this
      }
    }
  }
</script>

<style lang="scss">
  .xy-progress {
    .xy-progress-bar {
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      height: 2px;
      width: 0%;
      transition: width 0.2s, opacity 0.4s;
      opacity: 1;
      background-color: #71f474;
      z-index: 999999;
      text-align: center;
      overflow: hidden;
      &.failed {
        background-color: #fb5651;
      }
    }
    .xy-progress-number {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.8);
      text-align: center;
      font-size: 30px;
      z-index: 999998;
      color: #0f9ce5;
      & > div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        height: 30px;
      }
    }
  }
</style>