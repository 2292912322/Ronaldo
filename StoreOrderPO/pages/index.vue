<style lang="scss">
@import "~assets/sass/common";
@import "~assets/sass/_mixins";
@import "~assets/sass/_value";
@import "~assets/sass/btn";
@import "~assets/sass/list";
@import "~assets/sass/item";

.pc-navbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: rsh(120);
    min-height: rsh(120);
    box-shadow: 0 rsh(-10) rsh(15) rgba(#efefef, .5);
    display: none;
    padding-top: rsh(10);
    padding-bottom: 0;
    padding-bottom: env(safe-area-inset-bottom);
    box-sizing: content-box;
    background-color: #fff;
    &.pc-navbar--show {
      display: flex;
    }
    .pc-navbar__nav {   
      width: 0;
      flex-grow: 1;
      flex-shrink: 0;
      text-align: center;
      font-size: rsh(24);
      color: #333;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > span {
        display: block;
        transform: scale(.92);
        line-height: rsh(40);
      }
    }
     .pc-navbar__nav--active{
       color: $mainColor;
     }
  }
  .pull-down-header{
    background: #efefef;
    .pull-down-content{
      color: #333;
    }
  }
</style>
<template>
  <div class="container">
    <!-- 页面容器 -->
    <nuxt-child/>
    <nav class="pc-navbar"  :class="{'pc-navbar--show':navbarShow}">
      <div class="pc-navbar__nav" :class="{'pc-navbar__nav--active':chooseNav===0}" @click="onNav('/home',0)">
        <i :class="`icons-common-index${chooseNav===0 ? '-active':''}-outer`">
          <div :class="`icons-common icons-common-index${chooseNav===0 ? '-active':''}-inner`"></div>
        </i>
        <span>首页</span>
      </div>
        <div class="pc-navbar__nav" :class="{'pc-navbar__nav--active':chooseNav===1}" @click="onNav('/order',1)">
        <i :class="`icons-common-order${chooseNav===1 ? '-active':''}-outer`">
          <div :class="`icons-common icons-common-order${chooseNav===1 ? '-active':''}-inner`"></div>
        </i>
        <span>订单</span>
      </div>
      <div class="pc-navbar__nav" :class="{'pc-navbar__nav--active':chooseNav===2}" @click="onNav('/shipping',2)">
        <i :class="`icons-common-shipping${chooseNav===2 ? '-active':''}-outer`">
          <div :class="`icons-common icons-common-shipping${chooseNav===2 ? '-active':''}-inner`"></div>
        </i>
        <span>收货</span>
      </div>
      <div class="pc-navbar__nav" :class="{'pc-navbar__nav--active':chooseNav===3}" @click="onNav('/exchange',3)">
        <i :class="`icons-common-exchange${chooseNav===3 ? '-active':''}-outer`">
          <div :class="`icons-common icons-common-exchange${chooseNav===3 ? '-active':''}-inner`"></div>
        </i>
        <span>退货</span>
      </div>
      <div class="pc-navbar__nav" :class="{'pc-navbar__nav--active':chooseNav===4}" @click="onNav('/my',4)">
        <i :class="`icons-common-my${chooseNav===4 ? '-active':''}-outer`">
          <div :class="`icons-common icons-common-my${chooseNav===4 ? '-active':''}-inner`"></div>
        </i>
        <span>我的</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    data () {
      return {
        navbarPaths: ['/home','/order', '/shipping', '/exchange','/my'],
        chooseNav:0
      }
    },
    computed: {
      navbarShow () {
        let that = this
        return that.navbarPaths.includes(that.$route.path)
      }
    },
    watch:{
      '$route.path':function(){
       let that = this;
       that.navbarPaths.forEach((o,i)=>{
         if(o==that.$route.path){
           that.chooseNav = i;
         }
       })
      },
    },
    methods: {
      onNav (path,index) {
        let that = this
        that.chooseNav = index;
        that.$router.replace(path).catch(err =>{})
      }
    },
    created () {
      // 默认重定向至首页
      if (this.$route.fullPath === '/') {
        this.$router.push('/home')
      }
      
    },
    mounted(){
      let that = this;
    }
  }
</script>


