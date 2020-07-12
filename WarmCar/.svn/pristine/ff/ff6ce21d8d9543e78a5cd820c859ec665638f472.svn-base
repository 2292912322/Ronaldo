export default [
  {
    // page	页码	是	int
    // rows	集合	是	JSONArray		JSONArray
    //
    // <rows>
    // orderId	订单ID	是	int
    // carId	车辆ID	是	int
    // carModelSmallUrl	车型小图	是	String
    // carLpn	车牌号	是	String
    // orderStatus	订单状态	是	String
    // appointmentTime	预约时间	是	long
    // appointmentBranchName	预约车辆时网点	是	String
    // returnCarBranchName	还车时网点	是	String
    // orderMny	订单金额	是	int		自动区分：需要支付金额和已支付金额
    name: 'order_list',
    desc: '我的订单列表',
    path: '/v206/order/warmcar_time_rental_order_list_service',
    mockPath: '',
    params: {
      page: 1,//	页码	是	int	默认第一页	1
      size: 10//	一页记录数	是	int		10
    },
    cache: false
  },
  {
    // orderId	订单ID	是	int
    // carModelSmallUrl	车型小图	是	String
    // carLpn	车牌号	是	String
    // carId	车辆ID	是	int
    // orderStatus	订单状态	是	String
    // appointmentTime	预约时间	是	long
    // takeCarTime	取车时间	是	long
    // returnCarTime	还车时间	是	long
    // appointmentBranchName	预约车辆时网点	是	String
    // appointmentBranchAddress	预约车辆时网点地址	是	String
    // returnCarBranchName	还车网点	是	String
    // returnCarBranchAddress	还车时网点地址	是	String
    // orderMny	订单金额	是	int
    // orderBackMny	订单补缴金额	是	int		只有在订单状态为补缴时，才有此值
    // totalTime	总行驶时间（分钟）	是	int
    // totalMileage	总行驶里程（公里）	是	String
    // switchEvaluation	是否评价	是	String
    // evaluationContent	评价内容	是	JSON
    // switchOrderShare	是否开启分享	是	String
    // orderShare	订单分享	是	JSON
    // costList	费用清单	是	Array		-
    // evaluationResult	点赞/吐槽	是	String		"01"点赞 "02"吐槽 ,空字符串表示无点赞吐槽
    //
    // <evaluationContent>
    // theme	评价标题	是	String
    // label	评价标签	是	String
    // time	评价时间	是	long
    // text	评价内容	是	String
    //
    // <costList>
    // name	名称	是	String
    // value	值	是	int
    //
    // <orderShare>
    // description	分享描述	是	String
    // thumb	缩略图链接	是	String
    // title	分享标题	是	String
    // url	分享网页链接	是	String
    // num	红包个数	是	int
    name: 'order_detail',
    desc: '订单明细',
    path: '/v206/order/warmcar_time_rental_order_detail_service',
    mockPath: '',
    params: {
      orderId: 0//	订单ID	是	int
    },
    cache: false
  },
  {
    // paymentData	支付字符	是	String		0
    // bankType	支付方式	是	string		01支付宝， 02微信， 03余额， 06 团体账号余额
    name: 'unified_order',
    desc: '订单支付',
    path: '/v206/order/warmcar_time_rental_unified_order_service',
    mockPath: '',
    params: {
      bankType:'',//	支付方式	是	string		01支付宝， 02微信， 03余额， 06 团体账号余额
      orderId:'',//	订单Id	是	int		1
      couponId:'',//	优惠券ID	是	int	无优惠劵的时候传0	10
    },
    cache: false
  },
  {
    // paymentData	支付字符	是	String		0
    // bankType	支付方式	是	string		01支付宝， 02微信， 03余额， 06 团体账号余额
    name: 'order_confirm_pay',
    desc: '订单支付确认',
    path: '/v206/order/warmcar_time_rental_order_confirm_pay_service',
    mockPath: '',
    params: {
      orderId:'',//	订单Id	是	int		1
    },
    cache: false
  },
]