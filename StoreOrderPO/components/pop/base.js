import _ from 'lodash'

const optsDef = {
  title: '提示',
  content: '',
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  onConfirm: null,
  onCancel: null,
  index: 0
}
export default {
  data () {
    return {
      opts: {
        ...optsDef
      },
      visible: false,
      onFinish: null
    }
  },
  methods: {
    onConfirm () {
      let that = this
      if (that.opts.onConfirm) {
        that.opts.onConfirm.call(that)
      } else {
        console.log(`pc-confirm onConfirm default`)
      }
      that.visible = false
      if (that.onFinish) {
        that.onFinish(true)
      }
    },
    onCancel () {
      let that = this
      if (that.opts.onCancel) {
        that.opts.onCancel.call(that)
      } else {
        console.log(`pc-confirm onCancel default`)
      }
      that.visible = false
      if (that.onFinish) {
        that.onFinish(false)
      }
    },
    show (content, opts = {}, cb) {
      let that = this
      that.onFinish = cb
      that.opts = _.assignWith({...optsDef}, {
        ...opts,
        content
      }, function (objValue, srcValue) {
        if (srcValue !== undefined) {
          return srcValue
        }
        return objValue
      })
      this.visible = true
    }
  },
  updated () {
    let that = this
    that.$el.removeAttribute('style')
  }
}