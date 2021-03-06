var express = require('express')
var fs = require('fs')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var Mock = require('mockjs/src/mock')
var Random = Mock.Random
var multer = require('multer')
var upload = multer({dest: 'uploads/'})
var router = express.Router()
var _ = require('lodash')
//解析一般post参数至req.body上
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

function newImage () {
  // return Random.image()
  // return `http://lorempixel.com/${Random.integer(100, 1000)}/${Random.integer(100, 1000)}/${type}`
  // return `http://picsum.photos/${Random.integer(100, 1000)}/${Random.integer(100, 1000)}?random`
  // return `https://api.yingjoy.cn/pic/?t=bing&w=1366`
  return `http://dummyimage.com/${Random.integer(100, 1000)}x${Random.integer(100, 1000)}/cffbfd/000`
  // return `https://placeimg.com/${Random.integer(100, 1000)}/${Random.integer(100, 1000)}/any?${Random.guid()}`
}

let waitMs = 1000

//允许跨域访问
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type,session,X-Requested-With')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})

let article = `
<p>　　原标题：（出访）习近平抵达阿布扎比开始对阿拉伯联合酋长国进行国事访问&nbsp;</p>
<div class="img_wrapper"><img src="${newImage()}" alt="7月19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。阿联酋副总统兼总理穆罕默德在机场为习近平举行迎接仪式。这是习近平和夫人彭丽媛在阿联酋副总统兼总理穆罕默德、阿布扎比王储穆罕默德陪同下前往检阅大厅。 新华社记者李学仁摄" data-mcesrc="http://www.xinhuanet.com/world/2018-07/20/1123151532_15320241862821n.jpg" data-mceselected="1" data-link=""><span class="img_descr">　　7月19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。阿联酋副总统兼总理穆罕默德在机场为习近平举行迎接仪式。这是习近平和夫人彭丽媛在阿联酋副总统兼总理穆罕默德、阿布扎比王储穆罕默德陪同下前往检阅大厅。 新华社记者李学仁摄</span></div>
<p>　　新华社阿布扎比7月19日电（记者苏小坡　李忠发　郑开君）19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。&nbsp;</p>
<p>　　当习近平乘坐的专机进入阿联酋领空时，阿联酋空军12架战机升空护航。当地时间下午5时40分许，专机抵达阿布扎比总统机场。习近平和夫人彭丽媛步出舱门，阿联酋副总统兼总理穆罕默德、阿布扎比王储穆罕默德在廊桥口热情迎接。阿联酋儿童向习近平和彭丽媛献上鲜花。&nbsp;</p>
<p>　　穆罕默德副总统兼总理在机场为习近平举行迎接仪式。&nbsp;</p>
<p>　　习近平和彭丽媛在穆罕默德副总统兼总理、穆罕默德王储陪同下前往检阅大厅，仪仗队列队迎候。鸣21响礼炮。习近平和彭丽媛同穆罕默德副总统兼总理共同登上检阅台。军乐队奏中国国歌。国歌毕，习近平和彭丽媛在穆罕默德副总统兼总理、穆罕默德王储陪同下前往会见厅，同阿联酋主要内阁部长和重要王室成员等阿方迎接人员握手。穆罕默德副总统兼总理、穆罕默德王储同中方陪同人员握手。习近平同穆罕默德副总统兼总理、穆罕默德王储亲切交谈。&nbsp;</p>
<p>　　习近平代表中国政府和中国人民，向阿联酋政府和人民致以诚挚问候和良好祝愿。习近平指出，中阿建交34年来，两国始终相互尊重、平等相待，双边关系得到长足发展，各领域务实合作成果丰硕。阿联酋是我这次出访的第一站，也是我再次担任中国国家主席后访问的第一个国家，体现了中方对中阿关系的重视。刚刚抵达阿布扎比，我就感受到了阿联酋人民的热情友好，深受感动。我期待着同阿联酋领导人就发展两国关系深入交换意见。相信在双方共同努力下，这次访问将取得圆满成功，增进两国和两国人民友谊。&nbsp;</p>
<div class="img_wrapper"><img src="${newImage()}" alt="7月19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。阿联酋副总统兼总理穆罕默德在机场为习近平举行迎接仪式。这是习近平和夫人彭丽媛同阿联酋副总统兼总理穆罕默德共同登上检阅台。 新华社记者谢环驰摄" data-mcesrc="http://www.xinhuanet.com/world/2018-07/20/1123151532_15320241862891n.jpg" data-mceselected="1" data-link=""><span class="img_descr">　　7月19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。阿联酋副总统兼总理穆罕默德在机场为习近平举行迎接仪式。这是习近平和夫人彭丽媛同阿联酋副总统兼总理穆罕默德共同登上检阅台。 新华社记者谢环驰摄</span></div>
<p>　　穆罕默德副总统兼总理和穆罕默德王储热烈欢迎习近平主席对阿联酋进行国事访问，表示习近平主席是阿联酋人民的老朋友、好朋友，很荣幸习近平主席选择阿联酋作为连任中国国家主席后首次出访的首站，阿方各界热切期盼习近平主席这次重要、历史性访问。相信习近平主席这次访问将有力促进阿中战略性关系进一步发展。&nbsp;</p>
<p>　　习近平和彭丽媛在穆罕默德副总统兼总理、穆罕默德王储陪同下离开会见厅。当地青年和儿童跳起阿联酋特色舞蹈，欢迎最尊贵的客人。&nbsp;</p>
<p>　　丁薛祥、杨洁篪、王毅、何立峰等陪同人员同机抵达。&nbsp;</p>
<p>　　中国驻阿联酋大使倪坚也到机场迎接。&nbsp;</p>
<p>　　在结束对阿联酋的国事访问后，习近平还将对塞内加尔、卢旺达、南非进行国事访问，出席在南非约翰内斯堡举行的金砖国家领导人第十次会晤，过境毛里求斯并进行友好访问。（完）</p>				
<p class="show_author">责任编辑：张玉 </p>
`

