export default {
  name: 'page-common',
  data () {
    return {
      pageTitle: '',
      pageDes: '',
      pageImg: '',
      pageLink: ''
    }
  },
  methods: {
    pageUpdate () {
      let that = this
      if (that.seoUpdate) {
        that.seoUpdate({
          title: that.pageTitle,
          des: that.pageDes
        })
      }
      if (that.wxShareUpdate) {
        that.wxShareUpdate({
          title: that.pageTitle,
          des: that.pageDes,
          img: that.pageImg,
          link: that.pageLink
        })
      }
    }
  },
  watch: {
    pageTitle: function () {
      let that = this
      if (that.pageDes) {
        that.pageUpdate()
      } else {
        that.pageDes = that.pageTitle
      }
    },
    pageDes: function () {
      let that = this
      that.pageUpdate()
    },
    pageImg: function () {
      let that = this
      that.pageUpdate()
    },
    pageLink: function () {
      let that = this
      that.pageUpdate()
    }
  },
  created: function () {
    let that = this
    if (!that.pageDes) {
      that.pageDes = that.pageTitle
    } else {
      that.pageUpdate()
    }

    // setTimeout(function () {
    //   let broswer = that.$xyTools.browser()
    //   if (broswer.type === 'ios' && !broswer.wx) {
    //     that.$vux.toast.text(`<测试请忽略>是IOS,非微信端:${document.title}`)
    //     const hackFrame = document.createElement('iframe')
    //     hackFrame.style.visibility = 'hidden'
    //     hackFrame.style.position = 'absolute'
    //     hackFrame.style.top = '0'
    //     hackFrame.style.left = '0'
    //     hackFrame.style.width = '0'
    //     hackFrame.style.height = '0'
    //     hackFrame.src = `${that.$router.options.base}/static/fixIOSTitle.html?r=${Math.random()}`
    //     hackFrame.onload = function () {
    //       that.$vux.toast.text(`<测试请忽略>iframe已加载完成`)
    //       setTimeout(() => {
    //         hackFrame.remove()
    //         that.$vux.toast.text(`<测试请忽略>iframe已删除`)
    //       }, 300)
    //     }
    //     document.body.appendChild(hackFrame)
    //   }
    // }, 3000)
  }
}