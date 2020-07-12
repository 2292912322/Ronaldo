export default [
  {
    //   phone	手机号码	是	String	用户登录手机号码	纯11位的数字
    //   nickName	客户昵称	是	String
    //   headImg	头像	是	String		URL
    //   certificationStatus	用户认证状态	是	String		0
    //   moneyStatus	资产状态	是	String		0
    //   sex	性别	是	String		0
    name: 'customer_login_register',
    desc: '会员注册接口',
    path: '/v206/home/warmcar_bkl_customer_login_register_service',
    mockPath: '',
    params: {
      phone: '', // 手机号码	是	String	用户登录手机号码	纯11位的数字
      terminalType: '06', // 终端类型	是	String	"01"android "02"IOS
      cityCode: ''
    },
    cache: false
  },
   
  ]
  