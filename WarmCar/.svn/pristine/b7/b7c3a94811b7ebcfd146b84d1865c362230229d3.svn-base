<style lang="scss">
  #wc-branch-map {
    height: 100vh;
    $pointSize: 24px;
    .point-branch {
      position: absolute;
      box-sizing: content-box;
      background-color: #ddd;
      border-radius: 50%;
      border: 2px solid #fff;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, .2);
      width: $pointSize;
      height: $pointSize;
      line-height: $pointSize;
      & > div {
        position: absolute;
        bottom: -4px;
        left: ($pointSize - 4px)/2;
        transform: scale(1, .8);
        & > div {
          background-color: #fff;
          width: 4px;
          height: 4px;
          transform: rotate(45deg);
        }
      }
      &.point-branch--selected {
        border-color: #666;
        color: #666;
        background-color: #ffcc00;
        z-index: 999 !important;
        & > div {
          & > div {
            background-color: #666;
          }
        }
      }
      &.point-branch--has {
        background-color: #ffcc00;
      }

      &.point-branch--p {
        font-size: 18px;
        font-weight: bold;
        border-color: #ffcc00;
        color: #fff;
        background-color: #ffcc00;
        & > div {
          & > div {
            background-color: #ffcc00;
          }
        }
        &.point-branch--selected {
          border-color: #666;
          color: #ffcc00;
          background-color: #666;
          & > div {
            & > div {
              background-color: #666;
            }
          }
        }
        &.point-branch--disable:not(.point-branch--selected) {
          border-color: #ddd;
          background-color: #ddd;
          & > div {
            & > div {
              background-color: #ddd;
            }
          }
        }
      }
    }
    .point-location {
      position: absolute;
      box-sizing: content-box;
      background-color: blue;
      border: 1px solid #fff;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
</style>
<template>
  <div>
    <div id="wc-branch-map"></div>
  </div>
</template>
<script>
  import Vue from 'vue'

  // 定义自定义覆盖物的构造函数
  function BranchPoint (center) {
    this._center = center
    this._length = 24
    this._num = center.num
    this._div = null
    this._data = center
    this._type = center.type
  }

  // 继承API的BMap.Overlay
  BranchPoint.prototype = new BMap.Overlay()
  // 实现初始化方法
  BranchPoint.prototype.initialize = function (map) {
    // 保存map对象实例
    this._map = map
    // 创建div元素，作为自定义覆盖物的容器
    var div = document.createElement('div')
    var angle = document.createElement('div')
    var inner = document.createElement('div')

    div.classList.add('point-branch')

    if (this._type) {
      div.classList.add('point-branch--p')
      if (this._type === '02') {
        div.classList.add('point-branch--disable')
      }
      div.innerHTML = 'P'
    } else {
      if (this._num > 0) {
        div.classList.add('point-branch--has')
      }
      div.style.zIndex = this._num + 1
      div.dataset.num = this._num
      div.innerHTML = this._num
    }

    angle.appendChild(inner)
    div.appendChild(angle)

    // 将div添加到覆盖物容器中
    map.getPanes()
       .markerPane
       .appendChild(div)
    // 保存div实例
    this._div = div
    // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
    // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
    return div
  }
  // 实现绘制方法
  BranchPoint.prototype.draw = function () {
    // 根据地理坐标转换为像素坐标，并设置给容器
    var position = this._map.pointToOverlayPixel(this._center)
    this._div.style.left = position.x - this._length / 2 + 'px'
    this._div.style.top = position.y - this._length / 2 + 'px'
  }

  // 定义自定义覆盖物的构造函数
  function LocationPoint (center) {
    this._center = center
    this._length = 10
    this._div = null
  }

  // 继承API的BMap.Overlay
  LocationPoint.prototype = new BMap.Overlay()
  // 实现初始化方法
  LocationPoint.prototype.initialize = function (map) {
    // 保存map对象实例
    this._map = map
    // 创建div元素，作为自定义覆盖物的容器
    var div = document.createElement('div')
    div.classList.add('point-location')

    // 将div添加到覆盖物容器中
    map.getPanes()
       .markerPane
       .appendChild(div)
    // 保存div实例
    this._div = div
    // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
    // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
    return div
  }
  // 实现绘制方法
  LocationPoint.prototype.draw = function () {
    // 根据地理坐标转换为像素坐标，并设置给容器
    var position = this._map.pointToOverlayPixel(this._center)
    this._div.style.left = position.x - this._length / 2 + 'px'
    this._div.style.top = position.y - this._length / 2 + 'px'
  }

  export default {
    name: 'wc-branch-map',
    model: {
      prop: 'current',
      event: 'change'
    },
    props: {
      branches: {
        type: Array,
        default: () => {
          return []
        }
      },
      location: {
        type: Object,
        default: () => {
          return {
            lat: 0,
            lng: 0
          }
        }
      },
      current: {
        type: Object,
        default: () => {
          return {
            lat: 0,
            lng: 0
          }
        }
      }
    },
    data () {
      return {
        startLoad: false,
        //
        map: null,
        inited: false,
        points: []
      }
    },
    watch: {
      '$store.state.wxAuthStatus': function (v) {
        let that = this
        // 需要授权才可以加载的数据(授权比页面装载慢)
        if (v && !that.startLoad) {
          that.startLoad = true
          //
        }
      },
      'location': function (v) {
        let that = this
        if (that.inited) {
          that.map.panTo(that.getCenter())
        }
      },
      'branches': function () {
        let that = this
        that.refreshBranches()
      },
      'current': function () {
        let that = this
        if (that.inited) {
          let center = that.getCenter()
          that.map.panTo(center)
          that.points.forEach(function (item) {
            if (item._data.lat === center.lat && item._data.lng === center.lng) {
              item.domElement.classList.add('point-branch--selected')
            } else {
              item.domElement.classList.remove('point-branch--selected')
            }
          })
        }
      }
    },
    methods: {
      getCenter () {
        let that = this
        if (that.current.lat && that.current.lng) {
          return new BMap.Point(that.current.lng, that.current.lat)
        }
        return new BMap.Point(that.location.lng, that.location.lat)
      },
      initMap () {
        let that = this
        that.inited = true
        // 创建地图实例
        that.map = new BMap.Map('wc-branch-map')

        that.map.disableDoubleClickZoom()

        // 创建点坐标
        var point = that.getCenter()
        // 初始化地图， 设置中心点坐标和地图级别
        that.map.centerAndZoom(point, 15)

        that.refreshBranches()
      },
      refreshBranches () {
        let that = this

        that.map.clearOverlays()

        that.map.addOverlay(new LocationPoint(that.location))

        that.branches.forEach(function (item) {
          let branch = new BranchPoint(item)
          that.points.push(branch)
          that.map.addOverlay(branch)
        })
        let lastX = 0
        let lastY = 0
        // 选中网点
        that.points.forEach(function (item) {
          BMapLib.EventWrapper.addDomListener(item._div, 'touchstart', function ({targetTouches: {[0]: {clientX, clientY}, [1]: second}, currentTarget: {dataset: {num}}}) {
            lastX = clientX
            lastY = clientY

            // 缩放过程中隐藏网点
            if (second) {
              that.points.forEach(function (item) {
                item.domElement.style.display = 'none'
              })
            }
          })
          BMapLib.EventWrapper.addDomListener(item._div, 'touchend', function (e) {
            let {changedTouches: {[0]: {clientX, clientY}}, currentTarget: {dataset: {num}}} = e
            // 阻止拖动变点击
            if (Math.abs(lastX - clientX) < 10 && Math.abs(lastY - clientY) < 10) {
              // 阻止事件冒泡
              e.cancelBubble = true
              that.points.forEach(function (item) {
                if (item.domElement.classList.contains('point-branch--selected')) {
                  item.domElement.classList.remove('point-branch--selected')
                }
              })
              item.domElement.classList.add('point-branch--selected')
              let tempCenter = new BMap.Point(item._center.lng, item._center.lat)
              item._map.panTo(tempCenter)
              //              item._map.panTo(tempCenter, {noAnimation: item._map.getZoom() !== 17})
              //              item._map.setZoom(17)
              that.$emit('change', item._data)

              // 恢复显示网点
              that.points.forEach(function (item) {
                item.domElement.style.display = 'block'
              })
            }
          })
        })
        //        if (!that.current.lng && !that.current.lat && that.points.length > 0) {
        //          that.points[0].domElement.classList.add('point-branch--selected')
        //          that.$emit('change', that.points[0]._data)
        //          that.map.panTo(new BMap.Point(that.points[0]._center.lng, that.points[0]._center.lat))
        //        }
        let lastTouchX = 0
        let lastTouchY = 0
        that.map.addEventListener('touchstart', function ({targetTouches: {[0]: {clientX, clientY}, [1]: second}}) {
          lastTouchX = clientX
          lastTouchY = clientY
          // 缩放过程中隐藏网点
          if (second) {
            that.points.forEach(function (item) {
              item.domElement.style.display = 'none'
            })
          }
        })
        that.map.addEventListener('touchend', function ({changedTouches: {[0]: {clientX, clientY}, [1]: second}}) {
          // 取消选中网点
          //          if (Math.abs(lastTouchX - clientX) < 10 && Math.abs(lastTouchY - clientY) < 10) {
          //            that.points.forEach(function (item) {
          //              if (item.domElement.classList.contains('point-branch--selected')) {
          //                let {top, right, left, bottom} = item.domElement.getBoundingClientRect()
          //                if (clientX < left || clientX > right || clientY < top || clientY > bottom) {
          //                  item.domElement.classList.remove('point-branch--selected')
          //                }
          //              }
          //            })
          //          }
          // 恢复显示网点
          that.points.forEach(function (item) {
            item.domElement.style.display = 'block'
          })
        })
      },
      back () {
        let that = this
        //        that.map.centerAndZoom(new BMap.Point(that.location.lng, that.location.lat), 15)
        that.map.panTo(new BMap.Point(that.location.lng, that.location.lat))
      }
    },
    mounted () {
      let that = this
      // 需要授权才可以加载的数据(授权比页面装载快)
      if (that.$store.state.wxAuthStatus && !that.startLoad) {
        that.startLoad = true
        //
      }
      // 无需授权可以提前加载的数据
      that.initMap()
    }
  }
</script>
