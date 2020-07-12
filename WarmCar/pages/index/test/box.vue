
<style lang="scss">

.father {
  position: relative;
  .son {
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%)
  }
}










@import "~vue-xy-ui/dist/mixin";

.wc-card {
  &.test-p30 {
    .wc-box {
      padding-left: rsh(30);
      padding-right: rsh(30);
    }
  }
}
</style>

<template>
  <div>
    <div class="wc-card">可选组合:
      <br>图标+正题+副题+文字+箭头(贴/不贴右)/选择
      <br>例如:
    </div>
    <div class="wc-card">
      <div>
        <a class="wc-box" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <i class="wc-box__icon icons-common-pay-type-account-outer">
              <div class="icons-common icons-common-pay-type-account-inner"></div>
            </i>
            <div class="wc-box__title">正题</div>
            <div class="wc-box__sub">副题</div>
            <div class="wc-box__text">文字</div>
            <button class="wc-box__link">
              <i class="icons-common-gt-outer">
                <div class="icons-common icons-common-gt-inner"></div>
              </i>
            </button>
          </div>
        </a>
      </div>
    </div>
    <div class="wc-card test-p30">退押金
      <div>
        <a class="wc-box wc-box--pr20 wc-box--ph95" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <div class="wc-box__title wc-box__title--f30">正题</div>
            <div class="wc-box__sub">余额:xxx元</div>
            <button class="wc-box__select">
              <i class="icons-common-selected-outer">
                <div class="icons-common icons-common-selected-inner"></div>
              </i>
            </button>
          </div>
        </a>
        <a class="wc-box wc-box--pr20 wc-box--ph95" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <div class="wc-box__title wc-box__title--f30">正题</div>
            <div class="wc-box__sub">余额:xxx元</div>
            <button class="wc-box__select">
              <i class="icons-common-unselected-outer">
                <div class="icons-common icons-common-unselected-inner"></div>
              </i>
            </button>
          </div>
        </a>
        <a class="wc-box wc-box--pr20 wc-box--ph95" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <div class="wc-box__title wc-box__title--f30">正题</div>
            <div class="wc-box__sub">余额:xxx元</div>
            <button class="wc-box__select">
              <i class="icons-common-unselected-outer">
                <div class="icons-common icons-common-unselected-inner"></div>
              </i>
            </button>
          </div>
        </a>
      </div>
    </div>
    <div class="wc-card">钱包
      <div>
        <a class="wc-box wc-box--ph105" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <i class="wc-box__icon icons-common-pay-type-account-outer">
              <div class="icons-common icons-common-pay-type-account-inner"></div>
            </i>
            <div class="wc-box__title">正题</div>
            <div class="wc-box__text">文字</div>
            <button class="wc-box__link">
              <i class="icons-common-gt-outer">
                <div class="icons-common icons-common-gt-inner"></div>
              </i>
            </button>
          </div>
        </a>
        <a class="wc-box wc-box--ph105" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <i class="wc-box__icon icons-common-pay-type-account-outer">
              <div class="icons-common icons-common-pay-type-account-inner"></div>
            </i>
            <div class="wc-box__title">正题</div>
            <div class="wc-box__text">文字</div>
            <button class="wc-box__link">
              <i class="icons-common-gt-outer">
                <div class="icons-common icons-common-gt-inner"></div>
              </i>
            </button>
          </div>
        </a>
        <a class="wc-box wc-box--ph105" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <i class="wc-box__icon icons-common-pay-type-account-outer">
              <div class="icons-common icons-common-pay-type-account-inner"></div>
            </i>
            <div class="wc-box__title">正题</div>
            <div class="wc-box__text">文字</div>
            <button class="wc-box__link">
              <i class="icons-common-gt-outer">
                <div class="icons-common icons-common-gt-inner"></div>
              </i>
            </button>
          </div>
        </a>
      </div>
    </div>
    <div class="wc-card test-p30">押金
      <div>
        <a class="wc-box wc-box--pw20" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <i class="wc-box__icon wc-box__icon--r30 icons-common-pay-type-account-outer">
              <div class="icons-common icons-common-pay-type-account-inner"></div>
            </i>
            <div class="wc-box__title">正题</div>
            <div class="wc-box__sub">余额:xxx元</div>
            <button class="wc-box__select">
              <i class="icons-common-selected-outer">
                <div class="icons-common icons-common-selected-inner"></div>
              </i>
            </button>
          </div>
        </a>
        <a class="wc-box wc-box--pw20" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <i class="wc-box__icon wc-box__icon--r30 icons-common-pay-type-account-outer">
              <div class="icons-common icons-common-pay-type-account-inner"></div>
            </i>
            <div class="wc-box__title">正题</div>
            <div class="wc-box__sub">余额:xxx元</div>
            <button class="wc-box__select">
              <i class="icons-common-pay-unselected-outer">
                <div class="icons-common icons-common-pay-unselected-inner"></div>
              </i>
            </button>
          </div>
        </a>
        <a class="wc-box wc-box--pw20" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <i class="wc-box__icon wc-box__icon--r30 icons-common-pay-type-account-outer">
              <div class="icons-common icons-common-pay-type-account-inner"></div>
            </i>
            <div class="wc-box__title">正题</div>
            <div class="wc-box__sub">余额:xxx元</div>
            <button class="wc-box__select">
              <i class="icons-common-pay-unselected-outer">
                <div class="icons-common icons-common-selected-inner"></div>
              </i>
            </button>
          </div>
        </a>
      </div>
    </div>
    <div class="wc-card test-p30">支付
      <div>
        <a class="wc-box">
          <div class="wc-box__ct">
            <div class="wc-box__title wc-box__title--f30 wc-box__title--c666">正题</div>
            <div class="wc-box__text wc-box__text--f30">50.00元</div>
          </div>
        </a>
        <a class="wc-box">
          <div class="wc-box__ct">
            <div class="wc-box__title wc-box__title--f30 wc-box__title--c666">正题</div>
            <div class="wc-box__text wc-box__text--f30">50.00元</div>
          </div>
        </a>
        <a class="wc-box">
          <div class="wc-box__ct">
            <div class="wc-box__title wc-box__title--f30 wc-box__title--c666">正题</div>
            <div class="wc-box__text wc-box__text--f30">50.00元</div>
          </div>
        </a>
        <a class="wc-box" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <div class="wc-box__title wc-box__title--f30 wc-box__title--c666">正题</div>
            <div class="wc-box__text wc-box__text--f30 wc-box__text--cm">000</div>
            <button class="wc-box__select">
              <i class="icons-common-gt-main-outer">
                <div class="icons-common icons-common-gt-main-inner"></div>
              </i>
            </button>
          </div>
        </a>
      </div>
    </div>
    <div class="wc-card test-p30">支付2
      <div>
        <a class="wc-box wc-box--ph120" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <i class="wc-box__icon wc-box__icon--r30 icons-common-pay-type-account-outer">
              <div class="icons-common icons-common-pay-type-account-inner"></div>
            </i>
            <div class="wc-box__title">正题</div>
            <div class="wc-box__sub">余额:xxx元</div>
            <button class="wc-box__select">
              <i class="icons-common-selected-outer">
                <div class="icons-common icons-common-selected-inner"></div>
              </i>
            </button>
          </div>
        </a>
        <a class="wc-box wc-box--ph120" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <i class="wc-box__icon wc-box__icon--r30 icons-common-pay-type-account-outer">
              <div class="icons-common icons-common-pay-type-account-inner"></div>
            </i>
            <div class="wc-box__title">正题</div>
            <div class="wc-box__sub">余额:xxx元</div>
            <button class="wc-box__select">
              <i class="icons-common-pay-unselected-outer">
                <div class="icons-common icons-common-pay-unselected-inner"></div>
              </i>
            </button>
          </div>
        </a>
        <a class="wc-box wc-box--ph120" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <i class="wc-box__icon wc-box__icon--r30 icons-common-pay-type-account-outer">
              <div class="icons-common icons-common-pay-type-account-inner"></div>
            </i>
            <div class="wc-box__title">正题</div>
            <div class="wc-box__sub">余额:xxx元</div>
            <button class="wc-box__select">
              <i class="icons-common-pay-unselected-outer">
                <div class="icons-common icons-common-pay-unselected-inner"></div>
              </i>
            </button>
          </div>
        </a>
      </div>
    </div>
    <div class="wc-card test-p30">账户
      <div>
        <a class="wc-box wc-box--pl15 wc-box--ph95" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <div class="wc-box__title wc-box__title--f30">正题</div>
            <div class="wc-box__text">文字</div>
            <button class="wc-box__link">
              <i class="icons-common-gt-outer">
                <div class="icons-common icons-common-gt-inner"></div>
              </i>
            </button>
          </div>
        </a>
        <a class="wc-box wc-box--pl15 wc-box--ph95" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <div class="wc-box__title wc-box__title--f30">正题</div>
            <div class="wc-box__text">文字</div>
            <button class="wc-box__link">
              <i class="icons-common-gt-outer">
                <div class="icons-common icons-common-gt-inner"></div>
              </i>
            </button>
          </div>
        </a>
        <a class="wc-box wc-box--pl15 wc-box--ph95" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <div class="wc-box__title wc-box__title--f30">正题</div>
            <div class="wc-box__text">文字</div>
            <button class="wc-box__link">
              <i class="icons-common-gt-outer">
                <div class="icons-common icons-common-gt-inner"></div>
              </i>
            </button>
          </div>
        </a>
      </div>
    </div>
    <div class="wc-card test-p30">我的
      <div>
        <a class="wc-box" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <i class="wc-box__icon icons-common-pay-type-account-outer">
              <div class="icons-common icons-common-pay-type-account-inner"></div>
            </i>
            <div class="wc-box__title">正题</div>
            <button class="wc-box__select">
              <i class="icons-common-gt-outer">
                <div class="icons-common icons-common-gt-inner"></div>
              </i>
            </button>
          </div>
        </a>
        <a class="wc-box" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <i class="wc-box__icon icons-common-pay-type-account-outer">
              <div class="icons-common icons-common-pay-type-account-inner"></div>
            </i>
            <div class="wc-box__title">正题</div>
            <button class="wc-box__select">
              <i class="icons-common-gt-outer">
                <div class="icons-common icons-common-gt-inner"></div>
              </i>
            </button>
          </div>
        </a>
        <a class="wc-box" @click="onClick" v-xy-hover-btn>
          <div class="wc-box__ct">
            <i class="wc-box__icon icons-common-pay-type-account-outer">
              <div class="icons-common icons-common-pay-type-account-inner"></div>
            </i>
            <div class="wc-box__title">正题</div>
            <button class="wc-box__select">
              <i class="icons-common-gt-outer">
                <div class="icons-common icons-common-gt-inner"></div>
              </i>
            </button>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import common from "~/mixins/common";
import seo from "~/mixins/seo";
import wxMixin from "~/mixins/wx-mixin";

export default {
  mixins: [common, wxMixin, seo],
  components: {},
  data() {
    return {
      pageTitle: "盒demo",
      startLoad: false
      //
    };
  },
  watch: {
    "$store.state.wxAuthStatus": function(v) {
      let that = this;
      // 需要授权才可以加载的数据(授权比页面装载慢)
      if (v && !that.startLoad) {
        that.startLoad = true;
        //
      }
    }
  },
  methods: {
    onClick() {
      console.log("onClick");
    }
  },
  created() {
    let that = this;
    that.type = that.$route.params.type;
    // 需要授权才可以加载的数据(授权比页面装载快)
    if (that.$store.state.wxAuthStatus && !that.startLoad) {
      that.startLoad = true;
      //
    }
    // 无需授权可以提前加载的数据
  }
};
</script>