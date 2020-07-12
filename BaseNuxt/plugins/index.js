import Vue from 'vue'
import _ from 'lodash'

import VueLazyload from 'vue-lazyload'
import { xyLazyloadResize } from 'vue-xy-ui'

import xyUI from 'vue-xy-ui'
import VueScroller from 'vue-scroller'
import wcComponents from './components'
// import wcFilters from './filters'
Vue.prototype.$wc = wcComponents

// Object.keys(wcFilters)
//       .forEach(key => {
//         Vue.filter(key, wcFilters[key])
//       })
Vue.prototype._ = _
// Vue.use(VueLazyload, xyLazyloadResize)
// vux end
Vue.use(xyUI)
Vue.use(VueLazyload, xyLazyloadResize);
Vue.use(VueScroller)