app.post('/xmf/detail', function (req, res) {
  console.log(['/pb/course/detail', JSON.stringify(req.body), JSON.stringify(req.query)])
  let list = []
  let type = Random.integer(0, 2)
  for (let i = 0; i < Random.integer(12, 36); i++) {
    list.push({
      'webContextPath': null,
      'pageNum': null,
      'pageSize': null,
      'sortName': null,
      'sortOrder': null,
      'coursewarePkno': Random.guid(),
      'curriculumPkno': Random.guid(),
      'coursewareName': Random.ctitle(4, 50),
      'createTime': 1531730968000,
      'views': Random.integer(0, 10000),
      'sortNum': 1,
      'cover': newImage(),
      'shortDesc': Random.cparagraph(100, 1000),
      'longDesc': Random.cparagraph(100, 1000),
      'createBy': '超级管理员',
      'status': 'N',
      'beginTime': null,
      'endTime': null,
      'fileName': 'test.mp4',
      'file': [
        article,
        `../../test.pdf`,
        `http://${host === '::' ? 'localhost' : host}:${port}/test.mp4`
      ][type],
      'memberPkno': null,
      'isStuding': Random.boolean() ? 'Y' : 'N',
      'isFinish': Random.boolean() ? 'Y' : 'N',
      'createTimeStr': '3天前',
      // 'dataPattern': ['picture', 'pdf', 'video'][type],
    })
  }

  setTimeout(function () {
    res.json({
      success: true,
      message: null,
      code: null,
      attach: null,
      data: {
        list: list,
        curriculum: {
          'webContextPath': null,
          'pageNum': null,
          'pageSize': null,
          'sortName': null,
          'sortOrder': null,
          'curriculumPkno': Random.guid(),
          'curriculumName': Random.ctitle(4, 50),
          'dataFrom': Random.ctitle(4, 20),
          'curriculumTypePkno': Random.guid(),
          'createTime': 1531730953000,
          'status': 'Y',
          'shortDesc': ''
          // + '<p>&nbsp;1N</p>'
          // + '<p>&nbsp;1N 1空</p>'
          // + '<p>&nbsp;&nbsp;2N</p>'
          // + '<p>&nbsp; &nbsp;1N 1空 1N</p>'
          // + '<p>&nbsp;&nbsp;&nbsp;3N</p>'
          // + '<p>&nbsp; &nbsp; &nbsp;1N 1空 1N 1空 1N</p>'
          // + '<p>&nbsp; &nbsp; &nbsp; 1N 1空 1N 1空 1N 1空</p>'
          // + '<p>&nbsp;&nbsp;&nbsp;&nbsp;4N</p>'
          // + '<p>&nbsp; &nbsp; &nbsp; &nbsp; 1N 1空 1N 1空 1N 1空 1N 1空</p>'
          // + '<p> 1空</p>'
          // + '<p>  2空</p>'
          // + '<p>   3空</p>'
          // + '<p>    4空</p>'
          // + '<p>A A+1空</p>'
          // + '<p>A  A+2空</p>'
          // + '<p>A   A+3空</p>'
          // + '<p>A    A+4空</p>'
          // + '<p>A B A+1空+B</p>'
          // + '<p>A  B A+2空+B</p>'
          // + '<p>A   B A+3空+B</p>'
          // + '<p>A    B A+4空+B</p>'
          // + '<p>&nbsp;1N</p>'
          // + '<p>&nbsp;&nbsp;2N</p>'
          // + '<p>&nbsp;&nbsp;&nbsp;3N</p>'
          // + '<p>&nbsp;&nbsp;&nbsp;&nbsp;4N</p>'
          // + '<p>A&nbsp;A+1N</p>'
          // + '<p>A&nbsp;&nbsp;A+2N</p>'
          // + '<p>A&nbsp;&nbsp;&nbsp;A+3N</p>'
          // + '<p>A&nbsp;&nbsp;&nbsp;&nbsp;A+4N</p>'
          // + '<p>A&nbsp;B A+1N+B</p>'
          // + '<p>A&nbsp;&nbsp;B A+2N+B</p>'
          // + '<p>A&nbsp;&nbsp;&nbsp;B A+3N+B</p>'
          // + '<p>A&nbsp;&nbsp;&nbsp;&nbsp;B A+4N+B</p>'
          + '    &nbsp; &nbsp; &nbsp; ' + Random.cparagraph(100, 1000),
          'dataPattern': ['picture', 'pdf', 'video'][type],
          'cover': newImage(),
          'sortNum': 2,
          'views': Random.integer(0, 10000),
          'isRecommend': 'N',
          'createBy': null,
          'beginTime': null,
          'endTime': null,
          'memberPkno': null,
          'isStuding': Random.boolean() ? 'Y' : 'N',
          'totalCount': Random.integer(1, 48),
          'finishedCount': null,
          'state': null
        }
      }
    })
  }, waitMs)
})

