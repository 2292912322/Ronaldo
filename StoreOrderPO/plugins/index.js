import Vue from "vue";
import _ from "lodash";
import pcComponents from "./components";
import pcFilters from "./filters";
import moment from 'moment'
import VueLazyload from 'vue-lazyload'
import { xyLazyloadResize } from 'vue-xy-ui'
import VueScroller from 'vue-scroller'
// import {
//   // components
//   XInput,
// } from 'vux'
// Vue.component(XInput.name, XInput)
Vue.use(VueScroller)
Object.keys(pcFilters).forEach(key => {
  Vue.filter(key, pcFilters[key]);
});
Vue.prototype.$pc = pcComponents;
Vue.prototype._ = _;
Vue.prototype.$moment = moment;
Vue.use(VueLazyload, xyLazyloadResize);