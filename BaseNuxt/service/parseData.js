// // 迎合warmcar接口
// // 公共参数:
// // customerId        int
// // timestamp         (new Date()).getTime()
// // session           string
// // sign              string
// //
// // bizContent        bizContent
// import cookie from 'js-cookie'
// import _ from 'lodash'
// import {
//   WC_KEY
// } from '~/config'
// import MD5 from 'crypto-js/md5'

// function toSortObj (obj) {
//   return _.fromPairs(_.filter(_.sortBy(_.toPairs(obj), o => {
//     return o[0]
//   }), o => o[1] || (typeof o[1] === 'number')))
// }

// function toAscii (str) {
//   let sum = 0
//   for (let i = 0; i < str.length; i++) {
//     sum += str[i].charCodeAt()
//   }
//   return sum
// }

// function toQuery (obj) {
//   let arr = []
//   for (let p in obj) {
//     if (p === 'bizContent') {
//       arr.push(`${p}=${toAscii(obj[p])}`)
//     } else {
//       arr.push(`${p}=${obj[p]}`)
//     }
//   }
//   return arr.join('&') + `&key=${WC_KEY}`
// }

// export default function (data) {
//   let params = {
//     customerId: cookie.get('customerId'),
//     timestamp: (new Date()).getTime(),
//     session: cookie.get('session'),
//     bizContent: JSON.stringify(data)
//   }
//   // console.log('params:')
//   // console.log(`%c${JSON.stringify(params)}`, 'color:green')

//   let sortObj = toSortObj(params)
//   // console.log('sortObj:')
//   // console.log(`%c${JSON.stringify(sortObj)}`, 'color:green')

//   let stringA = toQuery(sortObj)
//   // console.log('stringA:')
//   // console.log(`%c${stringA}`, 'color:green')

//   params.sign = MD5(stringA)
//     .toString()
//     .toUpperCase()
//   return params
// }