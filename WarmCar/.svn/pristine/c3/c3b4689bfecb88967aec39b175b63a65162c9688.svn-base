import {
  WX_ENABLE
} from '~/config'

let checker = null
let timeout = null

export default {
  name: 'location',
  data () {
    return {}
  },
  methods: {
    location () {
      let that = this
      return (function () {
        return new Promise(async function (resolve, reject) {
          var expiresTime = new Date(new Date().getTime() + 60 * 1000 * 3)
          // let latitude = that.$cookie.get('latitude')
          // let longitude = that.$cookie.get('longitude')
          // let locationExpire = localStorage.getItem('locationExpire')
          // if (locationExpire === null || parseInt(locationExpire) - (new Date()).getTime() <= 0) {
          //   localStorage.removeItem('latitude')
          //   localStorage.removeItem('longitude')
          //   localStorage.removeItem('locationExpire')
          // }
          // let latitude = localStorage.getItem('latitude')
          // let longitude = localStorage.getItem('longitude')
          // if (latitude !== undefined && longitude !== undefined && latitude !== null && longitude !== null) {
          //   resolve({
          //     latitude: latitude,
          //     longitude: longitude
          //   })
          // } else {
          //
          // }

          let browser = that.$xyTools.browser()
          if (wx && browser.wx && WX_ENABLE) {
            if (that.wxLocation) {
              that.$cookie.set('latitude', that.wxLocation.latitude, {expires: expiresTime})
              that.$cookie.set('longitude', that.wxLocation.longitude, {expires: expiresTime})
              // localStorage.setItem('latitude', that.wxLocation.latitude)
              // localStorage.setItem('longitude', that.wxLocation.longitude)
              // localStorage.setItem('locationExpire', expiresTime.getTime())
              resolve(that.wxLocation)
            } else {
              // that.$vux.loading.show({text: '获取定位中'})
              checker = setInterval(function () {
                if (that.wxLocation) {
                  clearInterval(checker)
                  clearTimeout(timeout)
                  // that.$vux.loading.hide()
                  that.$cookie.set('latitude', that.wxLocation.latitude, {expires: expiresTime})
                  that.$cookie.set('longitude', that.wxLocation.longitude, {expires: expiresTime})
                  // localStorage.setItem('latitude', that.wxLocation.latitude)
                  // localStorage.setItem('longitude', that.wxLocation.longitude)
                  // localStorage.setItem('locationExpire', expiresTime.getTime())
                  resolve(that.wxLocation)
                }
              }, 300)
              timeout = setTimeout(function () {
                clearInterval(checker)
                that.$vux.loading.hide()
                reject(new Error('更新定位超时'))
              }, 10000)
            }
          } else {
            let {success, data, message} = await that.$bridge.call('getLocation')
            console.log(`app定位:${message}`)
            if (success) {
              that.$cookie.set('latitude', data.latitude, {expires: expiresTime})
              that.$cookie.set('longitude', data.longitude, {expires: expiresTime})
              resolve({
                latitude: data.latitude,
                longitude: data.longitude
              })
            } else {
              let errMsg = message
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                  clearTimeout(timeout)
                  that.$vux.loading.hide()
                  that.$cookie.set('latitude', position.coords.latitude, {expires: expiresTime})
                  that.$cookie.set('longitude', position.coords.longitude, {expires: expiresTime})
                  // localStorage.setItem('latitude', that.wxLocation.latitude)
                  // localStorage.setItem('longitude', that.wxLocation.longitude)
                  // localStorage.setItem('locationExpire', expiresTime.getTime())
                  resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                  })
                }, function (error) {
                  that.$vux.loading.hide()
                  let errMsg2 = ''
                  switch (error.code) {
                    case error.PERMISSION_DENIED:
                      errMsg2 = '定位失败,用户拒绝请求地理定位'
                      break
                    case error.POSITION_UNAVAILABLE:
                      errMsg2 = '定位失败,位置信息是不可用'
                      break
                    case error.TIMEOUT:
                      errMsg2 = '定位失败,请求获取用户位置超时'
                      break
                    case error.UNKNOWN_ERROR:
                      errMsg2 = '定位失败,定位系统失效'
                      break
                    default:
                      errMsg2 = '定位失败'
                  }
                  reject(new Error(errMsg + ',' + errMsg2))
                })

                timeout = setTimeout(function () {
                  that.$vux.loading.hide()
                  reject(new Error(errMsg + ';更新定位超时'))
                }, 5000)
              } else {
                that.$vux.loading.hide()
                reject(new Error(errMsg + ';浏览器不支持地理定位'))
              }
            }
          }
        })
      }())
    }
  },
  watch: {},
  mounted: function () {

  },
  destroyed: function () {
    clearInterval(checker)
    clearTimeout(timeout)
  }
}