app.get('/test/get', function (req, res) {
  res.json({
    success: true,
    message: null
  })
})

function validatePath (path) {
  return path && fs.existsSync(path)
}

router.route('/video/:file')
      .get(function (req, res) {
        const path = '/Users/xachary/WebstormProjects/WarmCar/mock/' + req.params.file
        let match = path.match(/\.([^\.]+)$/)
        if (validatePath(path)) {
          const stat = fs.statSync(path)
          const fileSize = stat.size
          const range = req.headers.range
          if (range) {
            const parts = range.replace(/bytes=/, '')
                               .split('-')
            const start = parseInt(parts[0], 10)
            const end = parts[1]
              ? parseInt(parts[1], 10)
              : fileSize - 1
            // console.log(range)
            // console.log([start, end])
            const chunksize = (end - start) + 1
            const file = fs.createReadStream(path, {
              start,
              end
            })
            const head = {
              'Content-Range':
                `bytes ${start}-${end}/${fileSize}`,
              'Accept-Ranges': 'bytes',
              'Content-Length': chunksize,
              'Content-Type': `
video/$
  {match[1]}
`
            }
            res.writeHead(206, head)
            file.pipe(res)
          } else {
            const head = {
              'Content-Length': fileSize,
              'Content-Type': `video/${match[1]}`,
            }
            res.writeHead(200, head)
            fs.createReadStream(path)
              .pipe(res)
          }
        } else {
          res.status(404)
             .send('找不到文件')
        }
      })

app.use('', router)

app.use(express.static('static'))

var host = ''
var port = ''
//启动服务
var server = app.listen(3004, function () {
  host = server.address().address
  port = server.address().port
  console.log(server.address())
  console.log('测试接口启动: http://%s:%s', host, port)
})