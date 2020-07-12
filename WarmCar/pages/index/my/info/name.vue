<style lang="scss">
  @import "~vue-xy-ui/dist/mixin";
  @import "~assets/scss/value";

  .wc-my-info-name {
    .wc-my-info-name__btn {
      position: fixed;
      bottom: rsh(80);
      bottom: env(safe-area-inset-bottom + #{rsh(80)});
      left: 0;
      width: 100%;
    }
    .wc-btn {
      margin-top: rsh(50);
    }
  }
</style>

<template>
  <div class="wc-my-info-name">
    <div class="wc-card">
      <a class="wc-box wc-box--pl15 wc-box--ph95">
        <div class="wc-box__ct">
          <!--<group>-->
          <x-input placeholder="输入您的用户名"
                   v-model="name"
                   show-clear>
          </x-input>
          <!--</group>-->
        </div>
      </a>
    </div>
    <div class="wc-my-info-name__btn">
      <button @click="onSubmit"
              class="wc-btn wc-btn--yellow wc-btn--w470 wc-btn--h80 wc-btn--f26"
              v-xy-moving-btn>提交
      </button>
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
      let that = this
      return {
        pageTitle: '',
        startLoad: false,
        //
        name: that.$store.state.userInfo.nickName
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
    methods: {
      async onSubmit () {
        let that = this
        let {success} = await that.$api.warmcar['modify_customer/nick_name']({
          nickName: that.name
        })
        if (success) {
          that.$wc.toast('操作成功')
          that.$router.go(-1)
        } else {
          that.name = that.$store.state.userInfo.nickName
        }
      }
    },
    created () {
      let that = this
      // 需要授权才可以加载的数据(授权比页面装载快)
      if (that.$store.state.wxAuthStatus && !that.startLoad) {
        that.startLoad = true
        //
      }
      // 无需授权可以提前加载的数据
    }
  }
</script>