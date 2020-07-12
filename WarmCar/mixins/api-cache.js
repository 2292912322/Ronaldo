export default {
  name: 'xy-api-cache',
  data () {
    return {cache: false}
  },
  computed: {
    wantCache () {
      let that = this
      if (that.$router.currentRoute.meta.move === 'out' && !that.cache && !that.$route.meta.noCache) {
        console.log(`%c${that.$el ? that.$el.className : that.$route.fullPath} want cache`, 'font-size:20px;color:red;')
      }
      return that.$router.currentRoute.meta.move === 'out' && !that.cache && !that.$route.meta.noCache
    }
  }
}