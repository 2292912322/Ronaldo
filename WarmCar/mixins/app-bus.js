export default {
  name: 'app-bus',
  data () {
    return {
      blkHasMapTimeout: null,
      blkHasMapInterval: null,
      blkHasMapStart: false
    }
  },
  methods: {
    blkHasMap (result) {
      var that = this
      if (result) {
        that.blkHasMapStart = true
      }
    },
    blkHasMapWait () {
      let that = this
      that.blkHasMapStart = false
      return (function () {
        return new Promise(function (resolve) {
          that.blkHasMapTimeout = setTimeout(function () {
            that.blkHasMapClear()
            resolve(false)
          }, 2100)
          that.blkHasMapInterval = setInterval(function () {
            // console.log(that.blkHasMapStart)
            if (that.blkHasMapStart) {
              that.blkHasMapClear()
              resolve(true)
            }
          }, 200)
        })
      }())
    },
    blkHasMapClear () {
      let that = this
      clearTimeout(that.blkHasMapTimeout)
      that.blkHasMapTimeout = null
      clearInterval(that.blkHasMapInterval)
      that.blkHasMapInterval = null
    }
  },
  mounted: function () {
    var that = this
    window.blkHasMap = that.blkHasMap
  },
  destroyed: function () {
    var that = this
    that.blkHasMapClear()
  }
}