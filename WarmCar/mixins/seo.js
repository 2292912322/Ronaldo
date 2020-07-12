export default {
  name: 'xy-seo',
  head () {
    let that = this
    if (that.seoTitle || that.seoDes) {
      return {
        title: that.seoTitle,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: that.seoDes ? that.seoDes.slice(0, 100) : that.seoTitle
          }
        ]
      }
    }
    return {}
  },
  data () {
    return {
      seoTitle: '',
      seoDes: ''
    }
  },
  methods: {
    seoUpdate ({title, des}) {
      let that = this
      that.seoTitle = title
      that.seoDes = des
    }
  }
}