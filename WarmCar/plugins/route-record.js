import _ from 'lodash'
import { xyTools } from 'vue-xy-ui'

function init ({app}) {
  let {router} = app
  /*++++++++++ router record start ++++++++++*/
  let cacheRecords = sessionStorage.getItem('records')
  let cacheRecordsCount = sessionStorage.getItem('records-count')

  let records = cacheRecords === null ? [] : JSON.parse(cacheRecords)
  let recordCount = cacheRecordsCount === null ? 0 : parseInt(cacheRecordsCount)

  router.afterEach((to, from) => {
    // window.isPay = /\/pay$/.test(to.path)

    if (window.entryUrl === undefined || window.entryUrl === '') {
      window.entryUrl = window.location.href
    }
  })

  router.beforeEach((to, from, next) => {
    // debugger
    // console.log(router)
    // console.log('%c----------Start----------', 'color:red;font-size:20px;')
    // console.log(`%chistory.length: ${history.length}`, 'color:red')
    // console.log(`%chistory.state.key: ${history.state.key}`, 'color:red')
    // console.log(`%cto.path: ${to.path}`, 'color:red')
    // console.log(`%cto.key: ${to.meta.key}`, 'color:red')
    // console.log(`%cfrom.path: ${from.path}`, 'color:red')
    // console.log(`%cfrom.key: ${from.meta.key}`, 'color:red')
    // console.log(`%crecords:\n${[...records].map(x => JSON.stringify(x))
    //                                        .join('\n')}`, 'color:black')
    // console.log('%c----------Start----------', 'color:red;font-size:20px;')

    // 通知上一页不要取缓存
    if (from.meta.noCache) {
      from.meta.noCache = false
      to.meta.noCache = true
    }

    // 返回数据
    if (from.meta.back) {
      to.meta.back = Object.assign({}, from.meta.back)
    }

    let fi = records.find(o => o.path === from.fullPath)
    let ti = records.find(o => o.path === to.fullPath)

    if (!fi) {
      if (from.fullPath === '/') {
        fi = {
          name: from.name,
          path: from.fullPath,
          key: recordCount++
        }
        records.push(fi)
      }
    }

    if (ti) {
      let index = _.findLastIndex(records, function (o) {
        return ti.path === o.path
      })
      if (index >= 0) {
        records = _.dropRightWhile(records, function (o) {
          return ti.path !== o.path
        })
      }
    } else {
      ti = {
        name: to.name,
        path: to.fullPath,
        key: recordCount++
      }
      records.push(ti)
    }

    if (fi.key < ti.key) {
      if (fi.key === 0) {
        console.log('%c首进', 'color:green')
      } else {
        console.log('%c前进', 'color:green')
      }
      to.meta.move = 'in'
    } else if (fi.key > ti.key) {
      console.log('%c后退', 'color:green')
      to.meta.move = 'out'
    } else {
      console.log('%c其他', 'color:green')
      // debugger
    }

    sessionStorage.setItem('records', JSON.stringify(records))
    sessionStorage.setItem('records-count', recordCount)

    next()

    // console.log(router)
    // console.log('%c----------End----------', 'color:blue;font-size:20px;')
    // console.log(`%chistory.length: ${history.length}`, 'color:blue')
    // console.log(`%chistory.state.key: ${history.state.key}`, 'color:blue')
    // console.log(`%cto.path: ${to.path}`, 'color:blue')
    // console.log(`%cto.key: ${to.meta.key}`, 'color:blue')
    // console.log(`%cfrom.path: ${from.path}`, 'color:blue')
    // console.log(`%cfrom.key: ${from.meta.key}`, 'color:blue')
    // console.log(`%crecords:\n${[...records].map(x => JSON.stringify(x))
    //                                        .join('\n')}`, 'color:black')
    // console.log('%c----------End----------', 'color:blue;font-size:20px;')
  })
  /*---------- router record end ----------*/
}

export default init