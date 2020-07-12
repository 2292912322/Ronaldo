import Vue from 'vue'
import _ from 'lodash'

import cookie from 'js-cookie'
import apiCache from '~/mixins/api-cache'
import VueLazyload from 'vue-lazyload'
import { xyLazyloadResize } from 'vue-xy-ui'
import BranchMap from '../components/branchMap.vue'
// vux start
// import ConfirmPlugin from '~/components/vux/vux-confirm-plugin'
import {
  // plugins
  ToastPlugin,
  AlertPlugin,
  ConfirmPlugin,
  LoadingPlugin,
  // components
  XInput,
  XTextarea,
  PopupPicker,
  Actionsheet
} from 'vux'
// vux end
import xyUI from 'vue-xy-ui'

import wcComponents from './components'
import wcFilters from './filters'

Vue.prototype.$wc = wcComponents
Object.keys(wcFilters)
      .forEach(key => {
        Vue.filter(key, wcFilters[key])
      })

Vue.prototype.$cookie = cookie
Vue.prototype._ = _
Vue.mixin(apiCache)
Vue.use(VueLazyload, xyLazyloadResize)
// vux start
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
// Vue.use(LoadingPlugin)
Vue.component(XInput.name, XInput)
Vue.component(XTextarea.name, XTextarea)
Vue.component(PopupPicker.name, PopupPicker)
Vue.component(Actionsheet.name, Actionsheet)
// vux end
Vue.use(xyUI)

Vue.component(BranchMap.name, BranchMap)